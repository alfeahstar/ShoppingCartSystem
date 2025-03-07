import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './navigationType';
import globalStyles from './styles/globalStyles';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;
type Props = { navigation: WelcomeScreenNavigationProp };

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <ImageBackground 
      source={require('./img/STARBAKES.png')}
      style={globalStyles.backgroundImage}        
      resizeMode="cover"                          
    >
      <View style={globalStyles.container}>
        <Text style={globalStyles.clickHereText}>Click Here</Text>

        <TouchableOpacity style={globalStyles.openSignButton} onPress={() => navigation.navigate('Home')}>
          <Text style={globalStyles.openSignText}>We're Open</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
