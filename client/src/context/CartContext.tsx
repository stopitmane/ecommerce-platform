import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem } from '../types';
import { cartAPI } from '../services/api';
import { useAuth } from './AuthContext';

interface CartContextType {
  cart: CartItem[];
  addToCart: (productId: string, quantity: number) => Promise<void>;
  updateQuantity: (id: string, quantity: number) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  clearCart: () => void;
  loading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      fetchCart();
    } else {
      setCart([]);
    }
  }, [token]);

  const fetchCart = async () => {
    try {
      const res = await cartAPI.get();
      setCart(res.data);
    } catch (error) {
      console.error('Failed to fetch cart');
    }
  };

  const addToCart = async (productId: string, quantity: number) => {
    setLoading(true);
    try {
      await cartAPI.add({ productId, quantity });
      await fetchCart();
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (id: string, quantity: number) => {
    setLoading(true);
    try {
      await cartAPI.update(id, quantity);
      await fetchCart();
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (id: string) => {
    setLoading(true);
    try {
      await cartAPI.remove(id);
      await fetchCart();
    } finally {
      setLoading(false);
    }
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, loading }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
