import LogoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="dt money" />
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  )
}