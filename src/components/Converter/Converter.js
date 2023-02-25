import { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';

import { Wrap, List, Title, Text, SwitchHorizontal } from './Converter.styled';
import { useFetchCurrency } from 'hoock/useFetchCurrency';

export const Converter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  useEffect(() => {
    const haveMoney = ((dataBuy[from] / dataSale[to]) * input).toFixed(2);
    setOutput(haveMoney);
  }, [from, to, input]);

  const { USDBuy, USDSale, EURBuy, EURSale } = useFetchCurrency();
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

  const have = e => {
    setFrom(e.value);
  };

  const recevie = e => {
    setTo(e.value);
  };

  // Function to switch between two currency
  const switchCurrency = () => {
    const exchangeMoney = ((dataBuy[to] / dataSale[from] ) * output).toFixed(2);
    setInput(exchangeMoney)  
    }

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
              onChange={e => setInput(e.target.value)}
              value={input}
            />
            <Dropdown
              options={buy}
              placeholder="оберіть валюту"
              onChange={have}
            />
          </Wrap>
        </li>
        <li>
          <SwitchHorizontal>
            <HiOutlineSwitchHorizontal
              size="32px"
              onClick={() => { switchCurrency()} }
            />
          </SwitchHorizontal>
        </li>
        <li>
          <Text>Я отримую</Text>
          <Wrap>
            <input
              type="text"
              autoComplete="off"
              autoFocus
              disabled
              placeholder=""
              onChange={e => setInput(e.target.value)}
              value={output || '0'}
            />

            <Dropdown
              options={sale}
              placeholder="оберіть валюту"
              onChange={recevie}
            />
          </Wrap>
        </li>
      </List>
    </>
  );
};
