import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/carDetails/carDetailsSlice';
import { ModalContainer, ModalOverlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [dispatch]);

  return createPortal(
    <ModalOverlay
      onClick={e => {
        if (e.target === e.currentTarget) {
          dispatch(closeModal());
        }
      }}
    >
      <ModalContainer>{children}</ModalContainer>
    </ModalOverlay>,
    modalRoot
  );
};

export default Modal;
