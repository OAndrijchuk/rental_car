import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
`;
export const ModalContainer = styled.div`
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 98vh;
  border-radius: 24px;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #3470ff;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #191266 0%, #0b44cd 100%);

    border-radius: 4px;
  }
`;
