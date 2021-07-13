import React from 'react';
import AdminPageMain from './AdminPageMain';
import useGetDash from '../../../hooks/useGetDash';
import { general } from '../../../constants';
import styles from './Dashboard.module.css';
import Loading from '../../admin/acomps/AdminLoading';

const Dashboard = () => {
	return (
		<AdminPageMain>
			<h3>Admin Dashboard</h3>
			<DashboardContainer>
				<ItemCount option='all orders'>Total Orders</ItemCount>
				<ItemCount option='pending orders'>Pending Orders</ItemCount>
				<ItemCount option='completed orders'>Completed Orders</ItemCount>
				<ItemCount option='all products'>Total Products</ItemCount>
				<ItemAmount option='pending orders'>Amount Due</ItemAmount>
				<ItemAmount option='completed orders'>Amount Received</ItemAmount>
				<ItemCount option='all users'>Total Users</ItemCount>
				<ItemCount option='admin users'>Total Admin</ItemCount>
			</DashboardContainer>
		</AdminPageMain>
	);
};

const DashboardContainer = ({ children }) => {
	return <div className={styles.dashboard}>{children}</div>;
};

const ItemAmount = ({ option, children }) => {
	const { dash, loading } = useGetDash(option);
	if (loading) return <Loading />;
	return (
		<DashItemContainer title={children}>
			{general.takaSymbol + ' '}
			{dash.total}
		</DashItemContainer>
	);
};

const ItemCount = ({ option, children }) => {
	const { dash, loading } = useGetDash(option);
	if (loading) return <Loading />;
	return <DashItemContainer title={children}>{dash.count}</DashItemContainer>;
};

const DashItemContainer = ({ title, children }) => {
	return (
		<div className={styles.dashboardItemContainer}>
			<h5>{title || ''}</h5>
			<p>{children}</p>
		</div>
	);
};

export default Dashboard;
