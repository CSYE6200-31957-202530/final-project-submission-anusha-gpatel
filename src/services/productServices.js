import axios from 'axios';

// const API_URL = '/products';
//const API_URL = 'http://localhost:8080/products'; // instead of just /products

const API_URL = axios.create({
    baseURL: 'http://localhost:8080'
  });
export const fetchAllProducts = () => axios.get(API_URL);
export const fetchProductById = (id) => axios.get(`${API_URL}/${id}`);
export const fetchProductsByUser = (userId) => axios.get(`${API_URL}/user/${userId}`);
export const createProduct = (data) => axios.post(API_URL, data);
export const updateProduct = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);