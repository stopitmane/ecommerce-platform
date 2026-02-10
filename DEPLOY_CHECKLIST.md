# 🚀 Deployment Checklist

Use this checklist to ensure a smooth deployment.

## Pre-Deployment

- [x] Project built and running locally
- [x] Git repository initialized
- [x] All files committed
- [ ] GitHub repository created
- [ ] Code pushed to GitHub

## Environment Setup

- [ ] Generate secure JWT_SECRET (min 32 characters)
- [ ] Choose database (SQLite for demo, PostgreSQL for production)
- [ ] Set up Stripe account (if using payments)
- [ ] Prepare environment variables

## Platform Selection

Choose one:
- [ ] Vercel (Easiest, great for demos)
- [ ] Railway (Full-stack with database)
- [ ] Render (Free tier available)
- [ ] Docker + Cloud (AWS, GCP, Azure)

## Deployment Steps

### For Vercel:
- [ ] Visit vercel.com/new
- [ ] Import GitHub repository
- [ ] Set environment variables:
  - [ ] DATABASE_URL
  - [ ] JWT_SECRET
  - [ ] NODE_ENV=production
- [ ] Deploy
- [ ] Test live site

### For Railway:
- [ ] Visit railway.app
- [ ] Deploy from GitHub
- [ ] Add PostgreSQL database
- [ ] Set environment variables (DATABASE_URL auto-provided)
- [ ] Deploy
- [ ] Run migrations
- [ ] Test live site

### For Render:
- [ ] Visit render.com
- [ ] New Blueprint
- [ ] Connect repository
- [ ] Set environment variables
- [ ] Deploy
- [ ] Test live site

## Post-Deployment

- [ ] Test user registration
- [ ] Test user login
- [ ] Test product browsing
- [ ] Test add to cart
- [ ] Test checkout
- [ ] Test admin login
- [ ] Test admin product management
- [ ] Check all API endpoints
- [ ] Verify database connections
- [ ] Test on mobile devices
- [ ] Check browser console for errors

## Portfolio Updates

- [ ] Add live URL to README.md
- [ ] Take screenshots of key features
- [ ] Record demo video (optional)
- [ ] Update portfolio website
- [ ] Add to LinkedIn projects
- [ ] Update resume
- [ ] Share on social media

## Documentation

- [ ] Update README with live URL
- [ ] Document any deployment-specific changes
- [ ] Add API documentation (if needed)
- [ ] Create user guide (optional)

## Security Check

- [ ] JWT_SECRET is secure and random
- [ ] No sensitive data in code
- [ ] .env file in .gitignore
- [ ] CORS configured properly
- [ ] Rate limiting considered
- [ ] Input validation in place
- [ ] SQL injection prevention (Prisma handles this)

## Performance

- [ ] Images optimized
- [ ] Build size reasonable
- [ ] API response times acceptable
- [ ] Database queries optimized
- [ ] Caching considered

## Monitoring (Optional)

- [ ] Set up error tracking (Sentry)
- [ ] Set up analytics (Google Analytics)
- [ ] Set up uptime monitoring
- [ ] Set up logging

## Backup Plan

- [ ] Database backup strategy
- [ ] Code backed up on GitHub
- [ ] Environment variables documented
- [ ] Deployment process documented

## Final Checks

- [ ] All features working
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Fast load times
- [ ] Professional appearance
- [ ] Demo accounts working
- [ ] Ready to show employers!

---

## Quick Commands Reference

### Build for production:
```bash
npm run build
```

### Test production build locally:
```bash
cd server && npm start
```

### Push to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Run deployment script:
```bash
# Windows
deploy.bat

# Mac/Linux
./deploy.sh
```

---

## Environment Variables Template

Copy this for your deployment platform:

```
DATABASE_URL=file:./dev.db
JWT_SECRET=your-super-secret-jwt-key-change-this-min-32-chars
NODE_ENV=production
PORT=3000
STRIPE_SECRET_KEY=sk_test_your_key (optional)
STRIPE_WEBHOOK_SECRET=whsec_your_secret (optional)
```

---

## Troubleshooting

**Build fails?**
- Check Node.js version (18+)
- Clear node_modules and reinstall
- Check for TypeScript errors

**Database connection fails?**
- Verify DATABASE_URL format
- Check database is running
- Run migrations: `npx prisma migrate deploy`

**API not responding?**
- Check PORT environment variable
- Verify CORS settings
- Check server logs

**Frontend can't reach backend?**
- Update API URL in client/src/services/api.ts
- Check CORS configuration
- Verify backend is deployed

---

## Success! 🎉

Once everything is checked off, you have:
✅ A live, production-ready e-commerce platform
✅ A portfolio project that demonstrates full-stack skills
✅ Something impressive to show employers
✅ Real-world deployment experience

**Congratulations!** 🚀
