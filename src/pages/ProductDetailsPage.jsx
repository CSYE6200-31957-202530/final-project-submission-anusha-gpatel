import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/productServices';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <img src={product.imageUrl} alt={product.title} className="w-full h-96 object-contain mb-4" />
        <h2 className="text-3xl font-bold">{product.title}</h2>
        <p className="text-lg mt-2 text-gray-700">{product.description}</p>
        <div className="mt-4 border-t pt-2">
          <p><strong>Brand:</strong> Apple</p>
          <p><strong>Condition:</strong> New</p>
        </div>
      </div>
      <div className="border p-4 rounded shadow-md">
        <p className="text-2xl font-bold text-green-600">${product.price}</p>
        <p className="mt-2">Posted 5 minutes ago</p>
        <div className="mt-4">
          <h4 className="font-bold">Seller Description</h4>
          <p>Utsav Chadha</p>
          <p className="text-sm">Email: chadha.u@northeastern.edu</p>
          <p className="text-sm">Phone: 7894561230</p>
        </div>
        <div className="mt-4">
          <h4 className="font-bold mb-1">Posted in</h4>
          <iframe
            src="https://www.google.com/maps?q=Boston,+MA&output=embed"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
