import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from '../constants';
import { tokenName } from '../store/storeConstants';

const useGetDash = option => {
	const [loading, setLoading] = useState(true);
	const [dash, setDash] = useState({});

	useEffect(() => {
		setLoading(true);
		const token = JSON.parse(localStorage.getItem(tokenName));

		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: token,
			},
		};

		axios
			.post(`${api.dashboard}`, { option: option }, config)
			.then(function (response) {
				setDash(response.data);
				setLoading(false);
			})
			.catch(function (error) {
				setLoading(false);
				console.log(error.message);
			})
			.then(function () {
				setLoading(false);
			});
	}, []);
	return { dash, loading };
};

export default useGetDash;
