import { Header } from 'components/Header/Header';
import { Container } from './App.styled';
import { Converter } from 'components/Converter/Converter';
import { ReverseConverter } from 'components/ReverseConverter/ReverseConverter';
import { Advertising } from 'components/Advertising/Advertising';

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Converter />
        <ReverseConverter />
      </Container>
       <Advertising />
    </>
  );
};
