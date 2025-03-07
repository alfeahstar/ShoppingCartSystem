import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { useCart } from './CartContext';
import { useAddedItems } from './AddedItemsContext'; 
import checkOutStyles from './styles/checkOutStyle';
import globalStyles from './styles/globalStyles';
import { MaterialIcons } from '@expo/vector-icons';

const CheckOut = ({ navigation }: { navigation: any }) => {
  const { cart, clearCart } = useCart(); 
  const { setAddedItems } = useAddedItems(); 

 
  const totalCartPrice = cart
    .reduce((total, item) => {
      const price = parseFloat(item.totalPrice.replace('₱', ''));
      return total + price;
    }, 0)
    .toFixed(2);

 
  const handlePlaceOrder = () => {
    Alert.alert('Success', 'Order successfully placed!', [
      {
        text: 'OK',
        onPress: () => {
          clearCart(); 
          setAddedItems([]); 
          navigation.navigate('Home'); 
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={globalStyles.safeContainer}>
      
      <View style={checkOutStyles.header}>
        <TouchableOpacity style={globalStyles.backButton} onPress={() => navigation.goBack()}>
          <Text style={globalStyles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center', position: 'absolute', left: '50%', transform: [{ translateX: -60 }] }}>
          <Text style={checkOutStyles.title}>Checkout</Text>
        </View>
      </View>

     
      <ScrollView contentContainerStyle={checkOutStyles.scrollContainer} showsVerticalScrollIndicator={false}>
        {cart.map((item) => (
          <View key={item.id} style={checkOutStyles.cartItem}>
            <Image source={item.image} style={checkOutStyles.image} />
            <View style={checkOutStyles.itemDetails}>
              <Text style={checkOutStyles.name}>{item.name} (x{item.quantity})</Text>
              <Text style={checkOutStyles.price}>{item.totalPrice}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      
      <View style={checkOutStyles.totalCheckoutContainer}>
        <Text style={checkOutStyles.totalPriceText}>Total: ₱{totalCartPrice}</Text>
        <TouchableOpacity style={checkOutStyles.confirmButton} onPress={handlePlaceOrder}>
          <Text style={checkOutStyles.confirmText}>Place Order</Text>
          <MaterialIcons name="check-circle" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CheckOut;
