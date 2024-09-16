import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";

const LearningScreen = ({ navigation }) => {
  const titles = [
    {
      title: "Introduction",
      image: require("../../assets/images/Intro.jpg"),
      componentName: "Basic Rules",
    },
    {
      title: "Ascending - Descending Triangle",
      image: require("../../assets/images/AscDescTriangle.png"),
      componentName: "ADT",
    },
    {
      title: "Symmetrical Triangle",
      image: require("../../assets/images/Sym.png"),
      componentName: "ST",
    },
    {
      title: "Head and Shoulders - Inverted Head and Shoulders",
      image: require("../../assets/images/HAS.jpg"),
      componentName: "HNS",
    },
    {
      title: "Double Top - Bottom",
      image: require("../../assets/images/DoubleTB.png"),
      componentName: "DT",
    },
    {
      title: "Triple Top - Bottom",
      image: require("../../assets/images/TTB.jpg"),
      componentName: "TT",
    },
    {
      title: "Bearish - Bullish Pennant",
      image: require("../../assets/images/BBP.png"),
      componentName: "BP",
    },
    {
      title: "Bearish - Bullish Rectangle",
      image: require("../../assets/images/BBR.png"),
      componentName: "BR",
    },
    {
      title: "Rising - Falling Wedge",
      image: require("../../assets/images/RFW.jpg"),
      componentName: "RW",
    },
  ];

  const windowWidth = useWindowDimensions().width;

  return (
    <View>
      <ScrollView>
        {titles.map((item, key) => (
          <TouchableOpacity
            key={key}
            onPress={() => navigation.navigate(item.componentName)}
          >
            <View style={{ marginHorizontal: 20, marginVertical: 40 }}>
              <Image
                source={item.image}
                style={{ width: windowWidth - 40, height: 160 }}
              />
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 24, paddingTop: 20 }}>
                  {item.title}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default LearningScreen;
