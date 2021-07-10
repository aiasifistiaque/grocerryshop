//
export const cartName = 'marncart';
export const tokenName = 'marntoken';
export const shippingName = 'marnshipping';

export const ISSERVER = typeof window === 'undefined';

/**auth */
export const logIn = 'LOG_IN';
export const logOut = 'LOG_OUT';

/**cart */
export const addCartItem = 'ADD_CART_ITEM';
export const removeCartItem = 'REMOVE_CART_ITEM';
export const emptyCart = 'EMPTY_CART';

/**signup */
export const signupRequest = 'SIGNUP_REQUEST';
export const signupSuccess = 'SIGNUP_SUCCESS';
export const signupFail = 'SINGUP_FAIL';

/**login */
export const loginRequest = 'LOGIN_REQUEST';
export const loginSuccess = 'LOGIN_SUCCESS';
export const loginFail = 'LOGIN_FAIL';

/**profile */
export const getProfileRequest = 'GET_PROFILE_REQUEST';
export const getProfileSuccess = 'GET_PROFILE_SUCCESS';
export const getProfileFail = 'GET_PROFILE_FAIL';

/**Edit profile */
export const editProfileRequest = 'EDIT_PROFILE_REQUEST';
export const editProfileSuccess = 'EDIT_PROFILE_SUCCESS';
export const editProfileFail = 'EDIT_PROFILE_FAIL';

/**Change Password */
export const changePasswordRequest = 'CHANGE_PASSWORD_REQUEST';
export const changePasswordSuccess = 'CHANGE_PASSWORD_SUCCESS';
export const changePasswordFail = 'CHANGE_PASSWORD_FAIL';

/**product list*/
export const getProductListRequest = 'GET_PRODUCT_LIST_REQUEST';
export const getProductListSuccess = 'GET_PRODUCT_LIST_SUCCESS';
export const getProductListFail = 'GET_PRODUCT_LIST_FAIL';

/**single product page*/
export const getProductRequest = 'GET_PRODUCT_REQUEST';
export const getProductSuccess = 'GET_PRODUCT_SUCCESS';
export const getProductFail = 'GET_PRODUCT_FAIL';

/**product list
 * by category
 */
export const getProductsByCategoryRequest = 'GET_PRODUCTS_BY_CATEGORY_REQUEST';
export const getProductsByCategorySuccess = 'GET_PRODUCTS_BY_CATEGORY_SUCCESS';
export const getProductsByCategoryFail = 'GET_PRODUCTS_BY_CATEGORY_FAIL';

/**product list
 * by sub category
 */
export const getProductsBySubRequest = 'GET_PRODUCTS_BY_SUB_REQUEST';
export const getProductsBySubSuccess = 'GET_PRODUCTS_BY_SUB_SUCCESS';
export const getProductsBySubFail = 'GET_PRODUCTS_BY_SUB_FAIL';

/**product list
 * by tag
 */
export const getProductsByTagRequest = 'GET_PRODUCTS_BY_TAG_REQUEST';
export const getProductsByTagSuccess = 'GET_PRODUCTS_BY_TAG_SUCCESS';
export const getProductsByTagFail = 'GET_PRODUCTS_BY_TAG_FAIL';

/**create new order
 *
 */
export const createOrderRequest = 'CREATE_ORDER_REQUEST';
export const createOrderSuccess = 'CREATE_ORDER_SUCCESS';
export const createOrderFail = 'CREATE_ORDER_FAIL';

/**
 * Get Orders of user
 */
export const getOrderRequest = 'GET_ORDER_REQUEST';
export const getOrderSuccess = 'GET_ORDER_SUCCESS';
export const getOrderFail = 'GET_ORDER_FAIL';

/**
 * Search for product
 */
export const searchRequest = 'SEARCH_REQUEST';
export const searchSuccess = 'SEARCH_SUCCESS';
export const searchFail = 'SEARCH_FAIL';

/**shipping address
 *
 */
export const getShippingAddressRequest = 'GET_SHIPPING_ADDRESS_REQUEST';
export const getShippingAddressSuccess = 'GET_SHIPPING_ADDRESS_Success';
