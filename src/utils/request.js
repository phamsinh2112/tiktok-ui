import axios from 'axios';
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, optines = {}) => {
    const response = await request.get(path, optines);
    return response.data;
};
export default request;
