import HomePage from '../components/layout/HomePage/HomePage';
import Hero from '../components/home/hero/Hero';
import PlaceholderPage from '../components/PlaceholderPage';
import Categories from '../components/home/categories/Categories';
import AdOne from '../components/home/adone/AdOne';
import AdTwo from '../components/home/adtwo/AdTwo';
import Review from '../components/home/review/Review';
import Banner from '../components/home/banner/Banner';

export default function Home() {
	return (
		<HomePage>
			<Hero />
			<Categories />
			<AdOne />
			<AdTwo />
			<Review />
			<Banner />
		</HomePage>
	);
}
