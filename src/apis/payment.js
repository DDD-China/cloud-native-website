import fetcher from '../utils/fetcher';

export const pay = payment =>
  fetcher.post('/payments', payment);
