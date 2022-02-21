import { useContext } from 'react'
import { Container } from "./styles"
import IncomeImg from '../../assets/entrada.svg'
import OutcomeImg from '../../assets/saida.svg'
import TotalImg from '../../assets/total.svg'
import { TransactionContext } from '../../TransactionContext'

export const Summary = () => {

  const transactions = useContext(TransactionContext)


  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="Entradas" />
        </header>
        <strong>R$: 1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={OutcomeImg} alt="Saidas" />
        </header>
        <strong>- R$: 1000,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="Total" />
        </header>
        <strong>R$: 5000,00</strong>
      </div>
    </Container>
  )
}