import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import EmptyCartImage from '../assets/shopping.png'

const EmptyCart = () => {
  return (
    <View style={Styles.container}>
      <Image source={EmptyCartImage} 
      style={Styles.emptyCartImage}/>
      <Text style={Styles.headingtxt}>Your Cart is Empty !</Text>
      <Text style={Styles.subHeadingText}>Explore products and shop your favourite items
      </Text>
    </View>
  )
}

const Styles = StyleSheet.create({
    emptyCartImage:{
        width:300,
        height:300,
        resizeMode:'contain',
        marginTop:50
    },
    container:{
        flex:1,
        alignItems:'center'
    },
    headingtxt:{
        marginTop:10,
        fontSize:24,
        fontWeight:'bold'
    },
    subHeadingText:{
        fontSize:24,
        textAlign:'center',
        fontWeight:'300',
        marginTop:10
    }
})

export default EmptyCart