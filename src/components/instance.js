
import axios from 'axios';
 export const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
 export const countriesinstance = axios.create({
  baseURL: 'https://gist.github.com/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
 
