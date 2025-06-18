import React from 'react';
import Sidebar from './sidebar';
import { Outlet } from 'react-router';
import DashboardNavbar from './dashboard-navbar';

export default function DashboardLayout() {
	return (
		<div className="flex h-screen">
			<Sidebar />

			<div className="overflow-y-auto w-full">
				<DashboardNavbar />
				<main className="p-5">
					<Outlet />
				</main>
			</div>
		</div>
	);
}

// fixed sidebar layout
// fixed dashboard navbar
// an outlet to display the equivalent pages
