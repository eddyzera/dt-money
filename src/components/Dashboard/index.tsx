import { Summary } from "../Summary"
import { TransactionsTable } from "../TransactionsTable"
import { Container } from "./styles"

export const Dasboard = () => {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}