import axios from 'axios';

import { environment } from "../environments/environment";


// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: environment.gatewayUrl });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
