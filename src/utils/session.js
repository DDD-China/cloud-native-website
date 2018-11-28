import * as _ from 'lodash';
import Cookies from 'js-cookie';
import * as userApis from '../apis/user';

export const getToken = () => Cookies.get('token');

export const hasLogin = () => !_.isNil(getToken());

export const login = (phoneNumber, password) =>
  userApis.auth(phoneNumber, password).then(token => Cookies.set('token', token));

export const logout = () =>
  Promise.resolve()
         .then(() => Cookies.remove('token'));
