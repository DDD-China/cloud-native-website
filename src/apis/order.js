import fetcher from '../utils/fetcher';
import { getToken } from '../utils/session';

export const saveOrder = order =>
  fetcher.post('/orders', order, {
    headers: {
      'x-auth-token': getToken(),
    },
  }).then(response => response.data);
