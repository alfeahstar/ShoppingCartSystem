import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/home';
import Cart from './src/cart';
import WelcomeScreen from './src/welcome';
import { CartProvider } from './src/CartContext';
import { AddedItemsProvider } from './src/AddedItemsContext';
import CheckOut from './src/checkOut'

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <AddedItemsProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="CheckOut" component={CheckOut} />
          </Stack.Navigator>
        </NavigationContainer>
      </AddedItemsProvider>
    </CartProvider>
  );
}