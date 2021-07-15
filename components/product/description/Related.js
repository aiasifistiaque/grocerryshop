import React, { useEffect, useState } from 'react';
import styles from './Description.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import getProductsByCategoryAction from '../../../store/actions/products/getProductsByCategoryAction';

const Related = ({ items, product }) => {
	const dispatch = useDispatch();
	const [list, setList] = useState(items);

	const { products, loading } = useSelector(state => state.productList);

	const id =
		product && product.tag && product.tag.length > 0
			? { title: product.tag, option: 'tag' }
			: product.subCategory && product.subCategory.length > 0
			? { title: product.subCategory, option: 'sub' }
			: product.category &&
			  product.category.length > 0 && {
					title: product.category,
					option: 'cat',
			  };

	useEffect(() => {
		items.length < 1 &&
			product &&
			product.category &&
			dispatch(getProductsByCategoryAction(id.title, id.option));
	}, []);

	useEffect(() => {
		!items < 1 && setList(products);
	}, [loading]);

	return (
		<div className={styles.description}>
			<h2>Related Products</h2>
			<div className={styles.cardContainer}>
				{list.map(
					(item, i) =>
						i < 4 && (
							<Link href={`/product/${item._id}`} key={i}>
								<div className={styles.card}>
									<Image
										unoptimized={true}
										alt={item.name}
										src={item.image}
										width={150}
										height={150}
										className={styles.image}
									/>
									<h3>{item.name}</h3>
									<p>{item.size}</p>
									<h2>৳ {item.price}</h2>
								</div>
							</Link>
						)
				)}
			</div>
		</div>
	);
};

export default Related;
