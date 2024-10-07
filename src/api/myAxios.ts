import axios from "axios";

const _axios = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_BASE_URL
});

// 请求拦截器
_axios.interceptors.request.use(
    (config: any) => {
        config.headers = {
            Authorization: "aaa.bbb.ccc"
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

_axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default _axios
