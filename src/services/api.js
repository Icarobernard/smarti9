import axios from 'axios';

const api = axios.create({ baseURL: 'https://smarti9-mail-service.herokuapp.com' })

export default api