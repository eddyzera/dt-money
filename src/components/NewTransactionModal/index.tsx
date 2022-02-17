import Modal from 'react-modal'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}

export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Cadastrar informação</h2>
    </Modal>
  )
}