# GitHub Setup Guide

Follow these steps to push your project to GitHub and prepare for deployment.

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `ecommerce-platform` (or your preferred name)
5. Keep it **Public** (for free deployments)
6. **Don't** initialize with README (we already have one)
7. Click "Create repository"

## Step 2: Push Your Code

Open your terminal in the project directory and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Full-stack e-commerce platform"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME and YOUR_REPO with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy

Now that your code is on GitHub, you can deploy to any platform!

### Option A: Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect the settings
6. Add environment variables:
   - `DATABASE_URL` = `file:./dev.db`
   - `JWT_SECRET` = (generate a random string)
   - `NODE_ENV` = `production`
7. Click "Deploy"

**Done!** Your site will be live in ~2 minutes.

### Option B: Railway

1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Add a PostgreSQL database from the marketplace
7. Set environment variables (Railway auto-provides DATABASE_URL)
8. Deploy!

### Option C: Render

1. Go to [render.com](https://render.com)
2. Sign in with GitHub
3. Click "New" → "Blueprint"
4. Connect your repository
5. Render will use the `render.yaml` file
6. Set environment variables
7. Deploy!

## Step 4: Update Your Portfolio

Add this project to your portfolio with:

**Live Demo:** [Your deployed URL]  
**GitHub:** https://github.com/YOUR_USERNAME/YOUR_REPO  
**Tech Stack:** React, TypeScript, Node.js, Express, Prisma, PostgreSQL/SQLite, Tailwind CSS

## Troubleshooting

### Push Rejected?
```bash
git pull origin main --rebase
git push origin main
```

### Need to update remote URL?
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

### Want to see your remotes?
```bash
git remote -v
```

## Next Steps

- [ ] Push code to GitHub
- [ ] Deploy to Vercel/Railway/Render
- [ ] Test the live site
- [ ] Add the live URL to your README
- [ ] Share on LinkedIn/Twitter
- [ ] Add to your portfolio website

Good luck! 🚀
