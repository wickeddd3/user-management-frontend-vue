import ResourceClient from '@/api/ResourceClient';
import Csrf from '@/api/Csrf';

export default class AuthenticationResource extends ResourceClient {
  constructor () {
    super({ url: '' });
  }

  async login (data) {
    await Csrf.getCookie();
    return super.post(data, { url: '/login' })
      .then(response => response)
      .catch(error => error.response);
  }

  logout () {
    return super.post({}, { url: '/logout' });
  }
}
