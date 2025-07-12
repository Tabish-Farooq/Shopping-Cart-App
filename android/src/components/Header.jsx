import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={Styles.parentcontainer}>
      <View style={Styles.childContainer}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={Styles.productsText}>Products</Text>
        </View>
        <Ionicons name="cart" color="white" size={25} style={Styles.iconRight} />

        
      </View>
      
    </View>
  );
};

const Styles = StyleSheet.create({
  parentcontainer: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#4169E1',
    paddingHorizontal: 10,
  },
  childContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productsText: {
    fontSize: 24,
    fontWeight: '400',
    color: 'white',
  },
  iconRight: {
    position: 'absolute',
    right: 10,
  },
});

export default Header;
