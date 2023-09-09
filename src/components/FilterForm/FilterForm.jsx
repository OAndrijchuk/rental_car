import React, { useEffect } from 'react';
import * as yup from 'yup';
import {
  ErrMassage,
  FieldContainer,
  FildHelpCont,
  FormStyled,
  InputFrom,
  InputPrefix,
  InputTo,
  Lable,
  SubmitBtn,
} from './FilterForm.styled';
import { Formik } from 'formik';
import SelectBrand from 'components/SelectBrand/SelectBrand';
import SelectMaxPrice from 'components/SelectMaxPrice/SelectMaxPrice';
import { useDispatch, useSelector } from 'react-redux';
import { advertsSelector } from 'redux/adverts/selectors';
import {
  changeDolar,
  mileageBlock,
  mileageFormat,
  mileageReformat,
} from 'helpers/helpers_func';
import { filterAllSelector } from 'redux/filteredAdverts/selectors';
import {
  clearFilter,
  setFilteredAdverts,
  setIsFiltered,
  setMaxMileage,
  setMinMileage,
} from 'redux/filteredAdverts/filteredAdvertsSlice';
import { resetPagination } from 'redux/paginatonSlice/paginatonSlice';

const validationSchema = yup.object().shape({
  minMileage: yup
    .string()
    .max(7, '*To mutch mileage!')
    .matches(/^[+]?\d+(,\d+)?$/, '*Invalid format!'),
  maxMileage: yup
    .string()
    .max(7, '*To mutch mileage!')
    .matches(/^[+]?\d+(,\d+)?$/, '*Invalid format!'),
});

const FilterForm = ({ clearList }) => {
  const dispatch = useDispatch();
  const adverts = useSelector(advertsSelector);
  const { carBrand, maxPrice } = useSelector(filterAllSelector);

  useEffect(
    () => () => {
      dispatch(setMinMileage(0));
      dispatch(setMaxMileage(0));
    },
    [dispatch]
  );
  const handleSubmit = values => {
    const filteredParams = {
      maxMileage: mileageReformat(values.maxMileage),
      minMileage: mileageReformat(values.minMileage),
    };

    let filteredAdverts = [...adverts];
    if (carBrand) {
      filteredAdverts = filteredAdverts.filter(el => el.make === carBrand);
    }
    if (maxPrice) {
      filteredAdverts = filteredAdverts.filter(
        el => Number(changeDolar(el.rentalPrice)) <= maxPrice
      );
    }
    if (filteredParams.maxMileage || filteredParams.minMileage) {
      let max = filteredParams.maxMileage;
      let min = filteredParams.minMileage;
      if (!max) {
        max = 999999;
      }
      if (!min) {
        min = 0;
      }
      filteredAdverts = filteredAdverts.filter(
        el => el.mileage <= max && el.mileage >= min
      );
    }

    dispatch(resetPagination());
    if (carBrand || maxPrice || values.maxMileage || values.minMileage) {
      clearList([]);
      dispatch(setFilteredAdverts(filteredAdverts));
      dispatch(setIsFiltered());
    } else {
      dispatch(clearFilter());
      dispatch(resetPagination());
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      initialValues={{
        carBrand: '',
        maxPrice: '',
        maxMileage: '',
        minMileage: '',
      }}
    >
      {({ handleChange, values, handleReset }) => (
        <FormStyled>
          <SelectBrand />
          <SelectMaxPrice />
          <FieldContainer>
            <Lable htmlFor="minMileage">Car mileage / km</Lable>
            <FildHelpCont>
              <InputPrefix>From</InputPrefix>
              <InputFrom
                type="text"
                id="minMileage"
                name="minMileage"
                value={mileageFormat(values.minMileage)}
                onChange={event => {
                  mileageBlock(event, handleChange);
                  dispatch(setMinMileage(mileageReformat(event.target.value)));
                }}
              />

              <ErrMassage component="p" name="minMileage" />
            </FildHelpCont>
            <FildHelpCont>
              <InputPrefix>To</InputPrefix>
              <InputTo
                type="text"
                id="maxMileage"
                name="maxMileage"
                value={mileageFormat(values.maxMileage)}
                onChange={event => {
                  dispatch(setMaxMileage(mileageReformat(event.target.value)));
                  mileageBlock(event, handleChange);
                }}
              />
              <ErrMassage component="p" name="maxMileage" />
            </FildHelpCont>
          </FieldContainer>
          <SubmitBtn type="submit">Search</SubmitBtn>
        </FormStyled>
      )}
    </Formik>
  );
};

export default FilterForm;
