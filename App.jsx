import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from './android/src/screens/HomeScreen'

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor={'#4169E1'}/>
      <HomeScreen/>
    </View>
  )
}

export default App