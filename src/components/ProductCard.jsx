
import React from 'react';

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow-sm mb-4">
      <img src={product.imageUrl} alt={product.title} className="w-full h-64 object-contain" />
      <h3 className="text-xl font-semibold mt-2">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
      <p className="mt-2 text-sm">{product.description}</p>
      <div className="mt-3 flex justify-between">
        <button onClick={() => onEdit(product)} className="bg-yellow-400 px-3 py-1 rounded">Edit</button>
        <button onClick={() => onDelete(product.id)} className="bg-red-500 px-3 py-1 text-white rounded">Delete</button>
      </div>
    </div>
  );
};

export default ProductCard;