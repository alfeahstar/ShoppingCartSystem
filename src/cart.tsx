import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useCart } from './CartContext';
import cartStyles from './styles/cartStyle';
import { MaterialIcons } from '@expo/vector-icons';
import globalStyles from './styles/globalStyles';
import { useAddedItems } from './AddedItemsContext'; 

const Cart = ({ navigation }: { navigation: any }) => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { handleRemoveFromCart } = useAddedItems(); 

  
  const totalCartPrice = cart
    .reduce((total, item) => {
      const price = parseFloat(item.totalPrice.replace(/[^\d.]/g, '')); 
      return total + price;
    }, 0)
    .toFixed(2);

  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleDeleteItem = (id: number) => {
    removeFromCart(id);
    handleRemoveFromCart(id); 
  };

  const handleDecreaseQuantity = (id: number, quantity: number) => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  const handleIncreaseQuantity = (id: number, quantity: number) => {
    updateQuantity(id, quantity + 1);
  };

  return (
    <SafeAreaView style={globalStyles.safeContainer}>
      
      <View style={cartStyles.header}>
        <TouchableOpacity style={globalStyles.backButton} onPress={() => navigation.goBack()}>
          <Text style={globalStyles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: 'center', position: 'absolute', left: '50%', transform: [{ translateX: -60 }] }}>
          <Text style={cartStyles.title}>Your Cart</Text>
        </View>
      </View>

      
      <ScrollView contentContainerStyle={cartStyles.scrollContainer} showsVerticalScrollIndicator={false}>
        {cart.length === 0 ? (
          <Text style={cartStyles.emptyText}>Your cart is empty</Text>
        ) : (
          cart.map((item) => (
            <View key={item.id} style={cartStyles.cartItem}>
              <Image source={item.image} style={cartStyles.image} />
              <View style={cartStyles.itemDetails}>
                <Text style={cartStyles.name}>{item.name}</Text>
                <Text style={cartStyles.originalPrice}>Price: {item.basePrice}</Text>
                <Text style={cartStyles.price}>Total: {item.totalPrice}</Text>
              </View>
              <View style={cartStyles.quantityContainer}>
                <TouchableOpacity onPress={() => handleDecreaseQuantity(item.id, item.quantity)}>
                  <MaterialIcons name="remove" size={24} color="#F37199" />
                </TouchableOpacity>
                <Text style={cartStyles.quantity}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => handleIncreaseQuantity(item.id, item.quantity)}>
                  <MaterialIcons name="add" size={24} color="#F37199" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
                <MaterialIcons name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>

      
      {cart.length > 0 && (
        <View style={cartStyles.totalCheckoutContainer}>
          <View style={cartStyles.totalInfo}>
            <Text style={cartStyles.totalItemsText}>
              Total Order/s: {totalItems}
            </Text>
            <Text style={cartStyles.totalPriceText}>₱{totalCartPrice}</Text>
          </View>
          <TouchableOpacity 
            style={cartStyles.checkoutButton} 
            onPress={() => navigation.navigate('CheckOut')}
          >
            <Text style={cartStyles.checkoutText}>Checkout</Text>
            <MaterialIcons name="shopping-cart" size={20} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Cart;