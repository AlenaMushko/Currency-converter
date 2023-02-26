import { useEffect, useState } from 'react';

import { ApiConvert } from 'Api';

export const useFetchCurrency = () => {
  const [EUR, setEUR] = useState({});
  const [USD, setUSD] = useState({});
  useEffect(() => {
    const fetch = async () => {
      try {
        const reqvest = await ApiConvert();
        const USDObj = JSON.parse(reqvest)[1];
        const EURObj = JSON.parse(reqvest)[0];
        setEUR(EURObj);
        setUSD(USDObj);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  let USDBuy = Number(USD.buy).toFixed(2);
  let USDSale = Number(USD.sale).toFixed(2);
  let EURBuy = Number(EUR.buy).toFixed(2);
  let EURSale = Number(EUR.sale).toFixed(2);

  return {
    USDBuy,
    USDSale,
    EURBuy,
    EURSale,
  };
};




  
  
