import {
	CircleHelp,
	LayoutDashboard,
	MessageSquareText,
	Settings,
	ShoppingBag,
	ShoppingCart,
	User,
} from 'lucide-react';

export const adminMenuItems = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		icon: <LayoutDashboard size={16} />,
	},
	{
		path: '/dashboard/products',
		name: 'Products',
		icon: <ShoppingCart size={16} />,
	},
	{
		path: '/dashboard/orders',
		name: 'Orders',
		icon: <ShoppingBag size={16} />,
	},
	{
		path: '/dashboard/customers',
		name: 'Customers',
		icon: <User size={16} />,
	},
];

export const bottomMenuItems = [
	{
		path: '/dashboard/settings',
		name: 'Settings',
		icon: <Settings size={16} />,
	},
	{
		path: '/dashboard/help',
		name: 'Help & Privacy',
		icon: <CircleHelp size={16} />,
	},
	{
		path: '/dashboard/feedback',
		name: 'Feedback',
		icon: <MessageSquareText size={16} />,
	},
];
