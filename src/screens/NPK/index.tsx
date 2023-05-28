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
import Solo from '../../assets/solo.png'

export function Nitrogenio() {
  const navigation = useNavigation()

  const Menu = () => {
    navigation.navigate('menu')
  }
  return (
    <HomeContainer>
      <Title>Solo pobre em NPK</Title>
      <SetaContainer onPress={Menu}>
        <Icon name="arrowleft" size={25} />
      </SetaContainer>
      <ImagemFloresta source={Floresta} />
      <FundoExplorar>
        <Texto>
          NPK é composto de três elementos essenciais para o desenvolvimento de
          toda a cultura: o nitrogênio, o fósforo e o potássio:
        </Texto>
        <Texto>
          Para a correção de um solo pobre nesses nutientes, faz necessário a
          aplicação de um Adubo NPK. Atualmente no mercado existem 2 tipos:
        </Texto>
        <Texto>-o granulado</Texto>
        <Texto>-o líquido.</Texto>
        <Texto>
          Adubo NPK líquido: O adubo NPK líquido é absorvido com mais rapidez
          pelas plantas. Assim, é mais utilizado em casos nos quais o solo é
          extremamente pobre, com grande carência de nutrientes.
        </Texto>
        <Texto>
          Sua aplicação pode ser feita diretamente nas raízes, no próprio solo e
          também nas folhas. Eles apresentam concentração mais baixa que os
          adubos granulados.
        </Texto>
        <Texto>
          Adubo NPK granulado: O adubo NPK granulado tem liberação mais lenta,
          com os grãos no solo que levam mais tempo para se dissolverem e serem
          incorporados à terra.
        </Texto>
        <SoloImagem source={Solo} />
      </FundoExplorar>
    </HomeContainer>
  )
}
