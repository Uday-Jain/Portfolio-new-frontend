# Static Portfolio Deployment Guide

Your portfolio is now a static frontend-only website that can be deployed to any static hosting service.

## Pre-Deployment Checklist

### 1. Configure EmailJS (Required for contact form)
- Follow the instructions in `EMAILJS_SETUP.md`
- Update the credentials in `src/data/mock.js`

### 2. Verify Resume PDF
- Ensure `public/Uday_Jain_Resume.pdf` exists
- Test the download functionality locally

## Deployment Options

### Option 1: Netlify (Recommended)
1. Build the project: `yarn build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `build` folder to Netlify
4. Your site will be live instantly

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`
3. Follow the prompts

### Option 3: GitHub Pages
1. Push your code to GitHub
2. Build: `yarn build`
3. Deploy the `build` folder to `gh-pages` branch
4. Enable GitHub Pages in repository settings

### Option 4: Manual Upload
1. Build: `yarn build`
2. Upload the `build` folder contents to any web hosting service

## Build Process
```bash
cd /app/frontend
yarn build
```

This creates a `build` folder with all static files ready for deployment.

## Environment Variables
Since this is now a static site, all configuration is done directly in the code:
- EmailJS credentials in `src/data/mock.js`
- No backend environment variables needed

## File Structure After Build
```
build/
├── index.html
├── static/
│   ├── css/
│   ├── js/
│   └── media/
├── Uday_Jain_Resume.pdf
└── other assets...
```

## Custom Domain (Optional)
Most hosting services support custom domains:
- Netlify: Go to Domain settings
- Vercel: Add domain in project settings
- GitHub Pages: Add CNAME file

## Performance Tips
- All images are optimized
- CSS and JS are minified in production build
- Glassmorphism effects are GPU-accelerated
- Resume PDF is served statically

## Testing Locally
```bash
yarn start
```
The site runs on `http://localhost:3000`

## Updating Content
To update portfolio content:
1. Modify data in `src/data/mock.js`
2. Rebuild: `yarn build`
3. Redeploy the new `build` folder

Your portfolio is now completely self-contained and ready for static deployment!