//

export const backend = 'https://marn-backend.herokuapp.com/api';
export const backendFile = 'https://marn-backend.herokuapp.com';

//export const production = 'https://api-vincentsphere.herokuapp.com/api';

export const dev = 'http://localhost:5000/api';
const domain = '';
const frontDev = 'https://vincents-sphere.vercel.app/';

export const frontend = frontDev;

const server = backend;

export const api = {
	/**categories */
	homeproductcategories: `${server}/categories/homecat`,

	/**get products by*/
	productsByCategory: `${server}/categories/cat`, //categories
	productsBySubcategory: `${server}/categories/subcategory`, //sub cateogry
	productsByTag: `${server}/categories/tag`, //tag

	/**get products by*/
	subs: `${server}/categories/sub`, //categories

	/**products */
	products: `${server}/products`,
	search: `${server}/search`,
	explore: `${server}/explore`,

	/**auth */
	login: `${server}/login`,
	register: `${server}/register`,
	sendOtp: `${server}/profile/sendotp`,
	verifyOtp: `${server}/profile/verifyotp`,
	resetPassword: `${server}/profile/resetpassword`,
	changePassword: `${server}/profile/changePassword`,

	/**user */
	profile: `${server}/profile`,
	userorder: `${server}/order/userorder`,
	editUser: `${server}/profile/edituser`,

	/**orders */
	order: `${server}/order`,

	//change product picture
	changeProductPicture: `${server}/products/changepicture`,

	/**product review */
	review: `${server}/review`,

	/**wish list */
	addWish: `${server}/review/addtowishlist`,
	deleteWish: `${server}/review/deletefromwishlist`,
	getWish: `${server}/review/getwishlist`,

	/**admin */
	allusers: `${server}/profile/getallusers`,
	anUser: `${server}/profile/getanuser`,
	userByMail: `${server}/profile/getuserbymail`,
	editRole: `${server}/profile/editrole`,
	getAllUsers: `${server}/profile/getallusers`,
	createProduct: `${server}/products/createproduct`,
	getAllOrders: `${server}/order/getallorders`,
	changeSeen: `${server}/order/changeSeen`,
	payment: `${server}/payment`,
	dashboard: `${server}/dashboard`,
	upload: `${server}/upload`,

	config: {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	},
	fileConfig: {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	},
};

export const general = {
	takaSymbol: '৳',
	vat: 0,
	shipping: 0,
};

export const shopData = {
	name: 'Grocery',
};
