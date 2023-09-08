import CarCard from 'components/CarCard/CarCard';
import { Ul } from 'pages/Catalog/Catalog.styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { favoritesAdvertsSelector } from 'redux/adverts/selectors';
import { GlobalContainer } from 'style/global';
import { EmtyListTitle } from './Favorites.styled';

function Favorites() {
  const favoritesAdverts = useSelector(favoritesAdvertsSelector);
  return (
    <section>
      <GlobalContainer>
        {favoritesAdverts.length ? (
          <Ul>
            {favoritesAdverts.map(car => (
              <CarCard carInfo={car} key={car.id} />
            ))}
          </Ul>
        ) : (
          <EmtyListTitle>
            Here you will see cars that you liked, but you haven't selected any
            yet. Choose the cars you like and come back.
          </EmtyListTitle>
        )}
      </GlobalContainer>
    </section>
  );
}

export default Favorites;
