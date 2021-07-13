import React from 'react';
import styles from './Acomps.module.css';
import dashStyles from '../Dashboard/Dashboard.module.css';
import { general } from '../../../constants';
import Loading from '../../core/loading/Loading';

export const AdminListCard = ({ children, seen }) => {
	return (
		<div
			className={styles.listCard}
			style={{ backgroundColor: seen ? 'rgba(30,144,255,.1)' : 'white' }}>
			{children}
		</div>
	);
};

export const AdminListContainer = ({ children }) => {
	return <div className={styles.listContainer}>{children}</div>;
};

export const DashboardContainer = ({ children }) => {
	return <div className={dashStyles.dashboard}>{children}</div>;
};

export const ItemAmount = ({ option, children }) => {
	const { dash, loading } = useGetDash(option);
	if (loading) return <Loading />;
	return (
		<DashItemContainer title={children}>
			{general.takaSymbol + ' '}
			{dash.total}
		</DashItemContainer>
	);
};

export const ItemCount = ({ option, children }) => {
	const { dash, loading } = useGetDash(option);
	if (loading) return <Loading />;
	return <DashItemContainer title={children}>{dash.count}</DashItemContainer>;
};

export const DashItemContainer = ({ title, children }) => {
	return (
		<div className={dashStyles.dashboardItemContainer}>
			<h5>{title || ''}</h5>
			<p>{children}</p>
		</div>
	);
};
