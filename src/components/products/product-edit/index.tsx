import { getOneProduct, updateProduct } from '../../../api/product.api';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ProductTypeUpdate } from '../../../interfaces/product.type';

const ProductEdit = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [value, setValue] = useState<ProductTypeUpdate>(
		{} as ProductTypeUpdate
	);
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const { data } = await updateProduct(Number(id)!, value);
			if (data) {
				navigate('/');
			}
		} catch (error) {
			console.log(error);
		}
	};
	const handleOnChange = (e: React.ChangeEvent<any>) => {
		setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	useEffect(() => {
		if (!id) return;
		const fetchingData = async () => {
			try {
				const data = await getOneProduct(Number(id));
				setValue(data.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchingData();
	}, [id]);
	if (!id) return;
	return (
		<div className="p-5">
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Label>Name Product</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter name"
						id="name"
						name="name"
						value={value.name}
						onChange={(e) => handleOnChange(e)}
					/>
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Price</Form.Label>
					<Form.Control
						type="number"
						name="price"
						placeholder="Price"
						id="price"
						value={value.price}
						onChange={(e) => handleOnChange(e)}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default ProductEdit;
