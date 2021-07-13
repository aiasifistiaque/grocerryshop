import React from 'react';
import Dashboard from '../../components/admin/Dashboard/Dashboard';
import Homepage from '../../components/layout/HomePage/HomePage';
import { useRouter } from 'next/router';
import Products from '../../components/admin/Dashboard/Products';
import AdminHome from '../../components/layout/HomePage/AdminHome';
import Orders from '../../components/admin/Dashboard/Orders';
import Users from '../../components/admin/Dashboard/Users';
import AdminProduct from '../../components/admin/Dashboard/AdminProduct';
import AdminOrder from '../../components/admin/Dashboard/AdminOrder';
import AdminUsers from '../../components/admin/Dashboard/AdminUsers';

const AdminPage = () => {
	const router = useRouter();
	const { id, serial } = router.query;

	return (
		<AdminHome>
			{id == 'products' ? (
				<Products />
			) : id == 'orders' ? (
				<Orders />
			) : id == 'users' ? (
				<Users />
			) : id == 'product' ? (
				<AdminProduct id={serial} />
			) : id == 'order' ? (
				<AdminOrder id={serial} />
			) : id == 'user' ? (
				<AdminUsers id={serial} />
			) : (
				<Dashboard />
			)}
		</AdminHome>
	);
};

export default AdminPage;
