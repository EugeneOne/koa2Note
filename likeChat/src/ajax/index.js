import axios from 'axios'
import qs from 'qs'
// 可能需要重定向
import router from '../router'
// 引入mint-ui 弹框
// import { MessageBox, Indicator } from 'mint-ui'
//import { Loading,Notification } from 'element-ui';

var isLoading = "";

//自定义配置新建一个 axios 实例
const Axios = axios.create({
    baseURL: '/',
    timeout: 80000,
    responseType: 'json',
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    },
    // 表示跨域请求时是否带上cookie
    withCredentials: false
})

Axios.defaults.baseURL = 'http://localhost:3000'

// 添加请求拦截器
Axios.interceptors.request.use(
    config => {
        if (
            config.method === "post" ||
            config.method === "put" ||
            config.method === "delete"
        ) {
            // 序列化
            //config.data = qs.stringify(config.data);
        }
        // Indicator.open({
        //     text: '加载中...',
        //     spinnerType: 'triple-bounce'
        // });
        //isLoading = Loading.service();
        return config
    },
    error => {
        // Notification({
        //     type: 'error',
        //     message: '请求错误',
        //     duration: 2000
        // });
        return Promise.reject(error);
    }
)

// 添加响应拦截器
Axios.interceptors.response.use(
    res => {
        // 返回数据报错
        if(res.data && res.data.error_no != 0) {
        //isLoading.close();
        // Notification ({
        //     title: '提示',
        //     type: 'warning',
        //     message: '错误:'+res.data.error_msg,
        //     duration: 2500
        // });
        return Promise.reject(res.data.error.message);
        }
        //isLoading.close();
        return res;
    },
    error => {
        console.log('error:',error)
        //isLoading.close();
        // Notification({
        //     title: '提示',
        //     type: 'warning',
        //     message: '请求错误',
        //     duration: 2500
        // });
        return Promise.reject(error);
    }
)

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
    install: (Vue, Option) => {
        Object.defineProperty(Vue.prototype, "$ajax", {
            value: Axios
        })
    }
}