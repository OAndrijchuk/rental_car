import styled from 'styled-components';

export const HeaderCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 80px;
  margin: 0 auto;
  max-width: 290px;

  @media screen and (min-width: 608px) {
    max-width: 578px;
    justify-content: flex-start;
  }
  @media screen and (min-width: 908px) {
    max-width: 878px;
  }
  @media screen and (min-width: 1210px) {
    max-width: 1180px;
  }
`;
export const HeaderStyled = styled.header`
  margin: 0 auto;
  padding: 0 15px;
  border-bottom: 1px solid black;
`;
export const BurgerMenuBtn = styled.button`
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  transition: all 250ms ease;
  &:hover {
    color: ${({ theme }) => theme.colors.hover};
    border: 1px solid ${({ theme }) => theme.colors.hover};
  }
`;
