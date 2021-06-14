import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://trusting-firefly-82001.pktriot.net/api-agropalma-maker/api/',
});

export default api;
