import { useFetchCurrency } from 'hooks/useFetchCurrency';
import { Container, Item, List, Span, Title } from './Header.styled';

export const Header = () => {
  const { USDBuy, USDSale, EURBuy, EURSale } = useFetchCurrency();

  return (
    <Container>
      <List>
        <Item>
          <Title>USD</Title>
          {USDBuy && (
            <>
              <p>
                <Span>Buy</Span>
                {USDBuy}
              </p>
              <p>
                <Span>Sale</Span>
                {USDSale}
              </p>
            </>
          )}
        </Item>
        <Item>
          <Title>EUR</Title>
          {EURBuy && (
            <>
              <p>
                <Span>Buy</Span> {EURBuy}
              </p>
              <p>
                <Span>Sale</Span>
                {EURSale}
              </p>
            </>
          )}
        </Item>
      </List>
    </Container>
  );
};
