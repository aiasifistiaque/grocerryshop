import React from 'react';
import HomePage from '../../components/layout/HomePage/HomePage';
import SubCategories from '../../components/category/sub/SubCategories';
import tagData from '../../data/tagData';
import { useRouter } from 'next/dist/client/router';

const subcategories = () => {
	const router = useRouter();
	const { id } = router.query;
	console.log(tagData[0]);
	return (
		<HomePage>
			<SubCategories
				data={tagData}
				to='/tag'
				links={[
					{ name: tagData[0].category, to: `/category/${tagData[0].category}` },
				]}
			/>
		</HomePage>
	);
};

export default subcategories;
