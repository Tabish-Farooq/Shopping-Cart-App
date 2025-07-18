import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const Body = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const EachItem = ({ item }) => (
    <View style={Styles.parentContainer}>
      <View style={Styles.childContainer}>
        <Image style={Styles.image} source={{ uri: item.image }} />
        <Text style={Styles.price}>₹{Math.floor(item.price)}</Text>
        <TouchableOpacity
          style={Styles.addToCartBtn}
          onPress={() => dispatch(addToCart(item))}
        >
          <Text style={Styles.btnText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      renderItem={EachItem}
    />
  );
};

const Styles = StyleSheet.create({
  parentContainer: {
    width: 165,
    paddingTop: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginLeft: 10,
    height: 250,
    marginTop: 20,
    backgroundColor: 'white',
    elevation: 5,
  },
  childContainer: {
    position: 'relative',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  price: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 4,
  },
  addToCartBtn: {
    backgroundColor: '#1FC71F',
    width: 100,
    height: 30,
    position: 'absolute',
    top: 180,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    left: 50,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Body;
