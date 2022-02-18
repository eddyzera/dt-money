import Modal from 'react-modal'
import CloseImg from '../../assets/close.svg'
import { Container } from '../NewTransactionModal/styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}

export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={CloseImg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar informação</h2>
        <input
          type="text"
          placeholder="Titulo"
        />
        <input
          type="number"
          placeholder="Valor"
        />
        <input
          type="text"
          placeholder="Categoria"
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}