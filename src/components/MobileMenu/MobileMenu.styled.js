import styled from 'styled-components';

export const MobileMenuCont = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 70vh;
  background-color: #fff;
  & .active {
    text-decoration: underline;
  }
  @media screen and (min-width: 608px) {
    display: none;
  }
`;
