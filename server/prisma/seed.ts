import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: adminPassword,
      name: 'Admin User',
      role: 'ADMIN'
    }
  });

  // Create regular user
  const userPassword = await bcrypt.hash('user123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      password: userPassword,
      name: 'Test User',
      role: 'USER'
    }
  });

  // Create sample products
  const products = [
    {
      name: 'Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      category: 'Electronics',
      stock: 50
    },
    {
      name: 'Smart Watch',
      description: 'Fitness tracking smartwatch with heart rate monitor',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      category: 'Electronics',
      stock: 30
    },
    {
      name: 'Laptop Backpack',
      description: 'Durable backpack with laptop compartment',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
      category: 'Accessories',
      stock: 100
    },
    {
      name: 'USB-C Cable',
      description: 'Fast charging USB-C cable 6ft',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0',
      category: 'Accessories',
      stock: 200
    },
    {
      name: 'Mechanical Keyboard',
      description: 'RGB mechanical gaming keyboard',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3',
      category: 'Electronics',
      stock: 40
    },
    {
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with precision tracking',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46',
      category: 'Electronics',
      stock: 75
    }
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product
    });
  }

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
