import styled from 'styled-components';

export const Button = styled.button`
  color: #fff;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 1.43; /* 142.857% */
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme }) => theme.colors.colorBtn};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 50px;
  transition: background-color 250ms ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;
export const GlobalContainer = styled.div`
  margin: 0 auto;
  padding: 0 15px;
`;
