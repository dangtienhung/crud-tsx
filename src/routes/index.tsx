import { Route, Routes } from 'react-router-dom';

import ProductAdd from '../components/products/product-create';
import ProductEdit from '../components/products/product-edit';
import ProductList from '../components/products';

const RootRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<ProductList />} />
			<Route path="/edit/:id" element={<ProductEdit />} />
			<Route path="/add" element={<ProductAdd />} />
		</Routes>
	);
};

export default RootRoutes;
