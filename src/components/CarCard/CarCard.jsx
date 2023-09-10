import { SpriteSVG } from 'pictures/SVG/SpriteSVG';
import React from 'react';
import {
  CardContainer,
  CardInfo,
  DetailsBtn,
  HeartBtn,
  Img,
  ImportentInfo,
  Li,
} from './CarCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { favoritesAdvertsSelector } from 'redux/adverts/selectors';
import {
  addToFavoritesAdverts,
  removeFromFavoritesAdverts,
} from 'redux/adverts/advertsSlice';
import { fetchCarDetails } from 'redux/carDetails/operations';
import { modalOpen } from 'redux/carDetails/carDetailsSlice';
import { combineInfoProperty } from 'helpers/helpers_func';

const CarCard = ({ carInfo }) => {
  let {
    img,
    make,
    id,
    year,
    model,
    type,
    rentalPrice,
    address,
    rentalCompany,
    functionalities,
  } = carInfo;

  const dispatch = useDispatch();
  const favoritesAdverts = useSelector(favoritesAdvertsSelector);

  const isFavorit = favoritesAdverts.find(el => el.id === id);
  const newAdress = address.split(',');

  const toggleFavorites = () => {
    if (isFavorit) {
      dispatch(removeFromFavoritesAdverts(carInfo));
    } else {
      dispatch(addToFavoritesAdverts(carInfo));
    }
  };

  const createFirstLine = str => {
    if (str.length <= 45) {
      return (str += ' | Premium');
    } else {
      return str;
    }
  };

  const createSecondLine = (str, arr) => {
    const elemMaxLengs = 46 - str.length;
    const text = arr.find(e => e.length <= elemMaxLengs);
    if (text) {
      return (str += ` | ${text}`);
    } else {
      return str;
    }
  };

  const firstLine = createFirstLine(
    combineInfoProperty(newAdress[1], newAdress[2], rentalCompany)
  );

  const secondLine = createSecondLine(
    combineInfoProperty(type, model, id),
    functionalities
  );

  if (
    make.length + model.length + year.toString().length > 20 ||
    make.length > 5 ||
    model.length > 7
  ) {
    model = null;
  }

  return (
    <Li>
      <HeartBtn type="button" $isFavorit={isFavorit} onClick={toggleFavorites}>
        <SpriteSVG name="heart" />
      </HeartBtn>
      <CardContainer>
        <Img
          src={
            img
              ? img
              : 'https://www.carhuddle.com/images/default/car-default.jpg'
          }
          alt={make}
          width="274"
          height="268"
        />

        <ImportentInfo>
          <span>
            <span>
              {make}
              {model && ' '}
            </span>
            <span className="model">{model}</span>
            <span>,&#32;{year}</span>
          </span>
          <span>{rentalPrice}</span>
        </ImportentInfo>
        <CardInfo>
          <p>{firstLine}</p>
          <p>{secondLine}</p>
        </CardInfo>
      </CardContainer>
      <DetailsBtn
        type="button"
        onClick={() => {
          dispatch(fetchCarDetails(id));
          dispatch(modalOpen());
        }}
      >
        Learn more
      </DetailsBtn>
    </Li>
  );
};

export default CarCard;
