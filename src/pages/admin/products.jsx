import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import SectionHeading from '../../components/section-heading';
import ProductCard from '../../components/product-card';

export default function Products() {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_BASE_URL}/products`)
			.then((res) => res.json())
			.then((data) => {
				if (!Array.isArray(data)) {
					throw {
						message: 'Expected an array but got something else',
						received: data,
					};
				}
				setProducts(data);
			})
			.catch((error) => setError(error));
	}, []);

	console.log(error);
	console.log(products);

	return (
		<div className="flex flex-col gap-5 ">
			<SectionHeading
				title={'Products'}
				description={'View your product catalogue'}
			/>
			<Link to={'/dashboard/products/add'}>
				<div className="h-40 w-60 rounded-xl bg-amber-800 p-10">
					<Plus size={30} className="text-amber-500" />

					<h2 className="font-cal text-white text-xl mt-5">
						Add product
					</h2>
				</div>
			</Link>

			<div className="grid max-md:grid-cols-2 grid-cols-4 gap-5 mt-10">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id}
						title={product.name}
						description={product.description}
						image={product.image}
						rating={product.rating}
						category={product.category}
						price={product.price}
					/>
				))}
			</div>
		</div>
	);
}
