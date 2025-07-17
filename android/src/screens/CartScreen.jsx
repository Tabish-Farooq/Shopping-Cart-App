// android/src/screens/CartScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CartItems from '../components/CartItems';

const CartScreen = () => (
  <View style={Styles.container}>
    <CartItems />
  </View>
);

const Styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' }
});

export default CartScreen;
