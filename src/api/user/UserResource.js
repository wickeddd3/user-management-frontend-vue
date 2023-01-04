import ResourceClient from '@/api/ResourceClient';

export default class UserResource extends ResourceClient {
  constructor () {
    super({ url: '/api/users' });
  }

  list (params = { per_page: 10 }) {
    return super.get({ params });
  }

  create (data) {
    return super.post(data);
  }

  find (id) {
    return super.get({ url: `${this._url}/${id}` });
  }

  update (id, data) {
    return super.put(data, { url: `${this._url}/${id}` });
  }
}
