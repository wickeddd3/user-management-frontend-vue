import ResourceClient from '@/api/ResourceClient';

export default class LoginResource extends ResourceClient {
  constructor () {
    super({ baseUrl: '/auth' });
  }

  login (data) {
    return super.get(data, { url: `${this._baseUrl}/login` });
  }

  logout () {
    return super.get({ url: `${this._baseUrl}/logout` });
  }
}
