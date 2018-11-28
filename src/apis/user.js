import fetcher from '../utils/fetcher';

export const auth = (phoneNumber, password) =>
  fetcher.post('/auth',{}, {
    auth: {
      username: phoneNumber,
      password,
    }
  }).then(response => response.headers['x-auth-token']);
