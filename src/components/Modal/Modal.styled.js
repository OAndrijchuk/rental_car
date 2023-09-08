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
  max-height: 90vh;
  border-radius: 24px;
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #8a8a89;
  }
  &::-webkit-scrollbar-thumb {
    background: lightgray;

    border-radius: 4px;
  }
`;
