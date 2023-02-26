import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px 32px 80px;
  font-size: 18px;
  margin:auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
 
`;

export const Article = styled.article`
  border-radius: 4px;
  border: 1px solid rgb(117, 110, 110);
  margin-right: 15px;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.img`
  max-width: 300px;
`;

export const Link = styled.a`
  text-decoration: none;
  border-radius: 4px;
  background: turquoise;
  color: black;
  padding: 10px 25px;
  margin-top: 10px;
  transition: scale 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98),
  color 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  :hover{
scale: 1.1;
color: rgb(237, 78, 34);
  }
`;
