import React, { useState, useEffect } from 'react';
import styles from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import SearchInput from '../core/inputs/textinput/SearchInput';
import searchAction from '../../store/actions/search/searchAction';
import Image from 'next/image';
import { general } from '../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/dist/client/router';

const Search = ({ active, off }) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { products, loading, error } = useSelector(state => state.search);

	const [searchString, setSearchString] = useState('');

	useEffect(() => {
		searchString.length > 0 && dispatch(searchAction(searchString));
	}, [searchString]);

	const variants = {
		open: { opacity: 1, y: '0%' },
		closed: { opacity: 0, y: '-100%' },
	};
	return (
		<motion.div
			animate={active ? 'open' : 'closed'}
			variants={variants}
			className={
				active
					? `${styles.searchPanel} ${
							products &&
							products.length > 1 &&
							searchString.length > 0 &&
							styles.panelExpand
					  }`
					: styles.searchHidden
			}>
			<div onClick={off} className={styles.closeIcon}>
				<FontAwesomeIcon icon={faTimes} height={20} className={styles.icon} />
			</div>

			<div className={styles.inputContainer}>
				<SearchInput
					value={searchString}
					onChange={e => setSearchString(e)}
					placeholder='Search'
				/>
			</div>

			{searchString.length == 0 ? (
				<InitText>Search for a product</InitText>
			) : loading ? (
				<SearchLoading />
			) : products && products.length < 1 ? (
				<InitText>No Products Found</InitText>
			) : (
				<SearchProductContainer>
					{products &&
						products.map((product, i) => (
							<SearchProducts
								item={product}
								key={i}
								onClick={() => {
									off();
									router.push(`/product/${product._id}`);
								}}
							/>
						))}
				</SearchProductContainer>
			)}
		</motion.div>
	);
};

const SearchLoading = () => {
	return (
		<div className={styles.searchLoading}>
			<h3>loading...</h3>
		</div>
	);
};

const InitText = ({ children }) => {
	return (
		<div className={styles.searchLoading}>
			<h3>{children}</h3>
		</div>
	);
};

const SearchProductContainer = ({ children }) => {
	return <div className={styles.spCardContainer}>{children}</div>;
};

const SearchProducts = ({ item, onClick }) => {
	return (
		<div className={styles.spCard} onClick={onClick}>
			<Image src={item.image} height={75} width={75} objectFit='cover' />
			<div className={styles.cardText}>
				<h4>{item.name}</h4>
				<p>{`${general.takaSymbol} ${item.price}`}</p>
			</div>
		</div>
	);
};

export default Search;
