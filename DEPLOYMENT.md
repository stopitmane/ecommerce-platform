# Deployment Guide

This guide covers multiple deployment options for your e-commerce platform.

## Option 1: Vercel (Recommended for Quick Deploy)

### Prerequisites
- GitHub account
- Vercel account (free)

### Steps:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repository
4. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

5. Add Environment Variables:
   ```
   DATABASE_URL=file:./dev.db
   JWT_SECRET=your-super-secret-jwt-key-change-this
   NODE_ENV=production
   ```

6. Deploy!

**Note:** For production, consider using a hosted database like:
- [Neon](https://neon.tech) (PostgreSQL)
- [PlanetScale](https://planetscale.com) (MySQL)
- [Supabase](https://supabase.com) (PostgreSQL)

---

## Option 2: Railway (Full-Stack with Database)

### Prerequisites
- GitHub account
- Railway account (free tier available)

### Steps:
1. Push code to GitHub
2. Go to [railway.app](https://railway.app)
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway will auto-detect and deploy both services
6. Add a PostgreSQL database from Railway's marketplace
7. Set environment variables:
   ```
   DATABASE_URL=(auto-provided by Railway)
   JWT_SECRET=your-secret-key
   NODE_ENV=production
   ```

8. Run migrations:
   - Go to your service settings
   - Add a deploy command: `npx prisma migrate deploy`

---

## Option 3: Render (Free Tier Available)

### Prerequisites
- GitHub account
- Render account

### Steps:
1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Click "New" → "Blueprint"
4. Connect your repository
5. Render will use the `render.yaml` file to set up:
   - PostgreSQL database
   - Backend API service
   - Frontend static site

6. Set environment variables in Render dashboard
7. Deploy!

---

## Option 4: Docker + Any Cloud Provider

### Build and Run Locally:
```bash
docker build -t ecommerce-app .
docker run -p 3000:3000 -e DATABASE_URL="file:./dev.db" -e JWT_SECRET="secret" ecommerce-app
```

### Deploy to:
- **AWS ECS/Fargate**
- **Google Cloud Run**
- **Azure Container Instances**
- **DigitalOcean App Platform**
- **Fly.io**

---

## Option 5: Netlify (Frontend) + Railway/Render (Backend)

### Frontend on Netlify:
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `client/dist` folder
3. Or connect GitHub and auto-deploy

### Backend on Railway/Render:
Follow Option 2 or 3 for backend deployment

### Update Frontend API URL:
In `client/src/services/api.ts`, update the baseURL:
```typescript
const api = axios.create({
  baseURL: 'https://your-backend-url.com/api'
});
```

---

## Environment Variables Needed

### Backend (.env):
```
DATABASE_URL=your-database-url
JWT_SECRET=your-secret-key-min-32-chars
STRIPE_SECRET_KEY=sk_live_your_stripe_key (optional)
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret (optional)
PORT=3000
NODE_ENV=production
```

### Frontend:
No environment variables needed if using proxy, otherwise:
```
VITE_API_URL=https://your-backend-url.com
```

---

## Post-Deployment Checklist

- [ ] Database migrations run successfully
- [ ] Seed data loaded (optional)
- [ ] Environment variables set correctly
- [ ] CORS configured for your frontend domain
- [ ] JWT secret is secure and random
- [ ] Test user registration and login
- [ ] Test product browsing and cart
- [ ] Test order creation
- [ ] Check error logs
- [ ] Set up monitoring (optional)

---

## Quick Deploy Commands

### Build for Production:
```bash
npm run build
```

### Test Production Build Locally:
```bash
# Backend
cd server && npm start

# Frontend (serve static files)
cd client && npx serve dist
```

---

## Recommended: Free Tier Deployment Stack

**Best Free Option:**
- **Frontend:** Vercel or Netlify
- **Backend:** Railway or Render
- **Database:** Neon (PostgreSQL) or Railway's included DB

This combination gives you:
- ✅ Free hosting
- ✅ Automatic deployments from Git
- ✅ HTTPS included
- ✅ Good performance
- ✅ Easy to manage

---

## Need Help?

- Check deployment logs for errors
- Ensure all dependencies are in `package.json`
- Verify database connection string
- Test API endpoints with Postman/Thunder Client
- Check CORS settings if frontend can't reach backend

Good luck with your deployment! 🚀
