# E-Commerce Platform

[![GitHub stars](https://img.shields.io/github/stars/stopitmane/ecommerce-platform?style=social)](https://github.com/stopitmane/ecommerce-platform/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/stopitmane/ecommerce-platform?style=social)](https://github.com/stopitmane/ecommerce-platform/network/members)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A modern, full-featured e-commerce platform built with React, Node.js, and PostgreSQL.

[Live Demo](#) | [Report Bug](https://github.com/stopitmane/ecommerce-platform/issues) | [Request Feature](https://github.com/stopitmane/ecommerce-platform/issues)

## 📸 Screenshots

### Product Catalog
![Product Catalog](screenshots/products.png)
*Browse through our collection of products with search and category filters*

### Shopping Experience
![Shopping Cart](screenshots/cart.png)
*Easy-to-use shopping cart with real-time updates*

### User Dashboard
![User Dashboard](screenshots/dashboard.png)
*Personalized user experience with order tracking*

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

## ⭐ Star This Repository

If you find this project helpful, please consider giving it a star! It helps others discover the project and motivates further development.

[![GitHub stars](https://img.shields.io/github/stars/stopitmane/ecommerce-platform?style=social)](https://github.com/stopitmane/ecommerce-platform/stargazers)

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**stopitmane**
- GitHub: [@stopitmane](https://github.com/stopitmane)
- LinkedIn: [Add your LinkedIn]

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by real-world e-commerce platforms
- Open source and free to use

---

⭐ **Star this repo if you found it helpful!** ⭐
