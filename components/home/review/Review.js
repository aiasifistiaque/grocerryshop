import React from 'react';
import styles from './Review.module.css';
import Image from 'next/image';
import blogData from '../../../data/blogData';
import textShorten from '../../../functions/textShorten';

const Review = () => {
	return (
		<div className={styles.reviewSection}>
			<div className={styles.review}>
				<Image
					src='/tommy.jpeg'
					height={80}
					width={80}
					className={styles.image}
				/>
				<blockquote>
					{'"'}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.{'"'}
				</blockquote>
				<p>- Tommy Doe</p>
			</div>
			<div className={styles.blogContainer}>
				{blogData.map(item => (
					<div className={styles.blog} key={item.id}>
						<Image
							src={item.image}
							height={100}
							width={200}
							className={styles.blogImage}
						/>

						<div className={styles.textContainer}>
							<h3>{item.title}</h3>
							<p>{textShorten(item.description, 100)}</p>
							<a className={styles.button}>Read More</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Review;
