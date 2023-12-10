import axios from 'axios';
import baseURL from './baseURL';
import handleRefreshToken from './handleRefreshToken';
import {useQueryClient} from '@tanstack/react-query';

export const useAxiosClient = ({type = 'JSON', customRequestHeader = {}}) => {
  const queryClient = useQueryClient();
  
  const accessToken = localStorage.getItem('accessToken'); // set accessToken
  
  // set default header
  const headers = {
    'Content-Type': type === 'formData' ? 'multipart/form-data' : 'application/json', // content-type default as
                                                                                      // application/json OR
                                                                                      // multipart/form-data
    Accept: 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    Authorization: 'Bearer ' + accessToken, // set Authorization accessToken,
    ...customRequestHeader
  };
  
  // create axios instance
  const client = axios.create({
    baseURL: baseURL?._serviceURL, // default base url
    headers // set headers
  });
  
  client.interceptors.response.use(
    async (response) => Promise.resolve(response),
    async (error) => {
      const originalRequest = error.config; // save original request
      
      // if expire accessToken
      if (error?.response?.status === 401) {
        try {
          console.log('in 401');
          const newAccessToken = await handleRefreshToken(); // get new accessToken
          
          originalRequest.headers.Authorization = 'Bearer ' + newAccessToken; // set new accessToken
          
          return axios(originalRequest); // re run API
        } catch (error) {
          queryClient.removeQueries();
        }
      } else if (error?.response?.data?.message === 'token is expired') {
        queryClient.removeQueries();
      }
      
      return Promise.reject(error?.response?.data);
    }
  );
  
  return client;
};
