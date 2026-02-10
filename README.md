# E-Commerce Platform

A full-featured e-commerce platform built with React, Node.js, PostgreSQL, and Stripe integration.

## Features

- 🛍️ Product browsing with search and filters
- 🛒 Shopping cart with persistent storage
- 💳 Secure checkout with Stripe
- 🔐 User authentication and profiles
- 📦 Order history and tracking
- 👨‍💼 Admin dashboard for product management
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

### Frontend
- React 18 + TypeScript
- Vite
- React Router for navigation
- Tailwind CSS
- Axios for API calls
- Stripe.js for payments

### Backend
- Node.js + Express + TypeScript
- PostgreSQL with Prisma ORM
- JWT authentication
- Stripe API for payments
- bcrypt for password hashing
- Cloudinary for image uploads

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - The `.env` file is already created in the `server` directory
   - Update if needed (default uses SQLite)

4. Start the development servers:
```bash
npm run dev
```

The client will run on `http://localhost:5173` and the server on `http://localhost:3000`.

## Deployment

Ready to deploy? See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

### Quick Deploy:

**Windows:**
```bash
deploy.bat
```

**Mac/Linux:**
```bash
chmod +x deploy.sh
./deploy.sh
```

### Recommended Platforms:

**Vercel (Easiest):**
1. Push to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Deploy!

**Railway (Full-stack):**
1. Push to GitHub
2. Visit [railway.app](https://railway.app)
3. Deploy from GitHub
4. Add PostgreSQL database

**Render (Free tier):**
1. Push to GitHub
2. Visit [render.com](https://render.com)
3. Use Blueprint deployment

## Project Structure

```
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   └── types/
├── server/          # Express backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   └── services/
│   └── prisma/
└── package.json
```

## API Endpoints

### Auth
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Products
- `GET /api/products` - Get all products (with filters)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove from cart

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details

### Payment
- `POST /api/payment/create-intent` - Create Stripe payment intent
- `POST /api/payment/webhook` - Stripe webhook handler

## Demo Credentials

- Admin: admin@example.com / admin123
- User: user@example.com / user123

## License

MIT
