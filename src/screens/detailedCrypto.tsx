import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Image,
  Linking,
} from "react-native";
import axios from "axios";
import { LineChart } from "react-native-wagmi-charts";
import Collapsible from "../components/collapsible";

const DetailedCrypto = ({ route }) => {
  const [coin, setCoin] = useState<any>();
  const [dataChart, setDataChart] = useState([]);
  const [coinLoaded, setCoinLoaded] = useState(false);
  const [chartLoaded, setChartLoaded] = useState(false);

  if (route.params.sparkline_in_7d.price.length === 0) {
    return <Text>Loading...</Text>;
  }

  const addTimeStamp = (data: number[]) => {
    let date = Date.now();
    return data.map((nm) => {
      return { timestamp: date + 5 * 60 * 1000, value: nm };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${route.params.id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
      );
      setCoin(res.data);
      setCoinLoaded(true);
      const modifiedData = addTimeStamp(route.params.sparkline_in_7d.price);
      setDataChart(modifiedData);
      setChartLoaded(true);
    };
    fetchData();
  }, []);

  const MaxSupply = () => {
    return (
      <View style={styles.textsContainer}>
        <Text style={[styles.titleInfo]}>Total Supply:</Text>
        <Text style={styles.texts}>
          {JSON.stringify(route.params.total_supply)}
        </Text>
      </View>
    );
  };

  const FullyDilutedValuation = () => {
    if (JSON.stringify(route.params.fully_diluted_valuation) != "null")
      return (
        <Text style={styles.texts}>
          ${JSON.stringify(route.params.fully_diluted_valuation)}
        </Text>
      );
    else return <Text style={styles.texts}>Unknown</Text>;
  };

  return (
    <ScrollView>
      {chartLoaded && coinLoaded && (
        <LineChart.Provider data={dataChart}>
          <View style={styles.chartContainer}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={styles.tinyLogo}
                source={{ uri: route.params.image }}
              />
              <View style={styles.symbolContainer}>
                <Text
                  style={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    marginLeft: 10,
                  }}
                >
                  {route.params.symbol}
                </Text>
              </View>
              <View style={styles.percentContainer}>
                <Text style={{ color: "grey" }}>7D</Text>
                {coinLoaded ? (
                  coin?.market_data.price_change_percentage_7d
                    .toString()
                    .charAt(0) == "-" ? (
                    <Text
                      style={{
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        color: "red",
                      }}
                    >
                      %{coin.market_data.price_change_percentage_7d}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        color: "green",
                      }}
                    >
                      %{coin.market_data.price_change_percentage_7d}
                    </Text>
                  )
                ) : null}
              </View>
            </View>
            <LineChart.PriceText
              style={styles.chartPrice}
              format={({ value }) => {
                "worklet";
                const formattedPrice =
                  value || coin.market_data.current_price.usd.toFixed(2);
                return `$${formattedPrice}`;
              }}
            />
          </View>
          <LineChart>
            <LineChart.Path width={1} />
            <LineChart.CursorCrosshair color="#ffb733" size={15} />
          </LineChart>
        </LineChart.Provider>
      )}
      {coinLoaded && (
        <Collapsible style={styles.infoContainer} title="Basic Info">
          <View style={styles.textsContainer}>
            <Text style={[styles.titleInfo]}>Description:</Text>
            <Text style={styles.texts}>
              {coin.description?.en.replace(/(<([^>]+)>)/gi, "")}
            </Text>
          </View>
          <View style={styles.textsContainer}>
            <Text style={[styles.titleInfo]}>Block Time in Mins:</Text>
            <Text style={styles.texts}>{coin?.block_time_in_minutes}</Text>
          </View>
          <View style={styles.textsContainer}>
            <Text style={[styles.titleInfo]}>Hashing Algorithm:</Text>
            <Text style={styles.texts}>{coin?.hashing_algorithm}</Text>
          </View>
          <View style={styles.textsContainer}>
            <Text style={[styles.titleInfo]}>Links</Text>
            <Text
              style={[styles.texts, { color: "blue" }]}
              onPress={() => Linking.openURL(coin.links.official_forum_url[0])}
            >
              {coin.links.official_forum_url[0] && "Forum"}
            </Text>
            <Text
              style={[styles.texts, { color: "blue" }]}
              onPress={() => Linking.openURL(coin.links?.subreddit_url)}
            >
              {coin.links.subreddit_url && "Reddit"}
            </Text>
            <Text
              style={[styles.texts, { color: "blue" }]}
              onPress={() => Linking.openURL(coin.links?.repos_url.github[0])}
            >
              {coin.links.repos_url.github[0] && "Github"}
            </Text>
          </View>
        </Collapsible>
      )}
      <Collapsible style={styles.infoContainer} title="Data">
        <View style={styles.textsContainer}>
          <Text style={[styles.titleInfo]}>Current Price:</Text>
          <Text style={styles.texts}>
            ${JSON.stringify(route.params.current_price)}
          </Text>
        </View>
        <View style={styles.textsContainer}>
          <Text style={[styles.titleInfo]}>Market Cap:</Text>
          <Text style={styles.texts}>
            ${JSON.stringify(route.params.market_cap)}
          </Text>
        </View>
        <View style={styles.textsContainer}>
          <Text style={[styles.titleInfo]}>Fully Diluted Valuation:</Text>
          <FullyDilutedValuation />
        </View>
        <View style={styles.textsContainer}>
          <Text style={[styles.titleInfo]}>Total Volume:</Text>
          <Text style={styles.texts}>
            ${JSON.stringify(route.params.total_volume)}
          </Text>
        </View>
        {JSON.stringify(route.params.total_supply) ? <MaxSupply /> : null}
        <View style={styles.textsContainer}>
          <Text style={[styles.titleInfo]}>Circulating Supply:</Text>
          <Text style={styles.texts}>
            ${JSON.stringify(route.params.circulating_supply)}
          </Text>
        </View>
        <View style={styles.textsContainer}>
          <Text style={[styles.titleInfo]}>
            All Time Low Change Percentage:
          </Text>
          <Text
            style={[
              styles.texts,
              {
                color:
                  JSON.stringify(route.params.atl_change_percentage)
                    .toString()
                    .charAt(0) == "-"
                    ? "red"
                    : "green",
              },
            ]}
          >
            {JSON.stringify(route.params.atl_change_percentage)}%
          </Text>
        </View>
        <View style={styles.textsContainer}>
          <Text style={[styles.titleInfo]}>All Time Low Date:</Text>
          <Text style={styles.texts}>
            {JSON.stringify(route.params.atl_date).substr(1, 10)}
          </Text>
        </View>
      </Collapsible>

      <Collapsible style={styles.infoContainer} title="ATH - ATL">
        <View style={styles.textsContainer}>
          <Text style={[styles.titleInfo]}>All Time High:</Text>
          <Text style={styles.texts}>{JSON.stringify(route.params.ath)}</Text>
        </View>
        <View style={styles.textsContainer}>
          <Text style={[styles.titleInfo]}>
            All Time High Change Percentage:
          </Text>
          <Text style={[styles.texts, { color: "red" }]}>
            {JSON.stringify(route.params.ath_change_percentage)}%
          </Text>
        </View>
        <View style={styles.textsContainer}>
          <Text style={[styles.titleInfo]}>All Time High Date:</Text>
          <Text style={styles.texts}>
            {JSON.stringify(route.params.ath_date).substr(1, 10)}
          </Text>
        </View>
        <View style={styles.textsContainer}>
          <Text style={[styles.titleInfo]}>All Time Low:</Text>
          <Text style={styles.texts}>{JSON.stringify(route.params.atl)}</Text>
        </View>
        <View style={styles.textsContainer}>
          <Text style={[styles.titleInfo]}>
            All Time Low Change Percentage:
          </Text>
          <Text
            style={[
              styles.texts,
              {
                color:
                  JSON.stringify(route.params.atl_change_percentage)
                    .toString()
                    .charAt(0) == "-"
                    ? "red"
                    : "green",
              },
            ]}
          >
            {JSON.stringify(route.params.atl_change_percentage)}%
          </Text>
        </View>
        <View style={styles.textsContainer}>
          <Text style={[styles.titleInfo]}>All Time Low Date:</Text>
          <Text style={styles.texts}>
            {JSON.stringify(route.params.atl_date).substr(1, 10)}
          </Text>
        </View>
      </Collapsible>
      <Collapsible style={styles.infoContainer} title="Changes in 24h">
        <View style={styles.textsContainer}>
          <Text style={[styles.titleInfo]}>High 24h:</Text>
          <Text style={styles.texts}>
            ${JSON.stringify(route.params.high_24h)}
          </Text>
        </View>
        <View style={styles.textsContainer}>
          <Text style={[styles.titleInfo]}>Low 24h:</Text>
          <Text style={styles.texts}>
            ${JSON.stringify(route.params.low_24h)}
          </Text>
        </View>
        <View style={styles.textsContainer}>
          <Text style={[styles.titleInfo]}>Price Change in 24h:</Text>
          <Text
            style={[
              styles.texts,
              {
                color:
                  JSON.stringify(route.params.price_change_24h)
                    .toString()
                    .charAt(0) == "-"
                    ? "red"
                    : "green",
              },
            ]}
          >
            ${JSON.stringify(route.params.price_change_24h)}
          </Text>
        </View>
        <View style={styles.textsContainer}>
          <Text style={[styles.titleInfo]}>Price Change Rate in 24h:</Text>
          <Text
            style={[
              styles.texts,
              {
                color:
                  JSON.stringify(route.params.price_change_percentage_24h)
                    .toString()
                    .charAt(0) == "-"
                    ? "red"
                    : "green",
              },
            ]}
          >
            {JSON.stringify(route.params.price_change_percentage_24h)}%
          </Text>
        </View>
      </Collapsible>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  texts: {
    fontSize: 18,
    display: "flex",
    padding: 10,
  },
  chartPrice: {
    marginTop: 5,
    fontSize: 24,
    fontWeight: "700",
    color: "black",
  },
  titleInfo: {
    width: 180,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: Platform.OS === "android" ? "sans-serif-light" : undefined,
    paddingLeft: 0,
  },
  chart: {
    marginTop: 100,
  },
  styledChart: {
    marginBottom: 40,
  },
  textsContainer: {
    marginVertical: 5,
    marginHorizontal: 20,
    paddingVertical: 5,
    paddingBottom: 15,
    display: "flex",
    flexDirection: "column",
  },
  infoContainer: {
    flex: 1,
    height: 100,
    borderWidth: 0.4,
    borderColor: "#ffb733",
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "red",
    display: "none",
  },
  chartContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    marginBottom: 40,
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
  symbolContainer: {
    display: "flex",
    flexDirection: "column",
  },
  percentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1,
    marginRight: 10,
  },
  titleInfoAccordion: {
    marginLeft: 10,
    fontSize: 26,
    fontWeight: "700",
    fontFamily: Platform.OS === "android" ? "sans-serif-light" : undefined,
    paddingLeft: 0,
    color: "white",
  },
  textsContainerAccordion: {
    backgroundColor: "#ffb733",
    borderRadius: 20,
    paddingVertical: 5,
    paddingBottom: 15,
    display: "flex",
    flexDirection: "row",
  },
});

export default DetailedCrypto;
