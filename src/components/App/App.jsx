import { Header } from 'components/Header/Header';
import { Container } from './App.styled';
import { Converter } from 'components/Converter/Converter';
import { ReverseConverter } from 'components/ReverseConverter/ReverseConverter';

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Converter />
        <ReverseConverter />
      </Container>
    </>
  );
};
