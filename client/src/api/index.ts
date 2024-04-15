import axios, { AxiosError } from "axios";

const BASE_URL = "http://127.0.0.1:8000/";

const $host = axios.create({
  baseURL: BASE_URL,
});

const errorInterceptor = (error: AxiosError) => {
  return Promise.reject(error);
};

$host.interceptors.response.use(null, errorInterceptor);

export { $host };
