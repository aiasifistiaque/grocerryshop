import React, { createContext, useState } from 'react';

export const OrderStatusContext = createContext();

export const OrderStatusProvider = ({ children }) => {
	const [edit, setEdit] = useState(false);
	const onEdit = () => {
		setEdit(true);
	};
	return <OrderStatusContext.Provider>{children}</OrderStatusContext.Provider>;
};

export default index;
