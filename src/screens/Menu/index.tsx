import {
  BannerFundo,
  Buttons,
  FundoExplorar,
  HomeContainer,
  PlantaIcon,
  TextInButton,
  TextoBanner,
  TituloBanner,
} from './styles'
import Planta from '../../assets/planta_icon.png'
import Seta from '../../assets/seta.svg'
import { useNavigation } from '@react-navigation/native'

export function Menu() {
  const navigation = useNavigation()

  const Nitrogenio = () => {
    navigation.navigate('npk')
  }

  const alerta = () => {
    alert('Em breve')
  }
  return (
    <HomeContainer>
      <BannerFundo>
        <TituloBanner>Menu principal</TituloBanner>
        <TextoBanner>Seja bem vindo ao</TextoBanner>
        <TextoBanner>Solo-Port!</TextoBanner>
        <PlantaIcon source={Planta} />
      </BannerFundo>
      <FundoExplorar>
        <Buttons onPress={alerta}>
          <TextInButton>Medição do solo</TextInButton>
          <Seta />
        </Buttons>
        <Buttons onPress={Nitrogenio}>
          <TextInButton>Solo pobre em NPK</TextInButton>
          <Seta />
        </Buttons>
        <Buttons>
          <TextInButton>Solo Seco</TextInButton>
          <Seta />
        </Buttons>
        <Buttons>
          <TextInButton>Temperatura do solo</TextInButton>
          <Seta />
        </Buttons>
      </FundoExplorar>
    </HomeContainer>
  )
}
