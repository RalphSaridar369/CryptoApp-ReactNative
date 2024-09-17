import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  Linking,
} from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { AntDesign, Feather } from "@expo/vector-icons";
import axios from "axios";

const News = (props) => {
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  const height = Dimensions.get("screen").height;
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://cryptopanic.com/api/v1/posts/?auth_token=403222a304bab7ff62de12cfd3d2b97c1b4fced8&filter=hot"
      )
      .then((resp) => {
        try {
          setNews(resp.data.results);
        } catch (e) {
          console.error(e);
        }
      })
      .then((r) => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator
          size="large"
          color="orange"
          style={{ marginTop: height / 3 }}
        />
      </View>
    );
  }

  return (
    <View>
      <GestureRecognizer
        config={config}
        onSwipeLeft={() => props.navigation.navigate("calculateAPY")}
        onSwipeRight={() => props.navigation.navigate("home")}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {news.map((item) => (
            <View style={styles.newsContainer} key={item.title}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.published}>
                Published At: {item.published_at}
              </Text>
              <Text style={styles.published}>
                Reference:&nbsp;&nbsp;&nbsp; {item.domain}
              </Text>
              <Text style={styles.published}>
                Url:{" "}
                <Text
                  style={{ color: "blue" }}
                  onPress={() => Linking.openURL(item.url)}
                >
                  {item.url}
                </Text>
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={styles.like}>
                  <Text>
                    {item.votes.positive != 0 ? item.votes.positive : "0"}
                  </Text>
                  <Feather name="arrow-up-right" size={24} color="green" />
                </View>
                <View style={styles.like}>
                  <Text>{item.votes.liked != 0 ? item.votes.liked : "0"}</Text>
                  <AntDesign name="like2" size={24} color="green" />
                </View>
                <View style={styles.like}>
                  <Text>
                    {item.votes.negative != 0 ? item.votes.negative : "0"}
                  </Text>
                  <Feather name="arrow-down-right" size={24} color="red" />
                </View>
                <View style={styles.like}>
                  <Text>
                    {item.votes.disliked != 0 ? item.votes.disliked : "0"}
                  </Text>
                  <AntDesign name="dislike2" size={24} color="red" />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </GestureRecognizer>
    </View>
  );
};

const styles = StyleSheet.create({
  newsContainer: {
    display: "flex",
    flexDirection: "column",
    paddingVertical: 30,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
  },
  like: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    gap: 5,
  },
  title: {
    width: 300,
    paddingHorizontal: 10,
    paddingBottom: 20,
    fontSize: 22,
    fontWeight: "bold",
  },
  description: {},
  published: {
    width: 300,
    fontSize: 16,
    marginTop: 5,
    marginHorizontal: 10,
  },
});

export default News;
