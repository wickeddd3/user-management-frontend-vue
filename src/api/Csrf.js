import axios from 'axios';
import Cookies from 'js-cookie';
import { apiDomain } from '../../.env';

export default {
  getCookie () {
    const http = axios.create({
      baseURL: apiDomain,
      withCredentials: true,
    });
    const token = Cookies.get('XSRF-TOKEN');

    if (token) {
      return token;
    }

    return http.get('/sanctum/csrf-cookie');
  },
};
