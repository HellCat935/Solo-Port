import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/home'
import { Menu } from '../screens/Menu'
import { Nitrogenio } from '../screens/NPK'
import { Seco } from '../screens/Solo_Seco'
import { Temperatura } from '../screens/Temperatura'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="menu" component={Menu} />
      <Screen name="npk" component={Nitrogenio} />
      <Screen name="seco" component={Seco} />
      <Screen name="temperatura" component={Temperatura} />
    </Navigator>
  )
}
