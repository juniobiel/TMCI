import axios from 'axios';

const api = axios.create({
    baseURL: 'http://tmcieletrica.com.br'
})

export default api;