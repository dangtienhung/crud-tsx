import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ProductTypeAdd } from '../../../interfaces/product.type';
import { createProduct } from '../../../api/product.api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ProductAdd = () => {
	const navigate = useNavigate();
	const [value, setValue] = useState<ProductTypeAdd>({} as ProductTypeAdd);
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const { data } = await createProduct(value);
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

export default ProductAdd;
