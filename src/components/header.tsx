import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Header = (props) => {
  return (
    <View>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../../assets/bull.png")} />
        <Text style={styles.text1}>Bull</Text>
        <Text style={{ fontSize: 26, color: "black" }}>Market</Text>
      </View>
    </View>
  );
};

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

export default Header;
