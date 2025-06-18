import { createBrowserRouter } from 'react-router';
import App from './App';

import DashboardLayout from './layouts/dashboard-layout';
import Dashboard from './pages/admin/dashboard';
import Products from './pages/admin/products';
import Orders from './pages/admin/orders';
import Customers from './pages/admin/customers';
import CustomerDetails from './pages/admin/customer-details';
import AddProduct from './pages/admin/add-product';

export const myRouter = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/dashboard',
		element: <DashboardLayout />,
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
			{
				path: '/dashboard/products',
				element: <Products />,
			},
			{
				path: '/dashboard/products/add',
				element: <AddProduct />,
			},
			{
				path: '/dashboard/customers',
				element: <Customers />,
			},
			{
				path: '/dashboard/customers/:id', // dynamic route
				element: <CustomerDetails />,
			},
			{
				path: '/dashboard/orders',
				element: <Orders />,
			},
		],
	},
]);
