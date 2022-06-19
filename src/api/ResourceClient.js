import axios from 'axios';

export default class ResourceClient {
  constructor ({ baseUrl = '', config = {} }) {
    this.$http = axios.create(config);
    this.$http.interceptors.response.use(response => {
      const { headers: { authorization = '' } } = response;
      const authHeader = authorization.split(/\s+/);
      const token = authHeader.length > 1 && authHeader[1];
      localStorage.setItem('accessToken', token);
      return response;
    }, error => {
      const status = error?.response?.status || null;
      if (status === 401) {
        console.error('got status: ', status, '. redirecting to /logout');
        window.location = '/logout';
      }
      return Promise.reject(error);
    });
    this._baseUrl = baseUrl;
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

  createCancelTokenSource () {
    return axios.CancelToken.source();
  }

  _request (config = {}) {
    return this.$http({
      url: this._baseUrl,
      ...this._defaultConfig,
      ...config,
    });
  }
}
