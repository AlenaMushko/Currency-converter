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



 