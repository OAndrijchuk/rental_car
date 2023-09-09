import {
  FieldContainer,
  Lable,
  PriceSelectStyled,
} from 'components/FilterForm/FilterForm.styled';
import { createPricesPoints, createSelectOptions } from 'helpers/helpers_func';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { advertsSelector } from 'redux/adverts/selectors';
import { setMaxPrice } from 'redux/filteredAdverts/filteredAdvertsSlice';
import { filterAllSelector } from 'redux/filteredAdverts/selectors';

const SelectMaxPrice = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(advertsSelector);
  const { maxPrice } = useSelector(filterAllSelector);

  useEffect(() => () => dispatch(setMaxPrice(0)), [dispatch]);

  const values = {
    value: maxPrice,
    label: `To ${maxPrice === 0 ? '' : maxPrice} $`,
  };
  const hidenPrice = Math.max(
    ...adverts.map(el => Number(el.rentalPrice.slice(1)))
  );
  const allOptions = createSelectOptions(createPricesPoints(hidenPrice));
  allOptions.unshift({
    value: '',
    label: `-`,
  });

  return (
    <FieldContainer>
      <Lable htmlFor="priceSelect">Price/ 1 hour</Lable>
      <PriceSelectStyled
        id="priceSelect"
        options={allOptions}
        value={values}
        onChange={e => dispatch(setMaxPrice(e.value))}
      />
    </FieldContainer>
  );
};

export default SelectMaxPrice;
