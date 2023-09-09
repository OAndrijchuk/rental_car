import { ImportentInfo, Info } from 'components/CarCard/CarCard.styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { carDetailsSelector } from 'redux/carDetails/selectors';
import {
  BlockName,
  CloseBtn,
  Container,
  DescText,
  Img,
  RentalBlockInfo,
  RentalBlockName,
  RentalCarBtn,
} from './CarDetails.styled';
import { SpriteSVG } from 'pictures/SVG/SpriteSVG';
import {
  changeDolar,
  combineInfoProperty,
  mileageFormat,
} from 'helpers/helpers_func';
import { closeModal } from 'redux/carDetails/carDetailsSlice';

const CarDetails = () => {
  const carInfo = useSelector(carDetailsSelector);
  const dispatch = useDispatch();

  if (!Object.keys(carInfo).length) {
    return;
  }
  const {
    img,
    make,
    id,
    year,
    model,
    type,
    rentalPrice,
    fuelConsumption,
    address,
    description,
    engineSize,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
  } = carInfo;

  const newRentalConditions = rentalConditions.split('\n');
  const newAdress = address.split(',');

  const groupWiev = arr => {
    return arr.map((el, index) => {
      if (el.includes(':')) {
        const newEl = el.split(':');
        return (
          <span key={index}>
            {newEl[0]}:<span>{newEl[1]}</span>
          </span>
        );
      }
      return <span key={index}>{el}</span>;
    });
  };

  return (
    <Container>
      <Img
        src={
          img ? img : 'https://www.carhuddle.com/images/default/car-default.jpg'
        }
        alt={make}
      />
      <CloseBtn onClick={() => dispatch(closeModal())}>
        <SpriteSVG name={'close'} />
      </CloseBtn>
      <ImportentInfo>
        <span>
          <span>{make}&#32;</span>
          <span className="model">{model}</span>
          <span>,&#32;{year}</span>
        </span>
      </ImportentInfo>
      <Info>
        <p>
          <span>{newAdress[1]}</span>
          <span>{newAdress[2]}</span>
          <span>Id: {id}</span>
          <span>Year: {year}</span>
          <span>Type: {type}</span>
        </p>
        <p>
          <span>Fuel Consumption: {fuelConsumption}</span>
          <span>Engine Size: {engineSize}</span>
        </p>
      </Info>
      <DescText>{description}</DescText>
      <BlockName>Accessories and functionalities:</BlockName>
      <Info>
        <p>{combineInfoProperty(...accessories)}</p>
        <p>{combineInfoProperty(...functionalities)}</p>
      </Info>
      <RentalBlockName>Rental Conditions:</RentalBlockName>
      <RentalBlockInfo>
        {groupWiev(newRentalConditions)}
        <span>
          Mileage: <span> {mileageFormat(mileage)}</span>
        </span>
        <span>
          Price: <span> {changeDolar(rentalPrice) + '$'}</span>
        </span>
      </RentalBlockInfo>
      <RentalCarBtn href="tel:+380730000000">Rental car</RentalCarBtn>
    </Container>
  );
};

export default CarDetails;
