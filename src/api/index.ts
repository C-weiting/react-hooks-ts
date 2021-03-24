import axios from "axios";
import qs from "qs";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
//axios.defaults.transformRequest = (data = {}) => qs.stringify(data);
axios.interceptors.request.use(
    (config) => {
        let access_token = sessionStorage.getItem("access_token");
        config.headers = {
            Authorization: `Bearer ${access_token}`,
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);
export default axios;