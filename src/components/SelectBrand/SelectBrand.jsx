import {
  BrandSelectStyled,
  FieldContainer,
  Lable,
} from 'components/FilterForm/FilterForm.styled';
import { createSelectOptions, makeUniq } from 'helpers/helpers_func';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { advertsSelector } from 'redux/adverts/selectors';
import { setCarBrand } from 'redux/filteredAdverts/filteredAdvertsSlice';
import { filterAllSelector } from 'redux/filteredAdverts/selectors';

const SelectBrand = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(advertsSelector);
  const { carBrand } = useSelector(filterAllSelector);
  useEffect(() => () => dispatch(setCarBrand('')), [dispatch]);

  const values = {
    value: carBrand,
    label: !carBrand ? 'Enter the text' : carBrand,
  };
  const carBrands = makeUniq(adverts.map(el => el.make));
  const allOptions = createSelectOptions(carBrands);
  allOptions.unshift({
    value: '',
    label: 'All',
  });

  return (
    <FieldContainer>
      <Lable htmlFor="brandSelect">Car brand</Lable>
      <BrandSelectStyled
        id="brandSelect"
        placeholder="Enter the text"
        options={allOptions}
        value={values}
        onChange={e => dispatch(setCarBrand(e.value))}
      />
    </FieldContainer>
  );
};

export default SelectBrand;
