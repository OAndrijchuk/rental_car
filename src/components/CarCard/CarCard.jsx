import { SpriteSVG } from 'pictures/SVG/SpriteSVG';
import React from 'react';
import {
  CardContainer,
  DetailsBtn,
  HeartBtn,
  Img,
  ImportentInfo,
  Info,
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

const CarCard = ({ carInfo }) => {
  const {
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
            <span>{make}&#32;</span>
            <span className="model">{model}</span>
            <span>,&#32;{year}</span>
          </span>
          <span>{rentalPrice}</span>
        </ImportentInfo>
        <Info>
          <span>{newAdress[1]}</span>
          <span>{newAdress[2]}</span>
          <span>{rentalCompany}</span>
          <span>{type}</span>
          <span>{model}</span>
          <span>{id}</span>
          <span>{functionalities[0]}</span>
        </Info>
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
// {
//         "id": 9582,
//         "year": 2008,
//         "make": "Buick",
//         "model": "Enclave",
//         "type": "SUV",
//         "img": "https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/buick_enclave.jpg",
//         "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
//         "fuelConsumption": "10.5",
//         "engineSize": "3.6L V6",
//         "accessories": [
//             "Leather seats",
//             "Panoramic sunroof",
//             "Premium audio system"
//         ],
//         "functionalities": [
//             "Power liftgate",
//             "Remote start",
//             "Blind-spot monitoring"
//         ],
//         "rentalPrice": "$40",
//         "rentalCompany": "Luxury Car Rentals",
//         "address": "123 Example Street, Kiev, Ukraine",
//         "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
//         "mileage": 5858
//     },
