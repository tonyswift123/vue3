//axios二次封装
import axios ,{AxiosRequestConfig,AxiosResponse} from 'axios'

axios.defaults.baseURL = `http://47.96.117.121:7002`;
// 添加请求拦截器
// 在发送请求之前做些什么
axios.interceptors.request.use((config:AxiosRequestConfig)=>{
    return config;
})
// 添加响应拦截器
axios.interceptors.response.use((response:AxiosResponse)=>{
    // 对响应数据做点什么
    return response
}, err=>{
    // 对响应错误做点什么
    return Promise.reject(err);
})

export default axios;