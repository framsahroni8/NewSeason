import React, { useEffect, useState } from 'react';
import './ImageMain.scss';
import Contoh from '../../assets/images/banner-2048x1410.jpg';
import { ModalPopUp } from 'components';
import { Button } from 'ui-kit';

const ImageMain: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModalWithDelay, setShowModalWithDelay] = useState(false);
  const [rotasi, setRotasi] = useState(false);
  const [number, setNumber] = useState(20);

  const handleOpenModal = () => {
    setShowModalWithDelay(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowModalWithDelay(false);
  };

  const toggleRotasi = () => {
    setRotasi(!rotasi);
  };

  const handleClickNumber = () => {
    if (number === 20) {
      setNumber(21);
      alert('Happy Birthday and Enjoy it!')
    }
    else if (number === 21){
      setNumber(20);
      alert('Tahan duluu, tunggu tahun depan yaa')
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    if (showModalWithDelay) {
      timeout = setTimeout(() => {
        setIsModalOpen(true);
      }, 3000);
    } else {
      clearTimeout(timeout!);
    }

    return () => {
      clearTimeout(timeout!);
    };
  }, [showModalWithDelay]);

  return (
    <>
      <div className={`imageMainContainer ${rotasi ? 'animasiMuter' : ''}`} onClick={handleOpenModal} >
        <div className='fotoUtama' onClick={toggleRotasi} style={{ transform: `rotate(${rotasi ? 360 : 0}deg)` }}>
          <span className='textChange' onClick={handleClickNumber}>
            {number}
          </span>
        </div>
      </div>
      <div>
        <ModalPopUp isOpen={isModalOpen} onClose={handleCloseModal}>

        </ModalPopUp>
      </div>
    </>
  );
};

export default ImageMain;
