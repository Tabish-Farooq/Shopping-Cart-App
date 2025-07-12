import { View,StyleSheet, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const HomeScreen = () => {
  return (
    <View style={Styles.container}>
      <Header/>
    </View>
  )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue'
    }
})

export default HomeScreen