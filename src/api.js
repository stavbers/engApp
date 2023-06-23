import { API_URL } from './config';

const getAllCategories = async () => {
    const resp = await fetch(API_URL + 'api/categori');
    return await resp.json();
};

const getSingleCategori = async () => {
  const resp = await fetch(API_URL + 'api');
  return await resp.json();
};

export { getAllCategories, getSingleCategori };
