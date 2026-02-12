import { createClient } from '@libsql/client';
import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import { randomUUID } from 'crypto';

dotenv.config();

const client = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

async function main() {
  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10);
  const adminId = randomUUID();
  
  await client.execute({
    sql: 'INSERT OR REPLACE INTO User (id, email, password, name, role, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)',
    args: [adminId, 'admin@example.com', adminPassword, 'Admin User', 'ADMIN', new Date().toISOString(), new Date().toISOString()]
  });

  // Create regular user
  const userPassword = await bcrypt.hash('user123', 10);
  const userId = randomUUID();
  
  await client.execute({
    sql: 'INSERT OR REPLACE INTO User (id, email, password, name, role, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?)',
    args: [userId, 'user@example.com', userPassword, 'Test User', 'USER', new Date().toISOString(), new Date().toISOString()]
  });

  // Create sample products
  const products = [
    {
      id: randomUUID(),
      name: 'Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      category: 'Electronics',
      stock: 50
    },
    {
      id: randomUUID(),
      name: 'Smart Watch',
      description: 'Fitness tracking smartwatch with heart rate monitor',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
      category: 'Electronics',
      stock: 30
    },
    {
      id: randomUUID(),
      name: 'Laptop Backpack',
      description: 'Durable backpack with laptop compartment',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
      category: 'Accessories',
      stock: 100
    },
    {
      id: randomUUID(),
      name: 'USB-C Cable',
      description: 'Fast charging USB-C cable 6ft',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0',
      category: 'Accessories',
      stock: 200
    },
    {
      id: randomUUID(),
      name: 'Mechanical Keyboard',
      description: 'RGB mechanical gaming keyboard',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3',
      category: 'Electronics',
      stock: 40
    },
    {
      id: randomUUID(),
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with precision tracking',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46',
      category: 'Electronics',
      stock: 75
    }
  ];

  for (const product of products) {
    await client.execute({
      sql: 'INSERT INTO Product (id, name, description, price, image, category, stock, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      args: [product.id, product.name, product.description, product.price, product.image, product.category, product.stock, new Date().toISOString(), new Date().toISOString()]
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
    process.exit(0);
  });
