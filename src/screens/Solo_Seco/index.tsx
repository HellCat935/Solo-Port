import {
  HomeContainer,
  Title,
  SetaContainer,
  ImagemFloresta,
  FundoExplorar,
  Texto,
  SoloImagem,
} from './styles'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import Floresta from '../../assets/floresta.png'
import Solo from '../../assets/solo-erosao-seco.png'

export function Seco() {
  const navigation = useNavigation()

  const Menu = () => {
    navigation.navigate('menu')
  }
  return (
    <HomeContainer>
      <Title>Solo seco</Title>
      <SetaContainer onPress={Menu}>
        <Icon name="arrowleft" size={25} />
      </SetaContainer>
      <ImagemFloresta source={Floresta} />
      <FundoExplorar>
        <Texto>
          Um solo seco é aquele que não retém água por muito tempo, seja por
          causa do clima da região ou por causa da composição do solo. Para
          identificar um solo seco, basta observar a aparência da terra: se ela
          estiver rachada e sem umidade aparente, é provável que seja um solo
          seco.
        </Texto>
        <Texto>
          A irrigação é essencial para manter as plantas saudáveis em solos
          secos. Uma técnica eficiente é a irrigação por gotejamento, que
          permite uma distribuição uniforme da água no solo. Outra opção é o uso
          de mangueiras porosas, que liberam água lentamente e evitam o
          desperdício.
        </Texto>
        <SoloImagem source={Solo} />
      </FundoExplorar>
    </HomeContainer>
  )
}
