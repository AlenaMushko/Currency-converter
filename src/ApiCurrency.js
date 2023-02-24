import axios from 'axios';

const KEY = 'QTiONi4KMyvVBz3ijF6t8VGC6vdpnU2QqEj6fSpP';

axios.defaults.baseURL = 'https://api.freecurrencyapi.com/';

const Api = async (url = ``) => {
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const ApiConvert = () => {
  return Api(`v1/latest?apikey=${KEY}`);
};
