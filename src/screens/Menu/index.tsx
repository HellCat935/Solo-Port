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

export function Menu() {
  return (
    <HomeContainer>
      <BannerFundo>
        <TituloBanner>Menu principal</TituloBanner>
        <TextoBanner>Seja bem vindo ao</TextoBanner>
        <TextoBanner>Solo-Port!</TextoBanner>
        <PlantaIcon source={Planta} />
      </BannerFundo>
      <FundoExplorar>
        <Buttons>
          <TextInButton>Medição do solo</TextInButton>
          <Seta />
        </Buttons>
        <Buttons>
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
