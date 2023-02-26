import { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { TbArrowBigRightLines } from 'react-icons/tb';

import { Wrap, List, Text, SwitchHorizontal, UfrerTitle, Reverse } from '../Converter/Converter.styled';
import { useFetchCurrency } from 'hooks/useFetchCurrency';

export const ReverseConverter = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
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

  const calculateOutput = (from, to, input) => {
    const haveMoney = ((dataBuy[from] / dataSale[to]) * input).toFixed(2);
    setOutput(haveMoney);
        console.log("dataBuy[to]", dataBuy[to]);
    console.log("dataSale[from]",dataSale[from]);
    console.log(input);
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

  const buy = Object.keys(dataBuy);
  const sale = Object.keys(dataSale);

  return (
    <Reverse>
      <UfrerTitle>Купити в банку</UfrerTitle>
      <List>
        <li>
          <Text>Я маю</Text>
          <Wrap>
            <input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="сума, яку хочете поміняти"
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
            <TbArrowBigRightLines size="32px" />
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
    </Reverse>
  );
};
