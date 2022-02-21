import React, { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import {GlobalStyle} from './styles/globalStyle'
import { TransactionContext } from './TransactionContext';

Modal.setAppElement('#root')

export const App: React.FC = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState<boolean>(false)

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionContext.Provider value={[]}>
      <GlobalStyle />
      <Header 
        onClickModal={handleOpenNewTransactionModal}
      />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal} 
      />
    </TransactionContext.Provider>
  )
}