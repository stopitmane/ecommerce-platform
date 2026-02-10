import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { orderAPI } from '../services/api';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => {
    return sum + Number(item.product.price) * item.quantity;
  }, 0);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      await orderAPI.create();
      clearCart();
      alert('Order placed successfully!');
      navigate('/orders');
    } catch (error) {
      alert('Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        {cart.map(item => (
          <div key={item.id} className="flex justify-between py-2 border-b">
            <span>{item.product.name} x {item.quantity}</span>
            <span>${(Number(item.product.price) * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="flex justify-between py-4 text-xl font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold mb-4">Payment Information</h2>
        <p className="text-gray-600 mb-4">
          This is a demo checkout. In production, Stripe payment would be integrated here.
        </p>
      </div>

      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? 'Processing...' : 'Place Order'}
      </button>
    </div>
  );
}
