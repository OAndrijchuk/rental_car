import { styled } from 'styled-components';
import Select from 'react-select';
import { Button } from 'style/global';
import { ErrorMessage, Field, Form } from 'formik';

export const SelectStyled = styled(Select)`
  position: relative;
  color: ${({ theme }) => theme.colors.colorText};
  z-index: 2;
  font-family: 'Manrope-Medium';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
  width: 290px;
  & .css-1u9des2-indicatorSeparator {
    display: none;
  }
  & .css-13cymwt-control {
    height: 48px;
    border-radius: 14px;
    background: #f7f7fb;
    border: none;
  }
  @media screen and (min-width: 608px) {
    width: 224px;
  }
  @media screen and (min-width: 908px) {
  }
`;
export const BrandSelectStyled = styled(SelectStyled)`
  z-index: 3;
  @media screen and (min-width: 908px) {
    width: 224px;
  }
`;
export const PriceSelectStyled = styled(SelectStyled)`
  @media screen and (min-width: 908px) {
    width: 125px;
  }
`;
export const FormStyled = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 12px;
  justify-content: center;
  margin-bottom: 64px;
  margin: 0 auto;
  max-width: 290px;
  @media screen and (min-width: 608px) {
    max-width: 578px;
    gap: 18px;
  }
  @media screen and (min-width: 908px) {
    max-width: 878px;
  }
  @media screen and (min-width: 1210px) {
    max-width: 1180px;
  }
  &:only-child:not(:last-child) {
  }
`;

export const Lable = styled.label`
  position: absolute;
  top: -8px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  color: #8a8a89;
  font-family: 'Manrope-Medium';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.28; /* 128.571% */
`;
export const ErrMassage = styled(ErrorMessage)`
  position: absolute;
  color: red;
  width: 150%;
  left: 24px;
  bottom: -50%;
`;
export const FildHelpCont = styled.span`
  position: relative;
`;

export const FieldStyled = styled(Field)`
  position: relative;
  color: ${({ theme }) => theme.colors.colorText};
  font-family: 'Manrope-Medium';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
  width: 145px;
  height: 48px;
  border: none;
  outline: none;
  background: #f7f7fb;
  &::before {
    content: '';
    z-index: 100;
    display: block;
    position: absolute;
    color: ${({ theme }) => theme.colors.colorText};
    font-family: 'Manrope-Medium';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.11; /* 111.111% */
    width: 40px;
    height: 30px;
    background-color: red;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
  @media screen and (min-width: 608px) {
    width: 160px;
  }
`;
export const InputFrom = styled(FieldStyled)`
  border-radius: 14px 0 0 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  padding-left: 70px;
`;
export const InputTo = styled(FieldStyled)`
  border-radius: 0px 14px 14px 0px;
  padding-left: 49px;
`;
export const InputPrefix = styled.span`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 24px;
  transform: translate(0, -50%);
  pointer-events: none;
  color: ${({ theme }) => theme.colors.colorText};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.11; /* 111.111% */
`;
export const FieldContainer = styled.div`
  position: relative;
  margin-top: 40px;
  display: flex;
`;
export const SubmitBtn = styled(Button)`
  padding: 14px 44px;
  margin-top: 26px;
`;
