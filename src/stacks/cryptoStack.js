import React from "react";
import Home from "../screens/home";
import Header from "../screens/header";
import DetailedCrypto from "../screens/detailedCrypto";
import { createStackNavigator } from "react-navigation-stack";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title="" navigation={navigation} />,
      };
    },
  },
  DetailedCrypto: {
    screen: DetailedCrypto,
    navigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam("title"),
      };
    },
  },
};

const CryptoStack = createStackNavigator(screens);
export default CryptoStack;
