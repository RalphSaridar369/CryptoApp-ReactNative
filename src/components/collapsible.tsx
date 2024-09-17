import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Animated } from "react-native";

const Collapsible = ({ title, children, style }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [animation] = useState(new Animated.Value(1)); // Start with full size (1)

  const toggleCollapse = () => {
    if (collapsed) {
      Animated.timing(animation, {
        toValue: 0, // Collapse to 0
        duration: 300,
        useNativeDriver: false, // Use JS driver to animate layout
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 1, // Expand to full size (1)
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
    setCollapsed(!collapsed);
  };

  const contentScale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1], // Animates from 0 (collapsed) to 1 (expanded)
  });

  const contentOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1], // Animates opacity from 0 to 1
  });

  return (
    <View>
      <TouchableWithoutFeedback onPress={toggleCollapse} style={style}>
        <View>
          <Text>{title}</Text>
        </View>
      </TouchableWithoutFeedback>

      {/* Use transform scale to shrink/expand the content */}
      <Animated.View
        style={{
          transform: [{ scaleY: contentScale }],
          opacity: contentOpacity,
        }}
      >
        <View style={{ flex: 1 }}>{children}</View>
      </Animated.View>
    </View>
  );
};

export default Collapsible;
