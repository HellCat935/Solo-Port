import { HomeContainer, Title, Imagem, Buttons, TextInButton } from './styles'
import Logo from '../../assets/Arvore_logo.png'

export function Home() {
  return (
    <HomeContainer>
      <Title>Solo-Port</Title>
      <Imagem source={Logo} />
      <Buttons>
        <TextInButton>Clique aqui</TextInButton>
      </Buttons>
    </HomeContainer>
  )
}
