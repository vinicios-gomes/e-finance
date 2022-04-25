import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';

axios.create({
  baseURL: 'http://localhost:3000/api',
});
