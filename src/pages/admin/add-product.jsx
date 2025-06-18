import React, { useState } from 'react';
import SectionHeading from '../../components/section-heading';
import { toast } from 'sonner';

export default function AddProduct() {
	const [product, setProduct] = useState({
		name: '',
		description: '',
		category: '',
		price: '',
		quantity: '',
		rating: '',
		image: '',
	});
	const [error, setError] = useState(null);

	// write the logic to send the data to the backend
	function handleSubmit(event) {
		event.preventDefault();

		fetch('http://localhost:8000/products', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(product),
		})
			.then((res) => res.json())
			.then((response) => {
				console.log(response.message);
				toast.success(response.message);
				setProduct({
					name: '',
					description: '',
					category: '',
					price: '',
					quantity: '',
					rating: '',
					image: '',
				});
			})
			.catch((error) => {
				setError(error);
			});

		console.log(error);
	}

	return (
		<div>
			<SectionHeading
				title={'Add Product'}
				description={'Add products to your catalogue '}
			/>
			{/* add product form -> name, description, category, price, quantity, rating */}
			<div className="border border-slate-300 shadow-lg shadow-slate-200 py-10 px-8 max-w-lg mt-10 rounded-xl">
				<h3 className="text-2xl font-bold">Product Form</h3>
				<p className="text-sm text-slate-500">
					Enter the product details below
				</p>

				<form
					className="mt-10 flex flex-col gap-3 w-full"
					onSubmit={handleSubmit}
				>
					<input
						name="name"
						type="text"
						className="border border-slate-300 rounded-lg p-2 focus:outline-amber-500"
						placeholder="Product name"
						value={product.name}
						onChange={(e) =>
							setProduct({
								...product,
								name: e.target.value,
							})
						}
					/>

					<textarea
						name="description"
						type="text"
						rows={5}
						value={product.description}
						className="border border-slate-300 rounded-lg p-2 focus:outline-amber-500"
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
						className="border border-slate-300 rounded-lg p-2 focus:outline-amber-500"
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
						className="border border-slate-300 rounded-lg p-2 focus:outline-amber-500"
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
						className="border border-slate-300 rounded-lg p-2 focus:outline-amber-500"
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
						className="border border-slate-300 rounded-lg p-2 focus:outline-amber-500"
						placeholder="Rating"
						value={product.rating}
						onChange={(e) =>
							setProduct({
								...product,
								rating: e.target.value,
							})
						}
					/>

					<input
						name="image"
						type="url"
						className="border border-slate-300 rounded-lg p-2 focus:outline-amber-500"
						placeholder="Image url"
						value={product.image}
						onChange={(e) =>
							setProduct({
								...product,
								image: e.target.value,
							})
						}
					/>

					<button
						type="submit"
						className="bg-amber-500 p-2 rounded-lg font-semibold cursor-pointer"
					>
						Save
					</button>
				</form>
			</div>
		</div>
	);
}

// my form for adding products
// send the data to the backend

// computed name technique
// retrieve the data form the inputs
// function handleChange(event) {
// 	const { name, value } = event.target;

// 	setProduct((prevData) => ({
// 		...prevData,
// 		[name]: value,
// 	}));
// }
