import React, { useState, useRef } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, Image, ScrollView, Animated } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './navigationType';
import globalStyles from './styles/globalStyles';
import { MaterialIcons } from '@expo/vector-icons';
import { useCart } from './CartContext';
import { useAddedItems } from './AddedItemsContext';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type Props = { navigation: HomeScreenNavigationProp };

const cakes = [
  { id: 1, name: 'Strawberry Bliss', price: '₱785.00', image: require('./img/cake1.png') },
  { id: 2, name: 'Cherry Blossom', price: '₱600.00', image: require('./img/cake2.png') },
  { id: 3, name: 'ChocoBerry Fantasy', price: '₱630.00', image: require('./img/cake3.png') },
  { id: 4, name: 'Frosty Blue Treat', price: '₱650.00', image: require('./img/cake4.png') },
  { id: 5, name: 'Beary Nala Cake', price: '₱1000.00', image: require('./img/cake5.png') },
  { id: 6, name: 'Red Velvet Magic', price: '₱700.00', image: require('./img/cake6.png') },
  { id: 7, name: 'Choco Heaven Cake', price: '₱850.00', image: require('./img/cake7.png') },
  { id: 8, name: 'Mango Delight', price: '₱599.00', image: require('./img/cake8.png') },
  { id: 9, name: 'Blossom Love', price: '₱750.00', image: require('./img/cake9.png') },
  { id: 10, name: 'Matcha Strawberry Swirl', price: '₱810.00', image: require('./img/cake10.png') },
  { id: 11, name: 'Fluffy Carrot Dream', price: '₱550.00', image: require('./img/cake11.png') },
  { id: 12, name: 'Oreo Wonderland ', price: '₱700.00', image: require('./img/cake12.png') },
  { id: 13, name: 'Cherry Charm', price: '₱799.00', image: require('./img/cake13.png') },
  { id: 14, name: 'Tiramisu Kiss ', price: '₱760.00 ', image: require('./img/cake14.png') },
];

const Home = ({ navigation }: Props) => {
  const { cart, addToCart } = useCart(); 
  const { addedItems, setAddedItems } = useAddedItems();
  const animations = useRef<{ [key: number]: Animated.Value }>({}).current;
  const colorAnimations = useRef<{ [key: number]: Animated.Value }>({}).current;

  const handleAddToCart = (cake: typeof cakes[0]) => {
    if (!addedItems.includes(cake.id)) {
      addToCart({
        id: cake.id,
        name: cake.name,
        basePrice: cake.price,
        image: cake.image,
      });

      setAddedItems([...addedItems, cake.id]);

      
      animations[cake.id] = new Animated.Value(0);
      colorAnimations[cake.id] = new Animated.Value(0);

      Animated.parallel([
        Animated.timing(animations[cake.id], {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(colorAnimations[cake.id], {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start();
    }
  };

  
  const totalItemsInCart = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <SafeAreaView style={globalStyles.safeContainer}>
      
      <View style={globalStyles.header}>
        <TouchableOpacity style={globalStyles.backButton} onPress={() => navigation.goBack()}>
          <Text style={globalStyles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={globalStyles.viewCartButton} onPress={() => navigation.navigate('Cart')}>
          <MaterialIcons name="shopping-cart" size={20} color="#FFF" style={{ marginRight: 5 }} />
          <Text style={globalStyles.viewCartButtonText}>View Cart</Text>
          
          
          {totalItemsInCart > 0 && (
            <View style={globalStyles.cartBadge}>
              <Text style={globalStyles.cartBadgeText}>{totalItemsInCart}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      
      <Text style={globalStyles.Hometitle}>Our Cakes</Text>

      
      <ScrollView contentContainerStyle={globalStyles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={globalStyles.gridContainer}>
          {cakes.map((cake) => (
            <View key={cake.id} style={globalStyles.gridItem}>
              <Image source={cake.image} style={globalStyles.cakeImage} resizeMode="contain" />
              
              
              <View style={globalStyles.rowContainer}>
                
                <View style={globalStyles.textContainer}>
                  <Text style={globalStyles.cakeName}>{cake.name}</Text>
                  <Text style={globalStyles.cakePrice}>{cake.price}</Text>
                </View>

                
                <TouchableOpacity 
                  onPress={() => handleAddToCart(cake)}
                  disabled={addedItems.includes(cake.id)}
                >
                  <Animated.View
                    style={[
                      globalStyles.addToCartButton,
                      {
                        backgroundColor: addedItems.includes(cake.id)
                          ? colorAnimations[cake.id]
                            ? colorAnimations[cake.id].interpolate({
                                inputRange: [0, 1],
                                outputRange: ['rgb(225, 53, 125)', 'rgb(185, 92, 120)'], 
                              })
                            : 'rgb(185, 92, 120)' 
                          : 'rgb(225, 53, 125)', 
                      },
                    ]}
                  >
                    {addedItems.includes(cake.id) ? (
                      <Animated.View
                        style={{
                          transform: [{ scale: animations[cake.id] || new Animated.Value(1) }],
                          opacity: animations[cake.id] || new Animated.Value(1),
                        }}                  
                      >
                        <MaterialIcons name="check" size={24} color="#FFF" />
                      </Animated.View>
                    ) : (
                      <MaterialIcons name="add-shopping-cart" size={24} color="#FFF" />
                    )}
                  </Animated.View>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;