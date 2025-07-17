import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { increment, decrement, removeFromCart } from '../redux/cartSlice';
import EmptyCart from './EmptyCart';

const CartItems = () => {
  const itemsObj = useSelector(state => state.cart.items);
  const entries = Object.values(itemsObj); // [{ product, quantity }, …]
  const dispatch = useDispatch();

  const RenderItems = ({ item }) => {
    const { product, quantity } = item;
    return (
      <View style={Styles.container}>
        <View style={Styles.eachItem}>
          <View style={Styles.innerContainer}>
            <Image source={{ uri: product.image }} style={Styles.img} />
            <Text style={Styles.itemNameAndRupees}>
              {product.title.split(' ').slice(0,2).join(' ')}{'\n'}₹{Math.floor(product.price)}
            </Text>

            <View style={Styles.subInnerContainer}>
              <TouchableOpacity
                style={Styles.icon}
                onPress={() => dispatch(removeFromCart(product.id))}
              >
                <MaterialIcons name="delete" color="#000" size={30} />
              </TouchableOpacity>

              <View style={Styles.btnAddMinus}>
                <TouchableOpacity onPress={() => dispatch(decrement(product.id))}>
                  <Entypo name="minus" color="white" size={24} />
                </TouchableOpacity>

                <Text style={Styles.counterText}>{quantity}</Text>

                <TouchableOpacity onPress={() => dispatch(increment(product.id))}>
                  <Entypo name="plus" color="white" size={24} />
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={entries}
      keyExtractor={(_, idx) => idx.toString()}
      renderItem={RenderItems}
      ListEmptyComponent={
        <View style={{ flex:1, justifyContent:'center', alignItems:'center', padding:20 }}>
          <EmptyCart/>
        </View>
      }
    />
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  eachItem: {
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 10,
    margin: 10,
    height: 120
  },
  img: {
    width: 100,
    height: 100,
    margin: 10,
    resizeMode:'contain'
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemNameAndRupees: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1
  },
  subInnerContainer: {
    position: 'relative',
    flex: 1,
  },
  icon: {
    position: 'absolute',
    right: 2,
    top: -50
  },
  btnAddMinus: {
    position: 'absolute',
    top: 10,
    right: 5,
    width: 80,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#1FC71F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5
  },
  counterText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600'
  }
});

export default CartItems;
