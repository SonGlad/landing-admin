import axios from "axios";


axios.defaults.baseURL = `https://landing-backend-0aub.onrender.com/`;


export const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    },
};


export default axios;