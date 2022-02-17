import LogoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onClickModal: () => void
}

export const Header = ({ onClickModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="dt money" />
        <button
          type="button"
          onClick={onClickModal}>
            Nova Transação
        </button>
      </Content>
    </Container>
  )
}