import { IProduct, ProductTypeAdd } from '../interfaces/product.type';

import { ProductTypeUpdate } from './../interfaces/product.type';
import { instance } from './instance';

/* create */
export const createProduct = (product: ProductTypeAdd) => {
	return instance.post('/products', product);
};

/* get all */
export const getAllProducts = () => {
	return instance.get<IProduct[]>('/products');
};

/* get one */
export const getOneProduct = (id: number) => {
	return instance.get(`/products/${id}`);
};

/* update */
export const updateProduct = (id: number, product: ProductTypeUpdate) => {
	return instance.put(`/products/${id}`, product);
};

/* delete */
export const deleteProduct = (id: number) => {
	return instance.delete(`/products/${id}`);
};
