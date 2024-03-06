import React, { useState } from 'react';

const CheckoutPage = () => {
 
    const [formData, setFormData] = useState();
  const [orderedItems, setOrderedItems] = useState([
    { id: 1, name: 'Pizza', quantity: 1, price: 69 },
    { id: 2, name: 'Burger', quantity: 2, price: 6.9 },
  ]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleQuantityChange = (id, quantity) => {
    const updatedItems = orderedItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity };
      }
      return item;
    });
    setOrderedItems(updatedItems);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData, 'Ordered Items:', orderedItems);
  };

  return (
    <div className="flex ">
        <div className="container w-1/2 p-8">
      <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

      <ul className="mb-4">
        {orderedItems.map(item => (
          <li key={item.id} className="flex  items-center mb-2 ">
            <span>{item.name}</span>
            <div className="flex items-center ">
              <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="text-lime-700 px-2">-</button>
              <span className="mx-2">{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="text-green-700 px-2">+</button>
            </div>
            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
        <button type="submit" className="bg-green-500 text-white p-3 rounded hover:bg-green-600">Place Order</button>
      </form>
    </div>
    </div>
    
  );
};

export default CheckoutPage;
