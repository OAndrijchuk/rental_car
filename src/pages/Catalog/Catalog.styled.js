import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* width: fit-content; */
  margin: 50px auto;
  gap: 50px 28px;
  width: 274px;

  @media screen and (min-width: 608px) {
    width: 578px;
  }
  @media screen and (min-width: 908px) {
    width: 878px;
  }
  @media screen and (min-width: 1210px) {
    width: 1180px;
  }
`;
export const LoadMoreBtn = styled.button`
  display: block;
  margin: 50px auto;
  color: #3470ff;
  padding: 10px;
  font-family: 'Manrope-Medium';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  text-decoration-line: underline;
  transition: all 250ms ease;
  &:hover {
    transform: scale(1.2);
    color: #0b44cd;
  }
`;
