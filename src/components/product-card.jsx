import React from 'react';
import { Link } from 'react-router';

export default function ProductCard({
	id,
	title,
	image,
	description,
	category,
	price,
	rating,
}) {
	return (
		<Link
			to={`/dashboard/products/${id}`}
			className="rounded-lg flex flex-col justify-between gap-3 border border-slate-300 shadow-lg shadow-slate-200 overflow-hidden"
		>
			<div>
				<img
					src={image}
					alt={title}
					className="w-full h-[200px] object-contain object-top"
				/>
				<div className="p-5 flex flex-col gap-3">
					<h2 className="font-sans text-lg font-bold line-clamp-1">
						{title}
					</h2>
					<div className="bg-orange-500/[0.15] text-orange-500 px-2 rounded-sm w-fit text-font-medium">
						{category}
					</div>
					<p className="font-medium text-gray-600 text-xs line-clamp-2">
						{description}
					</p>
				</div>

				{/* price and rating */}
				<div className="flex justify-between items-center p-5">
					<h4 className="text-2xl font-bold font-sans">
						KES {price}
					</h4>

					<p
						className={
							rating >= 4.0
								? 'font-sans font-bold text-xl text-green-500'
								: rating >= 2.5
								? 'font-sans font-bold text-xl text-orange-400'
								: 'font-sans font-bold text-xl text-red-500'
						}
					>
						{rating}
					</p>
				</div>
			</div>
		</Link>
	);
}
