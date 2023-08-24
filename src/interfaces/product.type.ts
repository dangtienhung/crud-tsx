export interface IProduct {
	id: number;
	name: string;
	price: number;
}

export type ProductTypeAdd = Pick<IProduct, 'name' | 'price'>;

export interface ProductTypeUpdate extends ProductTypeAdd {}
