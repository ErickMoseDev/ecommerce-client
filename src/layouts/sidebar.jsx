import React from 'react';
import Logo from '../components/logo';
import { adminMenuItems, bottomMenuItems } from '../navigation/admin-menu';
import { NavLink } from 'react-router';

export default function Sidebar() {
	return (
		<aside className="top-0 w-72 h-screen flex flex-col gap-5  border-r border-slate-300 border-dashed">
			<div className="p-2 border-dashed border-b border-slate-300 h-16">
				<Logo link={'/dashboard'} />
			</div>

			{/* top section menu items */}

			<div className="flex flex-col px-3 gap-2">
				<p className="uppercase px-2 text-xs font-bold">Menu</p>
				{adminMenuItems.map((item, i) => (
					<NavItem
						path={item.path}
						name={item.name}
						icon={item.icon}
						key={item.path + i}
					/>
				))}
			</div>
			{/* bottom section menu items */}
			<div className="flex flex-col px-3 gap-2">
				<p className="uppercase px-2 text-xs font-bold">Other</p>
				{bottomMenuItems.map((item, i) => (
					<NavItem
						path={item.path}
						name={item.name}
						icon={item.icon}
						key={item.path + i}
					/>
				))}
			</div>
		</aside>
	);
}

function NavItem({ path, name, icon }) {
	return (
		<NavLink
			to={path}
			end
			className={({ isActive }) =>
				isActive
					? 'bg-amber-500 text-white flex cursor-pointer items-center gap-2 rounded-md p-2 font-medium'
					: 'text-gray-500 hover:bg-amber-500/[0.1] hover:text-amber-500 flex cursor-pointer items-center gap-2 rounded-md p-2 font-medium'
			}
		>
			{icon}
			<span className="text-xs">{name}</span>
		</NavLink>
	);
}

// fixed - position fixed
// be of a certain size
// sectioning
