import fetcher from '../utils/fetcher';

export const fetchProductList = () => fetcher.get('/products').then(response => response.data);

export const fetchProduct = productId => fetcher.get(`/products/${productId}`).then(response => response.data);
