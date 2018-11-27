import * as _ from 'lodash';
import Cookies from 'js-cookie';

export const getToken = () => Cookies.get('token');

export const hasLogin = () => !_.isNil(getToken());

export const login = () =>
  Promise.resolve('sometoken')
         .then(token => Cookies.set('token', token));

export const logout = () =>
  Promise.resolve()
         .then(() => Cookies.remove('token'));
