const from = 'EUR';
const to = 'GBR';
const amount = '100';

const date = new Date().toISOString();
const formatDate = date.split('T')[0];

const myHeaders = new Headers();
myHeaders.append('apikey', 'QHpbR3pF8kdP8kFfkrWASTYB5PIaWluB');
const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export const ApiConvert = async () => {
  const response = fetch(
    `https://data.fixer.io/api/convert?base=USD&symbols=EUR,GBP,JPY&amount=5&date=${formatDate}`,
    requestOptions
  )
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  return response.json();
};
