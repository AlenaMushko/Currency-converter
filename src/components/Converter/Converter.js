import { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';

import { Wrap, List, Title, Text, SwitchHorizontal } from './Converter.styled';
import { useFetchCurrency } from 'hooks/useFetchCurrency';

export const Converter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');

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

  const calculateOutput = (from, to, input) => {
    const haveMoney = ((dataBuy[from] / dataSale[to]) * input).toFixed(2);
    setOutput(haveMoney);
  };

  const handleInputChange = e => {
    setInput(e.target.value);
    calculateOutput(from, to, e.target.value);
  };

  const have = e => {
    setFrom(e.value);
    calculateOutput(e.value, to, input);
  };

  const recevie = e => {
    setTo(e.value);
    calculateOutput(from, e.value, input);
  };

  // Function to switch between two currency
  const switchCurrency = () => {
    setFrom(to);
    setTo(from);
    calculateOutput(from, to, output);
  };

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
              onChange={handleInputChange}
              value={input}
            />
            <Dropdown
              options={buy}
              placeholder="оберіть валюту"
              onChange={have}
              value={from}
            />
          </Wrap>
        </li>
        <li>
          <SwitchHorizontal>
            <HiOutlineSwitchHorizontal
              size="32px"
              onClick={() => {
                switchCurrency();
              }}
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
              value={output || '0'}
            />

            <Dropdown
              options={sale}
              placeholder="оберіть валюту"
              onChange={recevie}
              value={to}
            />
          </Wrap>
        </li>
      </List>
    </>
  );
};
