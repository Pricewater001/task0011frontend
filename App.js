import ChatScreen from './screens/Chat.js';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
import { Text } from 'react-native';



export default function App() {

  return (
    // <>
    // <Text>Hassan</Text>
    // </>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
