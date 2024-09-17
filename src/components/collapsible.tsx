import React, { useState, useRef, Children } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Platform,
  UIManager,
} from "react-native";

const Collapsible = ({ children, style, title }) => {
  const [expanded, setExpanded] = useState(false);
  const animationOpacity = useState(new Animated.Value(0))[0]; // Initial opacity is 0

  // Enable LayoutAnimation on Android
  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleExpand = () => {
    Animated.timing(animationOpacity, {
      toValue: expanded ? 0 : 1, // Fade out or in
      duration: 300,
      useNativeDriver: true, // Use native driver for better performance
    }).start();
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </TouchableOpacity>

      <Animated.View
        style={[
          styles.content,
          { opacity: animationOpacity },
          { display: expanded ? "flex" : "none" }, // Control visibility based on expanded state
        ]}
      >
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderWidth: 0,
    borderRadius: 15,
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#ffb733",
    borderColor: "#ffb733",
    padding: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
  content: {
    overflow: "hidden",
    backgroundColor: "#ffffff",
  },
  contentText: {
    fontSize: 16,
  },
});

export default Collapsible;
