import { Container } from "./styles"

export const TransactionsTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categorias</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento web site</td>
            <td className="deposit">R$: 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$: 1000,00</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}