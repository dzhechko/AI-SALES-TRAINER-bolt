import React from 'react';
import { PopupWidget } from 'react-calendly';
import { useModal } from '../../context/ModalContext';

const DemoModal = () => {
  const { closeModal } = useModal();

  return (
    <PopupWidget
      url="https://calendly.com/jechkov-dmitriy/30min"
      rootElement={document.getElementById('root')!}
      text="Schedule a Call with Dmitry"
      textColor="#ffffff"
      color="#4f46e5"
      pageSettings={{
        backgroundColor: 'ffffff',
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: '4f46e5',
      }}
      prefill={{
        email: '',
        firstName: '',
        lastName: '',
        name: '',
      }}
      onModalClose={closeModal}
    />
  );
};

export default DemoModal;