import CarDetails from 'components/CarDetails/CarDetails';
import Header from 'components/Header/Header';
import Modal from 'components/Modal/Modal';
import React from 'react';
import { Puff } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import {
  isModalLoadingSelector,
  isModalOpenSelector,
} from 'redux/carDetails/selectors';

const Layout = () => {
  const isModalOpen = useSelector(isModalOpenSelector);
  const isModalLoading = useSelector(isModalLoadingSelector);

  return (
    <>
      <Header />
      <Outlet />

      {isModalOpen && (
        <Modal>
          {isModalLoading ? (
            <Puff
              height="80"
              width="80"
              radius={1}
              color="#3470ff"
              visible={true}
            />
          ) : (
            <CarDetails />
          )}
        </Modal>
      )}
    </>
  );
};

export default Layout;
