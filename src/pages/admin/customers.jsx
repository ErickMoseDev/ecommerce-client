import React, { useEffect, useState } from 'react';
import CustomerCard from '../../components/customer-card';
import SectionHeading from '../../components/section-heading';

export default function Customers() {
	const [customers, setCustomers] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch('http://localhost:8000/customers')
			.then((res) => res.json())
			.then((data) => {
				if (!Array.isArray(data)) {
					throw {
						message: 'Expected an array but got something else',
						received: data,
					};
				}
				setCustomers(data);
			})
			.catch((error) => setError(error));
	}, []);

	console.log(error);
	console.log(customers);

	if (error) {
		return (
			<div className="bg-red-100 p-5 rounded-xl">
				<h2 className="text-red-500 font-bold text-sm">Error</h2>
				<p className="text-sm mt-2">
					<strong>Message:</strong> {error.message}
				</p>
				{error.status && (
					<p>
						<strong>Status:</strong> {error.message} -{' '}
						{error.statusText}
					</p>
				)}
			</div>
		);
	}
	if (!customers) return <p>Loading...</p>;

	return (
		<section className="">
			<SectionHeading
				title={'Customers'}
				description={'View all your customers '}
			/>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
				{customers &&
					customers.map((customer) => (
						<CustomerCard
							id={customer.id}
							firstName={customer.first_name}
							lastName={customer.last_name}
							email={customer.email}
							phone={customer.phone}
							age={customer.age}
							gender={customer.gender}
							joined={customer.created_at}
						/>
					))}
			</div>
		</section>
	);
}

// env variables
// implement cors on your backend - allow the client to fetch data from the backend
// outlet
