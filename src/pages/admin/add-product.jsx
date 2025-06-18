import React, { useState } from 'react';
import SectionHeading from '../../components/section-heading';

export default function AddProduct() {
	const [product, setProduct] = useState({
		name: '',
		description: '',
		category: '',
		price: 0,
		quantity: 0,
		rating: 0,
	});

	// computed access technique
	// retrieve the data form the inputs
	// function handleChange(event) {
	// 	const { name, value } = event.target;

	// 	setProduct((prevData) => ({
	// 		...prevData,
	// 		[name]: value,
	// 	}));
	// }

	// write the logic to send the data to the backend
	function handleSubmit(event) {
		event.preventDefault();

		console.log(product);

		setProduct({
			name: '',
			description: '',
			category: '',
			price: 0,
			quantity: 0,
			rating: 0,
		});
	}
	return (
		<div>
			<SectionHeading
				title={'Add Product'}
				description={'Add products to your catalogue '}
			/>
			{/* add product form -> name, description, category, price, quantity, rating */}
			<form
				className="mt-10 flex flex-col gap-3 max-w-4xl"
				onSubmit={handleSubmit}
			>
				<input
					name="name"
					type="text"
					className="border rounded-lg p-2"
					placeholder="Product name"
					value={product.name}
					onChange={(e) =>
						setProduct({
							...product,
							name: e.target.value,
						})
					}
				/>
				<input
					name="description"
					type="text"
					value={product.description}
					className="border rounded-lg p-2"
					placeholder="Product description"
					onChange={(e) =>
						setProduct({
							...product,
							description: e.target.value,
						})
					}
				/>
				<input
					type="text"
					className="border rounded-lg p-2"
					placeholder="Category"
					value={product.category}
					onChange={(e) =>
						setProduct({
							...product,
							category: e.target.value,
						})
					}
				/>
				<input
					type="number"
					className="border rounded-lg p-2"
					placeholder="Price"
					value={product.price}
					onChange={(e) =>
						setProduct({
							...product,
							price: e.target.value,
						})
					}
				/>
				<input
					type="number"
					className="border rounded-lg p-2"
					placeholder="Quantity"
					value={product.quantity}
					onChange={(e) =>
						setProduct({
							...product,
							quantity: e.target.value,
						})
					}
				/>
				<input
					type="number"
					className="border rounded-lg p-2"
					placeholder="Rating"
					value={product.rating}
					onChange={(e) =>
						setProduct({
							...product,
							rating: e.target.value,
						})
					}
				/>

				<button
					type="submit"
					className="bg-amber-500 p-2 rounded-lg font-semibold"
				>
					Save
				</button>
			</form>
		</div>
	);
}

// my form for adding products
// send the data to the backend
