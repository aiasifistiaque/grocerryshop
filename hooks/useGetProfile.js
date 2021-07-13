import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from '../constants';
import { tokenName } from '../store/storeConstants';

const useGetProfile = () => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState([]);
	const [error, setError] = useState(false);

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
			.post(`${api.profile}`, { body: '' }, config)
			.then(function (response) {
				setUser(response.data);
				setLoading(false);
			})
			.catch(function (error) {
				setError(true);
				setLoading(false);
				console.log(error.message);
			})
			.then(function () {
				setLoading(false);
			});
	}, []);
	return { user, loading, error };
};

export default useGetProfile;
