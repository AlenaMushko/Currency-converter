import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';

import { ApiConvert } from 'ApiCurrency';
import { Wrap, List, Title, Text } from './Converter.styled';

export const Converter = () => {
  const [EUR, setEUR] = useState({});
  const [USD, setUSD] = useState({});
  const [input, setInput] = useState(0);
  // const [output, setOutput] = useState(0);
  // const [from, setFrom] = useState("");
  // const [to, setTo] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const reqvest = await ApiConvert();
        const USDObj = JSON.parse(reqvest)[0];
        const EURObj = JSON.parse(reqvest)[1];
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
  const dataBuy = {
    USD: USDBuy,
    EUR: EURBuy,
    UAN: 1,
  };

  const dataSale = {
    USD: USDSale,
    EUR: EURSale,
    UAN: 1,
  };
  const buy = Object.keys(dataBuy);
  const sale = Object.keys(dataSale);

  console.log(input);
  return (
    <>
      <Title>Конвертер валют</Title>

      <List>
        <li>
          <Text>Я маю</Text>
          <Wrap>
            <input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder=""
              onChange={(e) => setInput(e.target.value)}
            />

            <Dropdown
              options={buy}
              placeholder="оберіть валюту"
            />
          </Wrap>
        </li>
        <li>
          <div>
            <HiOutlineSwitchHorizontal
              size="32px"
            />
          </div>
        </li>
        <li>
          <Text>Я отримую</Text>
          <Wrap>
            <input type="text" autoComplete="off" autoFocus placeholder="" />
            <Dropdown
              options={sale}
              placeholder="оберіть валюту"
            />
          </Wrap>
        </li>
      </List>
    </>
  );
};
