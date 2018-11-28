import fetcher from '../utils/fetcher';

export const fetchProductList = () => fetcher.get('/products').then(response => response.data);
