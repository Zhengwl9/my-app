import config from './config'
import axios from 'axios'
import {  message } from 'antd'
import {loginOut} from "../store/actions";
const instance = axios.create({
    baseURL:config.router.erpApi,
});
//添加请求拦截器
instance.interceptors.request.use(
    (config)=>{
        config.headers['Authorization'] = 'Bearer ' + window.sessionStorage.getItem("token");
        return config;
    },
    (error)=>{return Promise.reject(error);}
);
//添加一个响应拦截器
instance.interceptors.response.use(
    (response)=> {
        if (response.data.code===200) {
            return response.data;
        }else{
            message.error(response.data.mes || response.data.msg );
        }
    },
    (err) =>{
        if (err && err.response) {
            switch (err.response.status) {
                case 401:
                    window.myReact.props.dispatch(loginOut());
                    window.myReact.props.history.push({path:"/login"});
                    break;
                default:
                    break;
            }
        }
        return Promise.reject(err);
    });
export default instance;
