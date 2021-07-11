import axios from 'axios';

export const axiosDefault = axios.create({
	baseURL: 'https://thesilva-pokedex-api.herokuapp.com'
});