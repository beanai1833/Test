import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ContentTypeEnum } from "@/enums/requestEnum";
import { showToast } from 'vant';
import "vant/es/toast/style";
import { getLocalStorage, removeLocalStorage } from '@/utils/storage'

console.log(import.meta.env.NODE_ENV, 'import.meta.env.NODE_ENV ');

const service: AxiosInstance = Axios.create({
  withCredentials: false,
  timeout: 30000,
  headers: {
    "Content-Type": ContentTypeEnum.JSON
  },
  baseURL: import.meta.env.VITE_BASE_API
  // baseURL: 'https://test.mmice.com.cn/Amway2025MEL/api'
  // baseURL: import.meta.env.NODE_ENV == "development" ? import.meta.env.VITE_BASE_API : '/Amway2025MLE/api',
});


service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (getLocalStorage('anliMelToken')) {
      config.headers["Authorization"] = `Bearer ${getLocalStorage('anliMelToken')}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    if (res.code == 401) {
      showToast('请重新登录');
      removeLocalStorage('anliMelToken')
      // // window.location.href = '/Amway2025MEL/'; //测试
      window.location.href = '/'; //正式
      return
    } else if (res.code == 402) {
      // showToast('请重新登录');
      // removeLocalStorage('anliMelToken')
      window.location.href = window.location.origin + '/auth';
    } else {
      return res;
    }
  },
  (error: AxiosError) => {
    console.log('err' + error);
    showToast(error.message);
    return Promise.reject(error.message);
  },
);

export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.get(url, config);
  },

  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.post(url, data, config);
  },

  put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.put(url, data, config);
  },
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.delete(url, config);
  },
};

export default service;

