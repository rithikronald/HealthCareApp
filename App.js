import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './screens/screen1'
import Screen2 from './screens/screen2'
import Screen3 from './screens/screen3'
import Screen4 from './screens/screen4'
import Home from './screens/home'
import HeartRateMonitor from './screens/heartRateMonitor'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} options={{headerShown:false}} />
        <Stack.Screen name="Screen2" component={Screen2} options={{headerShown:false}} />
        <Stack.Screen name="Screen3" component={Screen3} options={{headerShown:false}} />
        <Stack.Screen name="Screen4" component={Screen4} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="HeartRateMonitor" component={HeartRateMonitor} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}









