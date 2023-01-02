// eslint-disable-next-line max-classes-per-file
import ResourceClient from '@/api/ResourceClient';
import Csrf from '@/api/Csrf';

class UserResource extends ResourceClient {
  constructor (parent) {
    super({ url: parent });
  }

  get () {
    return super.get({ url: '/api/user' });
  }

  update (data) {
    return super.put(data, { url: '/user/profile-information' });
  }

  updatePassword (data) {
    return super.put(data, { url: '/user/password' });
  }
}

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

  current () {
    return new UserResource(this._url);
  }
}
