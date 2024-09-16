import React, { useState, useEffect, useRef } from "react";
import Navigation from "./src/stacks/StackContainer";
import { View, Text, StatusBar, Animated } from "react-native";
import "react-native-reanimated";

export default function App() {
  const [loading, setLoading] = useState(true);
  // const [loading, setLoading] = useState(false);
  const bullAnimation = useRef(new Animated.Value(0)).current;
  const animateBull = () => {
    Animated.timing(bullAnimation, {
      toValue: 5,
      duration: 1000,
      useNativeDriver: true,
    }).start((e) => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  };

  const logoAnimation = useRef(new Animated.Value(0)).current;
  const animateLogo = () => {
    Animated.timing(logoAnimation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateLogo();
    animateBull();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Animated.Image
          source={require("./assets/bull.png")}
          style={{
            width: 30,
            height: 30,
            transform: [{ scale: bullAnimation }],
          }}
        />
        <Animated.Text
          style={{
            marginTop: 60,
            fontSize: 30,
            color: "orange",
            opacity: logoAnimation,
          }}
        >
          Bull
          <Text style={{ fontSize: 30, color: "black" }}>Market</Text>
        </Animated.Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Navigation />
    </>
  );
}
