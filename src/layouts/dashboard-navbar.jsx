import { Bell, BellDot, Search, User } from 'lucide-react';
import React from 'react';

export default function DashboardNavbar() {
	return (
		<div className="sticky top-0 w-full flex justify-between bg-white z-20 px-3 py-4.5 border-b border-dashed border-slate-300 h-16">
			<div className="font-cal text-lg text-slate-600">
				<button className=" p-1.5 bg-amber-500/[0.2] rounded-md cursor-pointer">
					<Search size={16} className="text-amber-500" />
				</button>
			</div>
			<div className="flex items-center gap-3">
				<button className="p-1.5 bg-amber-500/[0.2] rounded-md cursor-pointer">
					<Bell size={16} className="text-amber-500" />
				</button>
				<button className="bg-amber-500/[0.2] p-1.5  rounded-md cursor-pointer">
					<User size={16} className="text-amber-500" />
				</button>
			</div>
		</div>
	);
}
