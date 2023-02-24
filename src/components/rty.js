import { useEffect } from 'react';
// import { ApiConvert } from 'Api';
import { ApiConvert } from 'ApiCurrency';

export const Try = () => {
  console.log('try');
  useEffect(() => {
    const fetch = async () => {
      try {
        const reqvest = await ApiConvert();
        console.log(reqvest);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  return (
    <>
      <p>hay</p>
    </>
  );
};
