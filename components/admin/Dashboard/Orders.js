import React, { useEffect, useState } from 'react';
import AdminPageMain from './AdminPageMain';
import { useDispatch, useSelector } from 'react-redux';
import getAllOrders from '../../../store/actions/admin/getAllOrders';
import { AdminListContainer, AdminListCard } from '../acomps';
import { general } from '../../../constants';
import ButtonPrimary from '../../core/buttons/ButtonPrimary';
import toTime from '../../../functions/toTime';
import Link from 'next/link';

const Orders = () => {
	const dispatch = useDispatch();
	const [page, setPage] = useState(0);
	const { orders, loading, success, count, error } = useSelector(
		state => state.orderList
	);
	useEffect(() => {
		dispatch(getAllOrders('', page));
	}, [page]);

	if ((loading && page == 0) || error) return null;
	return (
		<AdminPageMain>
			<h3>Orders</h3>
			<AdminListContainer>
				{orders &&
					orders &&
					orders.map((item, i) => (
						<AdminListCard key={i}>
							<p>Data: {toTime(item.createdAt)}</p>
							<p>
								{general.takaSymbol + ' '}
								{item.totalPrice}
							</p>

							<p>Status: {item.status}</p>
							<Link href={`/admin/order?serial=${item._id}`}>
								<a>Details</a>
							</Link>
						</AdminListCard>
					))}
			</AdminListContainer>
			<ButtonPrimary
				rounded
				onClick={() => {
					!loading && setPage(page + 1);
				}}>
				{loading ? 'Loading...' : 'Load More'}
			</ButtonPrimary>
		</AdminPageMain>
	);
};

export default Orders;
