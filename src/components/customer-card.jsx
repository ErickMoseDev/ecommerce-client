import React from 'react';
import { Link } from 'react-router';

export default function CustomerCard({
	id,
	firstName,
	lastName,
	email,
	gender,
	age,
	phone,
	joined,
}) {
	return (
		<Link to={`/dashboard/customers/${id}`} className="">
			<div className="border border-slate-300 rounded-xl p-5 flex flex-col gap-2 shadow-lg shadow-slate-200">
				<img
					src={`https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=random`}
					alt="customer avatar"
					className="size-10 rounded-sm"
				/>

				<div className="flex items-center gap-5 text-lg font-cal ">
					{firstName} {lastName}
				</div>
				<div className="text-amber-500 text-sm">{email}</div>
				<div className="flex items-center gap-5">
					<div className="text-sm text-slate-500">Phone: </div>
					{phone}
				</div>
				<div className="flex items-center gap-5">
					<div className="text-sm text-slate-500">Gender: </div>
					{gender}
				</div>
				<div className="flex items-center gap-5">
					<div className="text-sm text-slate-500">Age: </div>
					{age}
				</div>
				<div className="flex items-center gap-5">
					<div className="text-sm text-slate-500">Joined: </div>
					{new Date(joined).toLocaleDateString('en-us', {
						weekday: 'long',
						year: 'numeric',
						month: 'short',
						day: 'numeric',
					})}
				</div>
			</div>
		</Link>
	);
}
