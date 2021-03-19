import axios from 'axios';

const config = {
  timeout: 5 * 1000, // 超时设置(单位毫秒)，无超时时间设置为 0。
  responseType: 'json', // 响应的数据格式：json/blob/document/arraybuffer/text/stream
};

const $axios = axios.create(config);

$axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  res => {
    return res.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default $axios;
