import { useEffect, useState } from 'react';

import { ApiConvert } from 'ApiCurrency';
// import { Data } from 'data';
import { Container, Item, List, Span, Title } from './Header.styled';

export const Header = () => {
  const [EUR, setEUR] = useState({});
  const [USD, setUSD] = useState({});
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
  return (
    <Container>
      <List>
        <Item>
          <Title>USD</Title>
          {USD && (
            <>
              <p><Span>Buy</Span>{USDBuy}</p>
              <p><Span>Sale</Span>{USDSale}</p>
            </>
          )}
        </Item>
        <Item>
          <Title>EUR</Title>
          {EUR && (
            <>
              <p><Span>Buy</Span> {EURBuy}</p>
              <p><Span>Sale</Span>{EURSale}</p>
            </>
          )}
        </Item>
      </List>
    </Container>
  );
};
