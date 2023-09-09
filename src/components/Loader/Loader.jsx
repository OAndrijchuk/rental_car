import Modal from 'components/Modal/Modal';
import React from 'react';
import { Puff } from 'react-loader-spinner';

const Loader = () => {
  return (
    <>
      <Modal>
        <Puff
          height="80"
          width="80"
          radius={1}
          color="#3470ff"
          visible={true}
        />
      </Modal>
    </>
  );
};

export default Loader;
