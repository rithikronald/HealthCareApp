import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import initialScreen from './screens/initialScreen'
import onBoardingScreen from './screens/onBoardingScreen'
import subscriptionScreen from './screens/subscriptionScreen'
import fillDetailsScreen from './screens/fillDetailsScreen'
import Home from './screens/home'
import HeartRateMonitor from './screens/heartRateMonitor'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="initialScreen" component={initialScreen} options={{headerShown:false}} />
        <Stack.Screen name="onBoardingScreen" component={onBoardingScreen} options={{headerShown:false}} />
        <Stack.Screen name="subscriptionScreen" component={subscriptionScreen} options={{headerShown:false}} />
        <Stack.Screen name="fillDetailsScreen" component={fillDetailsScreen} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="HeartRateMonitor" component={HeartRateMonitor} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}









