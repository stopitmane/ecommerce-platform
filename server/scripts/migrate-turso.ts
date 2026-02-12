import { createClient } from '@libsql/client';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

async function migrate() {
  const client = createClient({
    url: process.env.DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  });

  const sqlPath = path.join(__dirname, '../prisma/turso-schema.sql');
  const sql = fs.readFileSync(sqlPath, 'utf-8');

  const statements = sql.split(';').filter(s => s.trim());

  for (const statement of statements) {
    if (statement.trim()) {
      try {
        await client.execute(statement);
        console.log('✓ Executed statement');
      } catch (error) {
        console.error('Error executing statement:', error);
      }
    }
  }

  console.log('Migration complete!');
  process.exit(0);
}

migrate();
