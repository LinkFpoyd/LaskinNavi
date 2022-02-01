import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from'@react-navigation/native-stack';
import Laskin from'./Laskin';
import Historia from'./Historia';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Laskin">
          <Stack.Screen name="Laskin"component={Laskin} />
          <Stack.Screen name="Historia"component={Historia} />
        </Stack.Navigator>
      </NavigationContainer>
      
  )

}