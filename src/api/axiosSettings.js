import axios from "axios";


axios.defaults.baseURL = `https://crmv1-0-backend.onrender.com/`;


export const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    },
};


export default axios;