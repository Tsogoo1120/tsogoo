# Firebase Deployment Guide

## Prerequisites
- ✅ Firebase CLI installed (`firebase-tools`)
- Google account with Firebase project
- Terminal/Command line access

## Step-by-Step Deployment

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Create a project"**
3. Enter project name: `tsogoo-terminal-portfolio` (or your preference)
4. Disable Google Analytics (optional)
5. Click **"Create project"** and wait for completion
6. Copy your **Project ID** (you'll need it next)

### 2. Update `.firebaserc`
Replace `YOUR_FIREBASE_PROJECT_ID` in `.firebaserc` with your actual project ID:
```json
{
  "projects": {
    "default": "your-project-id-here"
  }
}
```

### 3. Login to Firebase
Run this command to authenticate:
```bash
firebase login
```
- Browser will open
- Sign in with your Google account
- Allow Firebase CLI to access your account
- Return to terminal (you should see "Success!")

### 4. Verify Project Connection
```bash
firebase projects:list
```
Should show your project listed.

### 5. Deploy to Firebase Hosting
```bash
firebase deploy
```

Expected output:
```
=== Deploying to 'tsogoo-terminal-portfolio'...

i  deploying hosting
i  hosting: preparing terminal.fkcodes.com directory for upload...
✔  hosting: 123 files uploaded successfully
i  hosting: finalizing version...
✔  hosting: version abc123def released and live

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/tsogoo-terminal-portfolio/overview
Hosting URL: https://tsogoo-terminal-portfolio.web.app
```

### 6. Access Your Site
Your site will be live at:
- **Primary URL**: `https://your-project-id.web.app`
- **Secondary URL**: `https://your-project-id.firebaseapp.com`

---

## Commands Reference

| Command | Purpose |
|---------|---------|
| `firebase login` | Authenticate with Firebase |
| `firebase logout` | Sign out |
| `firebase projects:list` | List your Firebase projects |
| `firebase deploy` | Deploy to Firebase Hosting |
| `firebase deploy --only hosting` | Deploy only hosting (not other services) |
| `firebase hosting:channel:list` | View deployment channels |
| `firebase emulators:start` | Test locally before deploying |

---

## Troubleshooting

### Error: "No hosting configuration found"
- Make sure `firebase.json` exists in the root directory
- Verify `public` field points to `terminal.fkcodes.com`

### Error: "Project ID not found"
- Update `.firebaserc` with correct project ID
- Run `firebase projects:list` to verify

### Error: "You do not have permission"
- Ensure you're logged in: `firebase login`
- Verify you're the project owner on Firebase Console

### Files not uploading
- Check `firebase.json` `ignore` patterns
- Ensure all files are in `terminal.fkcodes.com/` directory
- Clear cache: `rm -rf .firebase/`

---

## Post-Deployment

### Enable Custom Domain (Optional)
1. In Firebase Console: **Hosting** → **Connected domains**
2. Add your custom domain
3. Follow DNS setup instructions
4. Wait for SSL certificate (24-48 hours)

### View Analytics
Firebase Console → **Hosting** → View performance metrics

### Rollback Deployment
1. Firebase Console → **Hosting** → **Deployments**
2. Click version to rollback
3. Click **"Rollback"**

---

## Performance Tips

✅ **Already configured:**
- Static asset caching (1 year)
- SPA rewrite (all routes → index.html)
- Gzip compression (automatic)
- CDN distribution

✅ **Next steps:**
- Add your music file to `terminal.fkcodes.com/music/`
- Test on mobile devices
- Monitor performance in Firebase Console

---

## Environment Variables
If you need environment variables, create a `.env.example`:
```
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_API_KEY=your-api-key
```

Then add `.env` to `.gitignore` (already done).

---

## Support
- [Firebase Hosting Docs](https://firebase.google.com/docs/hosting)
- [Firebase CLI Reference](https://firebase.google.com/docs/cli)
- [Deploy Multiple Sites](https://firebase.google.com/docs/hosting/multisites)
