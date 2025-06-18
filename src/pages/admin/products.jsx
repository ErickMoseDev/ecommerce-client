import { Plus } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

export default function Products() {
	return (
		<div>
			<Link to={'/dashboard/products/add'}>
				<div className="h-40 w-60 rounded-xl bg-amber-800 p-10">
					<Plus size={30} className="text-amber-500" />

					<h2 className="font-cal text-white text-xl mt-5">
						Add product
					</h2>
				</div>
			</Link>
		</div>
	);
}
