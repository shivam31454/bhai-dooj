Deployment to Vercel — quick guide

This project is a Vite + React + TypeScript site prepared for static deployment.

Files added for Vercel
- `vercel.json` — instructs Vercel to use `@vercel/static-build` and rewrite routes to `index.html` for SPA support.

What I already did
- Ran `npm install` and `npm run build` locally — build succeeded and `dist/` was produced.
- Added `vercel.json` in the project root.

Steps you need to do (push & deploy)

1) Push the code to GitHub
- Create a GitHub repository (if you don't have one already). Then run from the project root:

```powershell
# only run these if you haven't already linked a remote
git init
git add .
git commit -m "Prepare for Vercel deploy: add vercel.json and README"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Replace `<your-username>` and `<repo-name>` with your GitHub details.

2) Deploy on Vercel (Dashboard — recommended)
- Go to https://vercel.com and sign in (you can use GitHub SSO).
- Click "New Project" → "Import Git Repository" and choose the repo you pushed.
- Vercel auto-detects Vite. If it asks for build settings, use:
  - Build command: `npm run build`
  - Output directory: `dist`
- Click Deploy. After the build finishes, Vercel will give you a URL you can share.

3) (Optional) Deploy with Vercel CLI
```powershell
npm i -g vercel
vercel login
# from project root
vercel    # follow prompts
# when ready to publish to production
vercel --prod
```

4) Verify
- Open the provided Vercel URL and test the site on desktop and mobile.

Notes & troubleshooting
- Node: Use a recent LTS (16+ or 18+) if you run into build errors.
- Browserslist warning during build is harmless (you can run `npx update-browserslist-db@latest` if desired).
- If you want, I can create the GitHub repo for you (you'd need to share a token/authorize) — otherwise, you can push and then tell me the URL and I can verify.

If you'd like, I can also:
- Remove remaining lint warnings (unused imports/state).
- Push the local commit for you (I can't push to your GitHub without credentials).

Tell me when you've pushed the repo and I'll walk you through importing it to Vercel or validate any settings.