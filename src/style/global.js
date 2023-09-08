import styled from 'styled-components';

export const Button = styled.button`
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
  &:hover {
    background-color: #0b44cd;
  }
`;
export const GlobalContainer = styled.div`
  margin: 0 auto;
  padding: 0 15px;
`;
