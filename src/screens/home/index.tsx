import { HomeContainer, Title, Imagem, Buttons, TextInButton } from './styles'
import Logo from '../../assets/Arvore_logo.png'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const navigation = useNavigation()

  const Menu = () => {
    navigation.navigate('menu')
  }
  return (
    <HomeContainer>
      <Title>Solo-Port</Title>
      <Imagem source={Logo} />
      <Buttons onPress={Menu}>
        <TextInButton>Clique aqui</TextInButton>
      </Buttons>
    </HomeContainer>
  )
}
