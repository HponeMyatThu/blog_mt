import axios from 'axios';
import { store } from 'src/features/store';

const API = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
  withCredentials: true,
});

API.interceptors.request.use(
  config => {
    // const accessToken = getCookie('accessToken');
    // console.log(accessToken);
    // if (accessToken) {
    //   config.headers['Authorization'] = `Bearer ${accessToken}`;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

API.interceptors.request.use(
  config => {  
    // console.log("RESPONSE",store.getState().user.user[0].Token);  
    // const publicRoutes = [
    //   '/',
    //   '/event/',
    //   '/user/login',
    //   '/auth/signup_organizer',
    // ];

    // if (publicRoutes.includes(config.url)) {
    //   delete config.headers['Authorization'];
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default API;
