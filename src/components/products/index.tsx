import { deleteProduct, getAllProducts } from '../../api/product.api';
import { useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';
import { IProduct } from '../../interfaces/product.type';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
	const navigate = useNavigate();
	const [products, setProducts] = useState<IProduct[]>([]);
	useEffect(() => {
		const fetchingData = async () => {
			const data = await getAllProducts();
			setProducts(data.data);
		};
		fetchingData();
	}, []);
	const handleDeleteProduct = async (id: number) => {
		try {
			await deleteProduct(id);
			setProducts((prev) => prev.filter((product) => product.id !== id));
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="p-5">
			<Button onClick={() => navigate('/add')} className="mb-5">
				Product Add
			</Button>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<tr key={product.id}>
							<td>{product.id}</td>
							<td>{product.name}</td>
							<td>{product.price}</td>
							<td>
								<Button onClick={() => navigate(`/edit/${product.id}`)}>
									Edit
								</Button>
								<Button
									onClick={() => handleDeleteProduct(product.id)}
									variant="danger"
								>
									Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default ProductList;
