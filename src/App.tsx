import React, { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import {GlobalStyle} from './styles/globalStyle'

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
    <>
      <GlobalStyle />
      <Header 
        onClickModal={handleOpenNewTransactionModal}
      />
      <Dashboard />
      <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar informação</h2>
      </Modal>
    </>
  )
}