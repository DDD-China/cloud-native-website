import fetcher from '../utils/fetcher';

export const fetchShippings = orderId =>
  fetcher.get('/shippings', {
    params: { orderId },
  }).then(response => response.data);
