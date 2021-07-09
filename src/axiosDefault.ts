import axios from 'axios';

export const axiosDefault = axios.create({
	baseURL: 'http://localhost:3000/api',
});