import { Router } from 'express';
import prisma from '../lib/db';
import { authenticate, isAdmin, AuthRequest } from '../middleware/auth';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { category, search, minPrice, maxPrice } = req.query;
    
    const where: any = {};
    if (category) where.category = category;
    if (search) where.name = { contains: search as string, mode: 'insensitive' };
    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price.gte = parseFloat(minPrice as string);
      if (maxPrice) where.price.lte = parseFloat(maxPrice as string);
    }

    const products = await prisma.product.findMany({ where });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: req.params.id }
    });
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

router.post('/', authenticate, isAdmin, async (req: AuthRequest, res) => {
  try {
    const { name, description, price, image, category, stock } = req.body;
    
    const product = await prisma.product.create({
      data: { name, description, price, image, category, stock }
    });
    
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

router.put('/:id', authenticate, isAdmin, async (req: AuthRequest, res) => {
  try {
    const product = await prisma.product.update({
      where: { id: req.params.id },
      data: req.body
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

router.delete('/:id', authenticate, isAdmin, async (req: AuthRequest, res) => {
  try {
    await prisma.product.delete({ where: { id: req.params.id } });
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

export default router;
