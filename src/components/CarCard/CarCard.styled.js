import { Button } from 'style/global';
import styled from 'styled-components';

export const Li = styled.li`
  position: relative;
  display: flex;
  width: 274px;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
  gap: 28px;
`;
export const CardContainer = styled.div``;
export const HeartBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  & svg {
    fill: ${props => (props.$isFavorit ? '#3470ff' : 'transparent')};
    transition: all 250ms ease;
    &:hover {
      transform: scale(1.1);
      fill: #3470ff;
      path {
        stroke: #3470ff;
      }
    }
  }
  & path {
    stroke: ${props => (props.$isFavorit ? '#3470ff' : '#ffffffcc')};
  }
`;
export const Img = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;
`;
export const ImportentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 8px;
  color: #121417;
  font-family: 'Manrope-Medium';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  & .model {
    color: #3470ff;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  color: rgba(18, 20, 23, 0.5);
  font-family: 'Manrope-Regular';
  font-size: 12px;
  font-style: normal;
  line-height: 1.5; /* 150% */
  & span:not(:last-child) {
    display: flex;
    &::after {
      content: '';
      display: block;
      width: 1px;
      height: 16px;
      margin-left: 6px;
      margin-right: 6px;
      background-color: rgba(18, 20, 23, 0.1);
    }
  }
`;
export const DetailsBtn = styled(Button)`
  width: 100%;
`;
