import React from 'react';
import HomePage from '../../components/layout/HomePage/HomePage';
import SubCategories from '../../components/category/sub/SubCategories';
import subCategoryData from '../../data/subCategoryData';
//import { useRouter } from 'next/dist/client/router';

const category = () => {
	// const router = useRouter();
	// const { id } = router.query;
	return (
		<HomePage>
			<SubCategories links={[]} data={subCategoryData} to='/subcategory' />
		</HomePage>
	);
};

export default category;
