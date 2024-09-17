import React from "react";
import Home from "../screens/home";
import Header from "../components/header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import detailedCrypto from "../screens/detailedCrypto";

type RootStackParamList = {
  Home: undefined;
  DetailedCrypto: { title: string };
};

type DetailedCryptoScreenRouteProp = RouteProp<
  RootStackParamList,
  "DetailedCrypto"
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const CryptoStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTitle: () => <Header title="" navigation={navigation} />,
      })}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTitle: () => <Header title="" navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="DetailedCrypto"
        component={detailedCrypto}
        options={({ route }: { route: DetailedCryptoScreenRouteProp }) => ({
          title: route.params?.title || "Default Title",
        })}
      />
    </Stack.Navigator>
  );
};

export default CryptoStack;
