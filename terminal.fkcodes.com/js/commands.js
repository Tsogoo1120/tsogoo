var youtube = "https://www.youtube.com/@tsogoo_1120";
var password = "password";
var instagram = "https://www.instagram.com/tsogoo_1120/";
var email = "altancog@gmail.com";

var knightAscii = [
  "          ////   \\\\ ",
  "          | ^   ^ |",
  "         @ (o) (o) @",
  "          |   <   |",
  "          |  ___  |",
  "           \\_____/",
  "         ___|  |____",
  "       /\\   \\__/    \\",
  "      /  \\            \\",
  "     / /  |        |\\  \\",
  "    / /   |        | \\  \\",
  "    ( <   |        |  \\  )",
  "     \\ \\  |        |  / /",
  "      \\ \\ |________| / /",
  "       \\ \\|<I_D_I__|/ /",
  "        \\ \\ / I  \\ / /",
  "         \\ /  I   \\ /",
  "         |         |",
  "         |    |    |",
  "         |    |    |",
  "         |    |    |",
  "         |    |    |",
  "         | ## | ## |",
  "         |    |    |",
  "         |    |    |",
  "         |____|____|",
  "         (____(____)",
  "          _| | _| |",
  "      cccC__Cccc___)",
];

skill = ["<br>"]
  .concat(knightAscii)
  .concat([
    "<br>",
    "Сайн уу, намайг Алтанцог гэдэг.",
    "Fullstack website хөгжүүлэгч.",
    "2022 оноос хойш программчлалыг бие дааж сурч, өөрийн хэд хэдэн бодит төслүүд дээр ажилласан.",
    "Front-end талдаа Vue, Nuxt, React ашиглан responsive, хэрэглэгчид ойлгомжтой интерфэйсүүд хийдэг.",
    "Back-end дээр Firebase ашиглаж authentication, database, storage холболтууд хийж ажилласан.",
    "Мөн API холболт, payment logic, real-time data зэрэг зүйлс дээр ажиллаж байсан.",
    "Google APIs болон AWS ашиглаж deployment, integration хийж байсан туршлагатай.",
  ]);

var profileImg = "./css/img.png";

whoami = [
  "<br>",
  "<img src='" +
    profileImg +
"' class='profile-image' style='width:100%; max-width:520px; height:auto; border-radius:5px; margin-bottom:10px; border:2px solid #00ff00; transition:all 0.3s ease;'>",
  "Миний ажиллаж байсан зарим төслүүд 👇",
  "<br><br>",

  "Tarot App",
  "Vue + Firebase | Booking system | Admin dashboard | Storage",
  '<a href="https://tarot-admin-6aff5.web.app/" target="_blank"><button style="padding:6px 12px; margin-top:6px; border-radius:6px; border:1px solid #555; background:none; color:white; cursor:pointer;">Website үзэх</button></a>',
  "<br><br>",

  " Pi and People",
  "React + Tailwind | 2023 Landing page",
  '<a href="https://piandpeople.com/" target="_blank"><button style="padding:6px 12px; margin-top:6px; border-radius:6px; border:1px solid #555; background:none; color:white; cursor:pointer;">Website үзэх</button></a>',
  "<br><br>",

  " Central Asia Tech Summit",
  "→ React + Tailwind | 2024 landing page for startup competetion prize 1 million usd",
  '<a href="https://central-asia-tech-summit.com/" target="_blank"><button style="padding:6px 12px; margin-top:6px; border-radius:6px; border:1px solid #555; background:none; color:white; cursor:pointer;">Website үзэх</button></a>',
  "<br><br>",

  " Oibayasakh",
  "→ React + Tailwind | landing page",
  '<a href="https://oibayasakh.mn/" target="_blank"><button style="padding:6px 12px; margin-top:6px; border-radius:6px; border:1px solid #555; background:none; color:white; cursor:pointer;">Website үзэх</button></a>',
  "<br><br>",

  " Wordpress | using template recreated also maintained 2023-2024",
  '<a href="https://usut.mn/en/homepage/" target="_blank"><button style="padding:6px 12px; margin-top:6px; border-radius:6px; border:1px solid #555; background:none; color:white; cursor:pointer;">Website үзэх</button></a>',
  "<br>",
  '<a href="https://suuder.mn/home/" target="_blank"><button style="padding:6px 12px; margin-top:6px; border-radius:6px; border:1px solid #555; background:none; color:white; cursor:pointer;">Website үзэх</button></a>',
  "<br><br>",

  " Ineemseglel| 2024",
  "→ React",
  '<a href="https://ineemseglel.mn/" target="_blank"><button style="padding:6px 12px; margin-top:6px; border-radius:6px; border:1px solid #555; background:none; color:white; cursor:pointer;">Website үзэх</button></a>',
];

