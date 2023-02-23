import axios from 'axios';

const myHeaders = new Headers();
myHeaders.append("apikey", "eQWUcNgFaIDYHbnDQlu6iYoRZnT3fMvo");
const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

const date = new Date().toISOString();
const formatDate = date.split('T')[0];

axios.defaults.baseURL = 'https://api.apilayer.com/fixer/';

const Api = async (url = ``) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const ApiConvert = () => {
 
  console.log(Api(`convert?base=USD&symbols=EUR,GBP,JPY&amount=5&date=${formatDate}`, requestOptions));
  return Api(`convert?base=USD&symbols=EUR,GBP,JPY&amount=5&date=${formatDate}`, requestOptions)
  // return Api(`convert?to=${to}&from=${from}&amount=${amount}&date=${formatDate}`, requestOptions);
};

// export const ApiConvert = async () => {
// const response = fetch(`convert?base=USD&symbols=EUR,GBP,JPY&amount=5&date=${formatDate}`, requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//     .catch(error => console.log('error', error));
//   return response.json();
  
// } 
