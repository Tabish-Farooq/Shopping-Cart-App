import { View,Image, Text, StyleSheet, Touchable, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import mangoImage from '../assets/mango.jpg'
import appleImage from '../assets/apple.jpg'
import bananaImage from '../assets/banana.jpg'
import guavaImage from '../assets/guava.jpg'
import papayaImage from '../assets/papapya.jpg'
import grapesImage from '../assets/grapes.jpg'
import axios from 'axios'



const Body = () => {

  const [products,setProducts] = useState([]);

  const fetchProducts = async()=>{
    try{
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data)

    }
    catch(error)
    {
      console.error("Error",error)
    }
  };

  useEffect(()=>{
     fetchProducts();
  },[])

  const data = [
    {id:'1',image: mangoImage , rupess:'₹100/Kg'},
    {id:'2',image: appleImage , rupess:'₹200/Kg'},
    {id:'3',image: guavaImage , rupess:'₹80/Kg'},
    {id:'4',image: papayaImage , rupess:'₹50/Kg'},
    {id:'5',image: bananaImage , rupess:'₹60/Kg'},
    {id:'6',image: grapesImage , rupess:'₹60/Kg'},
    
  ]

  const EachItem = ({item})=>{
    return(
      <View style={Styles.parentContainer}>
      <View style={Styles.childContainer}>
      <Image  style={Styles.image}source={{ uri: item.image }}/>
      <Text style={{color:'black',fontWeight:'bold' ,fontSize:18}}>₹{Math.floor(item.price)}</Text>
      <TouchableOpacity style={Styles.addToCartBtn}>
        <Text style={Styles.btnText}>Add to cart</Text>
      </TouchableOpacity>
      </View>
    </View>
    )
  }
  return (
    <FlatList
    data={products}
    key={2}
    numColumns={2}
    keyExtractor={(item)=>item.id.toString()}
    renderItem={EachItem}
    />
  )
}

const Styles = StyleSheet.create({
  parentContainer:{
   width:165,
   paddingTop:20,
   borderRadius:15,
   alignItems:'center',
   marginLeft:10,
   height:250,
   marginTop:20,
   backgroundColor:'white',
   elevation:5
  },
  childContainer:{
     position:'relative',
    
  },
  
  addToCartBtn:{
   backgroundColor:'#1FC71F',
   width:100,
   height:30,
   position:'absolute',
   top:180,
   elevation:2,
   justifyContent:'center',
   alignItems:'center',
   left:50,
   borderRadius:5,
  },
  btnText:{
    color:'white',
    fontSize:16,
    fontWeight:'600',
  },
    image: {
    width: 150,
    height: 150,
    resizeMode: 'contain', 
    borderRadius: 10,
  },
})

export default Body