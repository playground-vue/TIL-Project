import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/playground-vue/TIL-Project',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
