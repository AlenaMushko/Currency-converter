import axios from 'axios';

axios.defaults.baseURL = 'https://api.allorigins.win/';

const Api = async (url = ``) => {
  try {
    const response = await axios.get(url);
    return response.data.contents;
  } catch (error) {
    console.log(error);
  }
};

export const ApiConvert = () => {
  return Api(`get?url=${encodeURIComponent('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')}`);
};


const KEY = '3f162a20d7fc4df881cded4a8b0b91c8';
axios.defaults.baseURL = 'https://api.allorigins.win/';
const ApiNews = async (url = ``) => {
  try {
    const response = await axios.get(url);
    // console.log(response.data.contents);
    return response.data.contents;
  } catch (error) {
    console.log(error);
  }
};
export const GetNews = () => {
  return ApiNews(`get?url=${encodeURIComponent(`https://newsapi.org/v2/everything?q=новини&apiKey=${KEY}&pageSize=20&page=1`)}`);
};

