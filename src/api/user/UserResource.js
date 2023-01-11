import ResourceClient from '@/api/ResourceClient';

export default class UserResource extends ResourceClient {
  constructor () {
    super({ url: '/api/users' });
  }

  list (params = { per_page: 10, query: '' }) {
    return super.get({ params });
  }

  create (data) {
    return super.post(data)
      .then(response => response)
      .catch(error => error.response);
  }

  find (id) {
    return super.get({ url: `${this._url}/${id}` })
      .then(response => response)
      .catch(error => error.response);
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

  template () {
    return super.get({
      url: `${this._url}/export/template`,
      responseType: 'arraybuffer',
    })
      .then(response => response)
      .catch(error => error.response);
  }

  download () {
    return super.post({}, {
      url: `${this._url}/export`,
      responseType: 'arraybuffer',
    })
      .then(response => response)
      .catch(error => error.response);
  }

  upload (file) {
    const headers = { 'Content-Type': 'multipart/form-data' };
    const config = { headers };
    const formData = new FormData();
    formData.append('file', file);
    return super.post(formData, { url: `${this._url}/import`, config })
      .then(response => response)
      .catch(error => error.response);
  }
}
