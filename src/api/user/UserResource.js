import ResourceClient from '@/api/ResourceClient';

export default class UserResource extends ResourceClient {
  constructor () {
    super({ url: '/api/users' });
  }

  list (params = { per_page: 10 }) {
    return super.get({ params });
  }

  create (data) {
    return super.post(data)
      .then(response => response)
      .catch(error => error.response);
  }

  find (id) {
    return super.get({ url: `${this._url}/${id}` });
  }

  update (id, data) {
    return super.put(data, { url: `${this._url}/${id}` })
      .then(response => response)
      .catch(error => error.response);
  }

  delete (id) {
    return super.delete({ url: `${this._url}/${id}` })
      .then(response => response)
      .catch(error => error.response);
  }
}
