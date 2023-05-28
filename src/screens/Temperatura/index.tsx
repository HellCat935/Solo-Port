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
          A temperatura do solo é extremamente importante para um bom plantio,
          aqui vão algumas dicas para mudar a temperatura do solo ao seu favor:
        </Texto>
        <Texto>
          -Você pode colocar canteiros próximos a paredes e muros. Os tijolos
          vão absorver o calor durante o dia e aquecer as plantas durante a
          noite
        </Texto>
        <Texto>
          -Crie armações para fazer sombra no seu solo, caso queira resfriá-lo
        </Texto>
        <Texto>
          -Para esfriar o solo, você pode adicionar uma cobertura de matéria
          orgânica seca, que dificultará com que o sol incida diretamente no
          solo, diminuindo a retenção de calor
        </Texto>
        <SoloImagem source={Solo} />
      </FundoExplorar>
    </HomeContainer>
  )
}
