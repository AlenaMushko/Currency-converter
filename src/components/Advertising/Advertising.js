import { useState, useEffect } from 'react';
import { GetNews } from 'Api';
import { Article, Container, Img, Link } from './Advertising.styled';

export const Advertising = () => {
  const [news, seNews] = useState([]);

  useEffect(() => {
    const FetchNews = async () => {
      try {
        const data = await GetNews();
        seNews(JSON.parse(data).articles);
      } catch (error) {
        console.log(error);
      }
    };
    FetchNews();
  }, []);
  console.log(news);
 

  return (
    <Container>
      {news?.map(({id, title, description, url, urlToImage }) => (
            <Article key={title} >
              <h3>{title}</h3>
              <div>{description}</div>
              <Img src={urlToImage} alt={title} loading="lazy" />
              <Link href={url}  target="_blank" >more</Link>
            </Article>
        ))}
      
</Container>
  );
};


