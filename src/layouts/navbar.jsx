import React from 'react';
import { NavLink, useNavigate } from 'react-router';
import Logo from '../components/logo';

const navItems = [
	{
		path: '/',
		name: 'Home',
	},
	{
		path: '/customers',
		name: 'Customers',
	},
];

export default function Navbar() {
	const navigate = useNavigate();

	return (
		<header className="w-full h-fit border-b border-slate-200 py-4">
			<nav className="flex items-center justify-between mx-auto max-w-6xl">
				<Logo link={'/'} />
				<div className="flex gap-5">
					{navItems.map((item, i) => (
						<NavLink
							to={item.path}
							key={item.path + i}
							className={({ isActive }) =>
								isActive ? 'text-amber-500 font-bold' : ''
							}
						>
							{item.name}
						</NavLink>
					))}
				</div>
				<div className="">
					<button
						className="bg-amber-500 px-3 py-2 font-medium rounded-lg cursor-pointer"
						onClick={() => navigate('/dashboard')}
					>
						Dashboard
					</button>
				</div>
			</nav>
		</header>
	);
}

// persisted layouts in react
// outlet
