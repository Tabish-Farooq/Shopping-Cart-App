// components/Header.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigation = useNavigation();
  const items = useSelector(state => state.cart.items);
  const totalCount = Object.values(items).reduce((sum, entry) => sum + entry.quantity, 0);

  return (
    <View style={Styles.parentcontainer}>
      <View style={Styles.childContainer}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={Styles.productsText}>Products</Text>
        </View>

        <TouchableOpacity
          style={Styles.iconWrapper}
          onPress={() => navigation.navigate('CartScreen')}
        >
          <Ionicons name="cart" color="white" size={25} />
          { totalCount > 0 && (
            <View style={Styles.addItemCount}>
              <Text style={Styles.addItemCountText}>{totalCount}</Text>
            </View>
          )}
        </TouchableOpacity>
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
    position: 'relative',
    justifyContent: 'space-between',
  },
  productsText: {
    fontSize: 24,
    fontWeight: '400',
    color: 'white',
  },
  iconWrapper: {
    position: 'absolute',
    right: 10,
    top: 4,
  },
  addItemCount: {
    backgroundColor: 'red',
    width: 18,
    height: 18,
    borderRadius: 9,
    position: 'absolute',
    right: -6,
    top: -6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addItemCountText: {
    fontSize: 10,
    fontWeight: '700',
    color: 'white',
  },
});

export default Header;
