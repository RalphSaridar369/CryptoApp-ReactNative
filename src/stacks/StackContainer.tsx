import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Home from "../screens/home";
import News from "../screens/news";
import CalculateAPY from "../screens/calculateAPY";
import LearningScreen from "../screens/learningScreen";
import { In, ADT, ST, HNS, DT, TT, BP, BR, RW } from "../screens/Intro";
import Header from "../components/header";
import Detailed from "../screens/detailedCrypto";
import { Ionicons } from "@expo/vector-icons";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "orange",
  },
};

const StackHome = createStackNavigator();
const StackNews = createStackNavigator();
const StackAPY = createStackNavigator();
const stackLearn = createStackNavigator();

const HomeNav = ({ navigation }) => {
  return (
    <StackHome.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <StackHome.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: () => <Header navigation={navigation} /> }}
      />
      <StackHome.Screen
        name="detailed"
        component={Detailed}
        options={({ route }: any) => ({
          headerTitle: () => (
            <View>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                {route.params.name}
              </Text>
            </View>
          ),
        })}
      />
    </StackHome.Navigator>
  );
};

const SecondHeader = ({ name }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{name}</Text>
    </View>
  );
};

const StackCalculator = ({ navigation }) => {
  return (
    <StackAPY.Navigator>
      <StackAPY.Screen
        name="Yield Calculator"
        component={CalculateAPY}
        options={{ headerTitle: () => <SecondHeader name="APY Calculator" /> }}
      />
    </StackAPY.Navigator>
  );
};

const StackLearning = ({ navigation }) => {
  return (
    <stackLearn.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <stackLearn.Screen
        name="Learning Screen"
        component={LearningScreen}
        options={{
          headerTitle: () => <SecondHeader name="Become an Investor" />,
        }}
      />
      <stackLearn.Screen name="Basic Rules" component={In} />
      <stackLearn.Screen name="ADT" component={ADT} />
      <stackLearn.Screen name="ST" component={ST} />
      <stackLearn.Screen name="HNS" component={HNS} />
      <stackLearn.Screen name="DT" component={DT} />
      <stackLearn.Screen name="TT" component={TT} />
      <stackLearn.Screen name="BP" component={BP} />
      <stackLearn.Screen name="BR" component={BR} />
      <stackLearn.Screen name="RW" component={RW} />
    </stackLearn.Navigator>
  );
};

const StackNav = ({ navigation }) => {
  return (
    <StackNews.Navigator>
      <StackNews.Screen
        name="News"
        component={News}
        options={{ headerTitle: () => <SecondHeader name="News" /> }}
      />
    </StackNews.Navigator>
  );
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: "orange",
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="home"
          component={HomeNav}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="news"
          component={StackNav}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="newspaper-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="calculateAPY"
          component={StackCalculator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calculator-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Learn"
          component={StackLearning}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    color: "orange",
    fontSize: 26,
  },
  text2: {
    color: "black",
    fontSize: 20,
    flex: 1,
  },
  logo: {
    height: 80,
    width: 80,
  },
  menu: {
    flex: 1,
    left: 0,
  },
});

export default MyTabs;
