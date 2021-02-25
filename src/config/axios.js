import axios from 'axios';

const postAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export default postAxios;