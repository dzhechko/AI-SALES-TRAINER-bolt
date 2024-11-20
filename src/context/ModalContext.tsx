import React, { createContext, useContext, useState } from 'react';
import DemoModal from '../components/modals/DemoModal';
import RegisterModal from '../components/modals/RegisterModal';

type ModalType = 'demo' | 'register' | null;

interface ModalContextType {
  openModal: (type: ModalType) => void;
  closeModal: () => void;
  modalType: ModalType;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modalType, setModalType] = useState<ModalType>(null);

  const openModal = (type: ModalType) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <ModalContext.Provider value={{ modalType, openModal, closeModal }}>
      {children}
      {modalType === 'demo' && <DemoModal />}
      {modalType === 'register' && <RegisterModal />}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};