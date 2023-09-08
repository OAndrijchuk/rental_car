import React from 'react';
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
  setFilteredAdverts,
  setMaxMileage,
  setMinMileage,
} from 'redux/filteredAdverts/filteredAdvertsSlice';

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

//.moreThan(-1, 'Only possitive value')
const FilterForm = ({ clearList, clearPage }) => {
  const dispatch = useDispatch();
  const adverts = useSelector(advertsSelector);
  const { carBrand, maxPrice, maxMileage, minMileage } =
    useSelector(filterAllSelector);

  const handleSubmit = values => {
    const filteredParams = {
      maxMileage: mileageReformat(values.maxMileage),
      minMileage: mileageReformat(values.minMileage),
    };
    // console.log(mileageReformat(values.maxMileage));

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
        max = Infinity;
      }
      if (!min) {
        min = 0;
      }
      filteredAdverts = filteredAdverts.filter(
        el => el.mileage <= max && el.mileage >= min
      );
    }
    // if (maxMileage || minMileage) {
    //   let max = maxMileage;
    //   let min = minMileage;
    //   if (!max) {
    //     max = Infinity;
    //   }
    //   if (!min) {
    //     min = 0;
    //   }
    //   filteredAdverts = filteredAdverts.filter(
    //     el => el.mileage <= max && el.mileage >= min
    //   );
    // }
    // if (!filteredAdverts) {
    //   filteredAdverts = [];
    // }
    clearList([]);
    clearPage(0);
    dispatch(setFilteredAdverts(filteredAdverts));
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
                // value={mileageFormat(minMileage)}
                // onChange={e => dispatch(setMinMileage(mileageReformat(e.target.value)))}
                value={mileageFormat(values.minMileage)}
                onChange={event => mileageBlock(event, handleChange)}
              />

              <ErrMassage component="p" name="minMileage" />
            </FildHelpCont>
            <FildHelpCont>
              <InputPrefix>To</InputPrefix>
              <InputTo
                type="text"
                id="maxMileage"
                name="maxMileage"
                // value={mileageFormat(maxMileage)}
                // onChange={e => dispatch(setMaxMileage(mileageReformat(e.target.value)))}
                value={mileageFormat(values.maxMileage)}
                onChange={event => mileageBlock(event, handleChange)}
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
