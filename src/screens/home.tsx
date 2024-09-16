import React, { useEffect, useState, useRef } from "react";
import Cryptos from "./cryptos";
import {
  FlatList,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import axios from "axios";

const Home = ({ navigation }) => {
  const fetchMore = async () => {
    setIndex(index + 50);
    const data = await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${index}&page=1&sparkline=true`
      )
      .then((res) => {
        setData(res.data);
      });
  };
  const height = Dimensions.get("screen").height;
  const [index, setIndex] = useState(50);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dataRef = useRef();

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  useEffect(() => {
    try {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true"
        )
        .then((res) => {
          dataRef.current = res.data;
          setData(res.data);
          setLoading(false);
        });
    } catch (e) {
      console.error("error");
    }
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
  } else
    return (
      <View>
        <FlatList
          data={data}
          onEndReached={fetchMore}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.setOptions({ title: item.title });
                navigation.navigate("detailed", item);
              }}
            >
              <Cryptos crypto={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    );
};

export default Home;
