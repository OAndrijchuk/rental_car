import styled from 'styled-components';
import bg from '../../pictures/home_bg.jpg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-image: url(${bg});
  width: 100vw;
  min-height: calc(100vh - 80px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
`;
export const SubContStyled = styled.div`
  width: 320px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  line-height: 1.2;
  p {
    margin-bottom: 15px;
    font-weight: 500;
    text-indent: 40px;
    line-height: 1.5;
    color: #8a8a89;
  }

  @media screen and (min-width: 608px) {
    width: 70%;
    padding: 20px 35px;
    gap: 30px;
    margin: 0;
  }
  @media screen and (min-width: 940px) {
    width: 60%;
    padding: 40px 50px;
  }
`;
export const TitleStyled = styled.h1`
  font-size: calc((1vh + 1vw) * 3);
`;
export const HeroBtnStyled = styled(Link)`
  font-size: calc((1vh + 1vw) * 1.4);
  text-align: center;
  width: calc((1vh + 1vw) * 16);
  color: #3470ff;
  padding: 15px;
  font-weight: 500;
  text-decoration: underline;
  transition: color 250ms ease;
  &:hover {
    color: #0b44cd;
  }
  border-radius: 12px;
`;
