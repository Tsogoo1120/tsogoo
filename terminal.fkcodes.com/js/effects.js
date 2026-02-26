
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var terminalBody  = null;   /* set in ready() */


  var _origScrollTo = window.scrollTo.bind(window);
  window.scrollTo = function (xOrOpts, y) {
    if (terminalBody) {
      /* Scroll the inner body to its bottom */
      terminalBody.scrollTo({ top: terminalBody.scrollHeight, behavior: 'smooth' });
    } else {
      _origScrollTo(xOrOpts, y);
    }
  };

  function observeTerminalLines() {
    if (reducedMotion) return;

    var terminal = document.getElementById('terminal');
    if (!terminal) return;

    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (node) {
          if (node.nodeType === 1 && node.tagName === 'P') {
            node.style.opacity    = '0';
            node.style.transform  = 'translateY(4px)';
            node.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
            /* Double rAF ensures the style is applied before we remove it */
            requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                node.style.opacity   = '1';
                node.style.transform = 'translateY(0)';
              });
            });
          }
        });
      });
    });

    observer.observe(terminal, { childList: true });
  }


  function initPromptGlow() {
    if (reducedMotion) return;
    var style = document.createElement('style');
    style.textContent =
      '@keyframes prompt-glow{' +
        '0%,100%{text-shadow:0 0 6px rgba(110,201,168,.2)}' +
        '50%{text-shadow:0 0 16px rgba(110,201,168,.55)}' +
      '}' +
      '#liner::before{animation:prompt-glow 3s ease-in-out infinite}';
    document.head.appendChild(style);
  }

  var audioCtx = null;
  var soundOn  = false;

  function playTick(freq, dur) {
    if (!soundOn || !audioCtx) return;
    try {
      var osc  = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      osc.type = 'square';
      osc.frequency.value = freq || 420;
      gain.gain.value = 0.018;
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + (dur || 0.04));
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + (dur || 0.04));
    } catch (e) { /* ignore */ }
  }

  function initSound() {
    var ta     = document.getElementById('texter');
    var mascot = document.querySelector('.pixel-mascot');

    if (ta) {
      ta.addEventListener('keydown', function (e) {
        if (!soundOn) return;
        e.key === 'Enter'
          ? playTick(580, 0.06)
          : playTick(260 + Math.random() * 160, 0.025);
      });
    }

    if (mascot) {
      mascot.addEventListener('click', function (e) {
        e.stopPropagation();
        soundOn = !soundOn;
        if (soundOn && !audioCtx) {
          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        mascot.classList.toggle('sound-on', soundOn);
        /* Bounce feedback */
        mascot.style.transform = 'translateY(-5px)';
        setTimeout(function () { mascot.style.transform = ''; }, 180);
      });
    }
  }

  /* ======================================================================
     Background Music Toggle
     ====================================================================== */
  var bgMusic = null;
  var musicPlaying = false;

  function initMusic() {
    bgMusic = document.getElementById('bg-music');
    var musicToggle = document.getElementById('music-toggle');

    if (!bgMusic || !musicToggle) return;

    /* Attempt to autoplay (will be muted by browser if user hasn't interacted) */
    var playPromise = bgMusic.play();
    if (playPromise !== undefined) {
      playPromise.catch(function () {
        /* Autoplay prevented; wait for user interaction */
      });
    }

    musicToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (bgMusic.paused) {
        bgMusic.play();
        musicPlaying = true;
        musicToggle.classList.add('playing');
      } else {
        bgMusic.pause();
        musicPlaying = false;
        musicToggle.classList.remove('playing');
      }
    });

    /* Update UI state when music plays/pauses via other means */
    bgMusic.addEventListener('play', function () {
      musicPlaying = true;
      musicToggle.classList.add('playing');
    });

    bgMusic.addEventListener('pause', function () {
      musicPlaying = false;
      musicToggle.classList.remove('playing');
    });

    /* Resume music on user interaction if autoplay was blocked */
    document.addEventListener('click', function attemptAutoplay() {
      if (bgMusic && bgMusic.paused && !musicPlaying) {
        bgMusic.play().catch(function () {});
      }
    }, { once: true });
  }

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    terminalBody = document.getElementById('terminal-body');
    observeTerminalLines();
    initPromptGlow();
    initSound();
    initMusic();
  });

})();
