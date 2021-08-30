import React from 'react';
import Home from '../Components/home';
import Header from '../Components/header';
import DetailedCrypto from '../Components/detailedCrypto';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const screens = {
    Home:{
        screen:Home,
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: () => <Header title='' navigation={navigation} />
          }
        },
    },
    DetailedCrypto:{
        screen:DetailedCrypto,
        navigationOptions:({navigation}) =>{
            return {
                title: navigation.getParam('title'),
            }
        },
    },
}

const CryptoStack = createStackNavigator(screens);
export default CryptoStack;
