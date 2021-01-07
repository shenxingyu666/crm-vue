import axios from "axios";
import {Message} from "element-ui";

axios.defaults.baseURL = 'http://localhost:9000/';


axios.interceptors.request.use(function (config) {

    return config;
}, function (error) {
    return Promise.reject(error);
});


axios.interceptors.response.use(function (response) {

    let {status, message, data} = response.data;
    if (status == 20000) {
        return data;
    } else {
        Message.error(message);
        //代码阻断掉 不往下执行
        return Promise.reject(false);
    }
}, function (error) {
    return Promise.reject(error);
});



export default axios