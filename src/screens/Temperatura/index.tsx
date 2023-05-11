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
import Solo from '../../assets/temperatura-solo.png'

export function Temperatura() {
  const navigation = useNavigation()

  const Menu = () => {
    navigation.navigate('menu')
  }
  return (
    <HomeContainer>
      <Title>Temperatura do solo</Title>
      <SetaContainer onPress={Menu}>
        <Icon name="arrowleft" size={25} />
      </SetaContainer>
      <ImagemFloresta source={Floresta} />
      <FundoExplorar>
        <Texto>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          posuere, nisl eu auctor consequat, nunc felis maximus nunc, eu
          tincidunt magna mi sed est. Maecenas sit amet lacus purus.
        </Texto>
        <Texto>
          Nulla luctus at quam eu porta. Pellentesque blandit quam nisi, eu
          cursus felis sollicitudin non. Cras placerat condimentum enim, ut
          imperdiet dolor pharetra non. Phasellus ultricies risus sed nunc
          faucibus scelerisque.
        </Texto>
        <Texto>
          Cras interdum quam eget elit laoreet sagittis. Quisque efficitur, arcu
          commodo varius posuere, metus tortor posuere dolor, ac accumsan arcu
          elit eu tortor.
        </Texto>
        <SoloImagem source={Solo} />
      </FundoExplorar>
    </HomeContainer>
  )
}
