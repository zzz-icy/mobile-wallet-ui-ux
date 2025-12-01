# Sharing Your UI/UX Demo

Here are the best ways to share your selective disclosure UI with others:

## Option 1: Deploy to Vercel (Recommended - Easiest)

**Steps:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in this directory
3. Follow the prompts (it will auto-detect Vite)
4. Share the URL they give you (e.g., `https://wallet-ux-ui.vercel.app`)

**Or use the web interface:**
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your Git repository (or drag & drop the project folder)
4. Vercel will auto-detect Vite settings
5. Click "Deploy"
6. Share the generated URL

**Benefits:**
- ✅ Free
- ✅ Instant shareable URL
- ✅ Auto-updates when you push changes
- ✅ No code visible to viewers
- ✅ Fast CDN hosting

---

## Option 2: Deploy to Netlify

**Steps:**
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy --prod` in this directory
3. Follow the prompts
4. Share the URL

**Or use the web interface:**
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Drag & drop the `dist` folder (after running `npm run build`)
3. Share the generated URL

---

## Option 3: Static Build (No Account Needed)

**Create a shareable build:**

```bash
npm run build
```

This creates a `dist` folder with all static files. You can:

1. **Zip and share:**
   - Zip the `dist` folder
   - Share the zip file
   - Recipients can unzip and open `index.html` in a browser

2. **Host on GitHub Pages:**
   - Push to GitHub
   - Enable GitHub Pages in repo settings
   - Point it to the `dist` folder

3. **Use a simple HTTP server:**
   - After building, run: `npx serve dist`
   - Share the local URL (or use ngrok for external access)

---

## Option 4: Use StackBlitz/CodeSandbox (Quick Preview)

1. Push your code to GitHub
2. Go to [stackblitz.com](https://stackblitz.com)
3. Click "Import from GitHub"
4. Share the StackBlitz URL

---

## Quick Deploy Commands

### Vercel (Fastest)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod
```

### Static Build
```bash
npm run build
# Then zip the dist folder and share
```

---

## Recommendation

**For quickest sharing:** Use Vercel (Option 1) - it's the fastest and easiest.

**For no-account sharing:** Use Option 3 (static build) - build, zip, and share.

