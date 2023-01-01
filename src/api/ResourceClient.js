import axios from 'axios';
import { apiDomain } from '../../.env';

export default class ResourceClient {
  constructor ({ url = '', config = {} }) {
    this.$http = axios.create({
      ...config,
      baseURL: apiDomain,
      withCredentials: true,
    });
    this._url = url;
    this._defaultConfig = config;
  }

  get (config = {}) {
    return this._request({ method: 'get', ...config });
  }

  put (data, config = {}) {
    return this._request({ method: 'put', data, ...config });
  }

  post (data, config = {}) {
    return this._request({ method: 'post', data, ...config });
  }

  delete (config = {}) {
    return this._request({ method: 'delete', ...config });
  }

  patch (data, config = {}) {
    return this._request({ method: 'patch', data, ...config });
  }

  _request (config = {}) {
    return this.$http({
      url: this._url,
      ...this._defaultConfig,
      ...config,
    });
  }
}