social = [
  "<br>",
'YouTube "Hobby"         <a href="' +
  youtube +
  '" target="_blank">youtube/@tsogoo_1120</a>',
"<br>",
'Instagram      <a href="' +
  instagram +
  '" target="_blank">instagram/forrestpknight</a>',
"<br>",
'Email          <a href="mailto:' +
  email +
  '">' +
  email +
  "</a>",
"<br>",
];

secret = [
  "<br>",
  '<span class="command">sudo</span>           Only use if you\'re admin',
  "<br>",
];





help = [
"<br>",
'<span class="command" style="padding:6px 12px; display:inline-block; border:1px solid #555; border-radius:6px; margin-top:8px; margin-bottom:16px;">Түлхүүр үгийг дагаж бичиж мэдээлэл аваарай</span>',

'<span style="display:flex; gap:10px;"><span class="command" style="min-width:80px;">skill</span><span>Миний программын чадвар</span></span>',
'<span style="display:flex; gap:10px;"><span class="command" style="min-width:80px;">whoami</span><span>Миний ажиллаж байсан төслүүд</span></span>',
'<span style="display:flex; gap:10px;"><span class="command" style="min-width:80px;">social</span><span>Надтай холбогдохыг хүсвэл</span></span>',
'<span style="display:flex; gap:10px;"><span class="command" style="min-width:80px;">history</span><span>Коммандалсан түүх харах</span></span>',
'<span style="display:flex; gap:10px;"><span class="command" style="min-width:80px;">help</span><span>Чи угаасаа энэ коммандын үүргийг мэдэж байгаа</span></span>',
'<span style="display:flex; gap:10px;"><span class="command" style="min-width:80px;">clear</span><span>Цэвэрлэх</span></span>',
'<span style="display:flex; gap:10px;"><span class="command" style="min-width:80px;">banner</span><span>Баннер харах</span></span>',
"<br>",
];



var asciiDesktop = [
  '<span class="index">Tsogoo_1120 (TS) Not A Corporation just freelancer.</span>',
  " ________                                                 ",
  "|        \\                                                ",
  " \\$$$$$$$$_______   ______    ______    ______    ______  ",
  "   | $$  /       \\ /      \\  /      \\  /      \\  /      \\ ",
  "   | $$ |  $$$$$$$|  $$$$$$\\|  $$$$$$\\|  $$$$$$\\|  $$$$$$\\",
  "   | $$  \\$$    \\ | $$  | $$| $$  | $$| $$  | $$| $$  | $$",
  "   | $$  _\\$$$$$$\\| $$__/ $$| $$__| $$| $$__/ $$| $$__/ $$",
  "   | $$ |       $$ \\$$    $$ \\$$    $$ \\$$    $$ \\$$    $$",
  "    \\$$  \\$$$$$$$   \\$$$$$$  _\\$$$$$$$  \\$$$$$$   \\$$$$$$ ",
  "                            |  \\__| $$                    ",
  "                             \\$$    $$                    ",
  "                              \\$$$$$$                     ",
  "                                                          ",
'<span class="color2">Тавтай морил 👋</span>',
  '<span class="color2">эхлүүлэх бол</span> <span class="command">\'Help\'</span> <span class="color2">гэж бичиж эхлүүлээрэй.</span>',
];

/* Mobile: F in $$ style + K in pipe/diagonal — max 40 chars per line */
var asciiMobile = [
  '<span class="index"> terminal portfolio website</span>',
"  ______                          ",
" /_  __/________  ____ _____  ____",
"  / / / ___/ __ \\/ __ `/ __ \\/ __ \\",
" / / (__  ) /_/ / /_/ / /_/ / /_/ /",
"/_/ /____/\\____/\\__, /\\____/\\____/ ",
"               /____/             ",
'<span class="color2">Тавтай морил 👋</span>',
  '<span class="color2">эхлүүлэх бол</span> <span class="command">\'Help\'</span> <span class="color2">гэж бичиж эхлүүлээрэй.</span>',
];

/* Pick variant based on viewport; re-evaluates whenever 'banner' command runs */
function getBanner() {
  return window.innerWidth < 768 ? asciiMobile : asciiDesktop;
}

banner = getBanner();

/* Stay in sync if the user resizes then re-types 'banner' */
window.addEventListener("resize", function () {
  banner = getBanner();
});
