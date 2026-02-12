import { Router } from 'express';
import prisma from '../lib/db';
import { authenticate, AuthRequest } from '../middleware/auth';

const router = Router();

router.get('/', authenticate, async (req: AuthRequest, res) => {
  try {
    const cartItems = await prisma.cartItem.findMany({
      where: { userId: req.userId },
      include: { product: true }
    });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
});

router.post('/', authenticate, async (req: AuthRequest, res) => {
  try {
    const { productId, quantity } = req.body;

    const cartItem = await prisma.cartItem.upsert({
      where: {
        userId_productId: {
          userId: req.userId!,
          productId
        }
      },
      update: { quantity: { increment: quantity } },
      create: {
        userId: req.userId!,
        productId,
        quantity
      },
      include: { product: true }
    });

    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add to cart' });
  }
});

router.put('/:id', authenticate, async (req: AuthRequest, res) => {
  try {
    const { quantity } = req.body;
    
    const cartItem = await prisma.cartItem.update({
      where: { id: req.params.id },
      data: { quantity },
      include: { product: true }
    });
    
    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update cart item' });
  }
});

router.delete('/:id', authenticate, async (req: AuthRequest, res) => {
  try {
    await prisma.cartItem.delete({ where: { id: req.params.id } });
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove item' });
  }
});

export default router;
