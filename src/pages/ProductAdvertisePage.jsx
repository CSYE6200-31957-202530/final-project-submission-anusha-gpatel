// ProductAdvertisePage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const ProductAdvertisePage = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', price: '', imageUrl: '', userId: '' });
  const [editingId, setEditingId] = useState(null);

  const fetchProducts = async () => {
    const res = await axios.get('/products');
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`/products/${editingId}`, form);
      setEditingId(null);
    } else {
      await axios.post('/products', form);
    }
    setForm({ title: '', description: '', price: '', imageUrl: '', userId: '' });
    fetchProducts();
  };

  const handleEdit = (product) => {
    setForm(product);
    setEditingId(product.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Advertise a Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-2 border" name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
        <textarea className="w-full p-2 border" name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
        <input className="w-full p-2 border" name="price" value={form.price} onChange={handleChange} placeholder="Price" required />
        <input className="w-full p-2 border" name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="Image URL" required />
        <input className="w-full p-2 border" name="userId" value={form.userId} onChange={handleChange} placeholder="User ID" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {editingId ? 'Update' : 'Post'} Ad
        </button>
      </form>

      <h2 className="text-2xl font-bold mt-8 mb-4">All Ads</h2>
      {products.map((product) => (
        <div key={product.id} className="border p-4 mb-4 rounded">
          <h3 className="text-xl font-semibold">{product.title}</h3>
          <p>{product.description}</p>
          <p className="text-sm text-gray-600">Price: ${product.price}</p>
          <img src={product.imageUrl} alt={product.title} className="w-32 h-32 object-cover mt-2" />
          <div className="mt-2 space-x-2">
            <button onClick={() => handleEdit(product)} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
            <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductAdvertisePage;
