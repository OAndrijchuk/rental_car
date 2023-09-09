import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 320px;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 15px;
  border-radius: 24px;
  background-color: #fff;
  @media screen and (min-width: 768px) {
    padding: 40px;
    width: 541px;
  }
`;
export const Img = styled.img`
  border-radius: 14px;
  background: #f3f3f2;
  margin-bottom: 14px;
  max-width: 461px;
  max-height: 248px;
`;
export const DescText = styled.p`
  font-family: 'Manrope-Regular';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43; /* 142.857% */
  margin-top: 14px;
  margin-bottom: 24px;
`;
export const BlockName = styled.p`
  font-family: 'Manrope-Medium';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43; /* 142.857% */
`;
export const RentalBlockName = styled(BlockName)`
  margin: 24px 0 8px 0;
`;
export const RentalCarBtn = styled.a`
  display: block;
  color: #fff;
  font-family: 'Manrope-SemiBold';
  font-size: 14px;
  font-style: normal;
  line-height: 1.43; /* 142.857% */
  border-radius: 12px;
  background-color: #3470ff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 50px;
  transition: background-color 250ms ease;
  width: fit-content;
  font-weight: 600;
  margin-top: 31px;
  &:hover {
    background-color: #0b44cd;
  }
`;
export const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  z-index: 1;
  right: 10px;
  top: 10px;
  border-radius: 50%;
  & svg {
    stroke: #121417;
    transition: all 250ms ease;
    &:hover {
      transform: scale(1.1);
      stroke: #0b44cd;
    }
  }
  @media screen and (min-width: 768px) {
    right: 16px;
    top: 16px;
  }
`;
export const RentalBlockInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: #363535;
  & span {
    display: flex;
    padding: 7px 14px;
    font-family: 'Montserrat-Regular';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5; /* 150% */
    letter-spacing: -0.24px;
    border-radius: 35px;
    background: #f9f9f9;
    & span {
      padding: 0;
      color: #3470ff;
      font-weight: 600;
    }
  }
`;