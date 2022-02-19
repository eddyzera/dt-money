import { useState } from 'react'
import Modal from 'react-modal'
import CloseImg from '../../assets/close.svg'
import IncomeImg from '../../assets/entrada.svg'
import OutcomeImg from '../../assets/saida.svg'
import { Container, TransactionTypeContainer, RadioBox } from '../NewTransactionModal/styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}

export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
  const [type, setType] = useState<string>('deposit')
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
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={IncomeImg} alt="button de entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={OutcomeImg} alt="button de saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
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