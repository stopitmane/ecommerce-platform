@echo off
echo.
echo 🚀 E-Commerce Platform Deployment Script
echo ==========================================
echo.

REM Check if git is initialized
if not exist .git (
    echo 📦 Initializing Git repository...
    git init
    git add .
    git commit -m "Initial commit: E-commerce platform"
)

echo.
echo Choose your deployment platform:
echo 1) Vercel (Recommended - Easy ^& Free)
echo 2) Railway (Full-stack with DB)
echo 3) Render (Free tier available)
echo 4) Build for Docker
echo 5) Just build locally
echo.
set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" (
    echo.
    echo 📦 Deploying to Vercel...
    echo.
    echo Steps:
    echo 1. Install Vercel CLI: npm i -g vercel
    echo 2. Run: vercel
    echo 3. Follow the prompts
    echo.
    echo Or visit: https://vercel.com/new
    echo And import your GitHub repository
)

if "%choice%"=="2" (
    echo.
    echo 🚂 Deploying to Railway...
    echo.
    echo Steps:
    echo 1. Push your code to GitHub
    echo 2. Visit: https://railway.app
    echo 3. Click 'New Project' -^> 'Deploy from GitHub'
    echo 4. Select your repository
    echo 5. Add PostgreSQL database from marketplace
    echo 6. Set environment variables
)

if "%choice%"=="3" (
    echo.
    echo 🎨 Deploying to Render...
    echo.
    echo Steps:
    echo 1. Push your code to GitHub
    echo 2. Visit: https://render.com
    echo 3. Click 'New' -^> 'Blueprint'
    echo 4. Connect your repository
    echo 5. Render will auto-deploy using render.yaml
)

if "%choice%"=="4" (
    echo.
    echo 🐳 Building Docker image...
    docker build -t ecommerce-platform .
    echo.
    echo ✅ Docker image built successfully!
    echo.
    echo To run locally:
    echo docker run -p 3000:3000 -e DATABASE_URL="file:./dev.db" -e JWT_SECRET="secret" ecommerce-platform
)

if "%choice%"=="5" (
    echo.
    echo 🔨 Building for production...
    call npm run build
    echo.
    echo ✅ Build complete!
    echo.
    echo To test locally:
    echo cd server ^&^& npm start
)

echo.
echo 📚 For detailed instructions, see DEPLOYMENT.md
echo.
echo ✨ Good luck with your deployment!
pause
