import React from 'react';
import {
  Container,
  HeroBtnStyled,
  SubContStyled,
  TitleStyled,
} from './Home.styled';

function Home() {
  return (
    <Container>
      <SubContStyled>
        <TitleStyled>Welcome to our platform!</TitleStyled>
        <h2>Discover the perfect vehicle for your journey with us.</h2>
        <div>
          <p>
            Explore our diverse selection of top-notch rental cars, designed to
            make your travels extraordinary. Our mission is to ensure your car
            rental experience is convenient and safe.
          </p>
          <p>
            Browse our catalog, find the ideal car, and get ready for an
            unforgettable adventure. We're here to make your car rental choice
            simple and enjoyable.
          </p>
        </div>

        <HeroBtnStyled to="/catalog">Reserve car now! &#10143;</HeroBtnStyled>
      </SubContStyled>
    </Container>
  );
}

export default Home;
