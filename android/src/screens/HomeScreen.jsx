import { View,StyleSheet, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'

const HomeScreen = () => {
  return (
    <View style={Styles.container}>
      <Header/>
      <Body/>
    </View>
  )
}

const Styles = StyleSheet.create({
  container:{
    flex:1,
    
  }
})


export default HomeScreen