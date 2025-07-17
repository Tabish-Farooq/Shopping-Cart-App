import React from 'react';
import { Provider } from 'react-redux';
import { store } from './android/src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './android/src/screens/HomeScreen';
import CartScreen from './android/src/screens/CartScreen';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar backgroundColor={'#4169E1'} />
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen 
          name='CartScreen' 
          component={CartScreen} 
          options={{
            headerStyle: { backgroundColor: '#4169E1' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: '400' }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
