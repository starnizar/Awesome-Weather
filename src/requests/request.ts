import axios from 'axios';
import { API_KEY } from '@env';

export async function fetchRequest(url: string) {
  return axios
    .get(`${url}&appid=${API_KEY}`)
    .then(result => result)
    .catch(error => {
      throw error;
    });
}
