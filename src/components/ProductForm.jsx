import React from 'react';

const ProductForm = ({ form, onChange, onSubmit, isEditing }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 p-4 border rounded shadow-sm">
      <input className="w-full p-2 border" name="title" value={form.title} onChange={onChange} placeholder="Title" required />
      <textarea className="w-full p-2 border" name="description" value={form.description} onChange={onChange} placeholder="Description" required />
      <input className="w-full p-2 border" name="price" value={form.price} onChange={onChange} placeholder="Price" required />
      <input className="w-full p-2 border" name="imageUrl" value={form.imageUrl} onChange={onChange} placeholder="Image URL" required />
      <input className="w-full p-2 border" name="userId" value={form.userId} onChange={onChange} placeholder="User ID" required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {isEditing ? 'Update' : 'Post'} Ad
      </button>
    </form>
  );
};

export default ProductForm;