import ResourceClient from '@/api/ResourceClient';

export default class UserResource extends ResourceClient {
  constructor () {
    super({ baseUrl: '/auth/users' });
  }

  current () {
    return super.get({ url: `${this._baseUrl}/current` });
  }

  list (params = { size: 100000 }) {
    return super.get({ params });
  }

  create (data) {
    return super.post(data);
  }

  find (id) {
    return super.get({ url: `${this._baseUrl}/${id}` });
  }

  update (id, data) {
    return super.put(data, { url: `${this._baseUrl}/${id}` });
  }

  uploadProfilePicture (id, profilePicture) {
    const headers = { 'Content-Type': 'multipart/form-data' };
    const config = { headers };
    const formData = new FormData();
    formData.append('file', profilePicture);
    return super.post(formData, { url: `${this._baseUrl}/${id}/profile-picture` }, config);
  }
}
