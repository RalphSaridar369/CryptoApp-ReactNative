import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export const BR = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bearish - Bullish Rectangle</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bearish Rectangle Pattern</Text>
        <Text style={styles.sectionContent}>
          The Bearish Rectangle is a continuation pattern that forms after a
          strong uptrend. It indicates a period of consolidation where the price
          trades within a horizontal range before continuing its downward
          movement.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>
            Components of the Bearish Rectangle Pattern:
          </Text>
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Rectangle Range:</Text> A horizontal
          trading range that is formed by two parallel trendlines. The upper
          trendline represents resistance, and the lower trendline represents
          support.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Consolidation Period:</Text> The price
          moves back and forth between the support and resistance levels within
          the rectangle, indicating a period of indecision.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Breakout:</Text> A bearish breakout occurs
          when the price falls below the lower trendline of the rectangle,
          signaling the continuation of the downtrend.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Significance:</Text>
          {"\n"}• <Text style={styles.bold}>Bearish Continuation:</Text> The
          pattern suggests that the prevailing downtrend will continue after the
          consolidation period.
          {"\n"}• <Text style={styles.bold}>Volume:</Text> Volume often
          decreases during the consolidation phase and increases significantly
          at the breakout below the lower trendline.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Trading Strategy:</Text>
          {"\n"}• <Text style={styles.bold}>Entry Point:</Text> Enter a sell
          position when the price breaks below the lower trendline of the
          rectangle with increased volume.
          {"\n"}• <Text style={styles.bold}>Stop-Loss:</Text> Place a stop-loss
          above the upper trendline to limit potential losses.
          {"\n"}• <Text style={styles.bold}>Target Price:</Text> Measure the
          height of the rectangle (distance between support and resistance) and
          subtract this distance from the breakout point to estimate the target
          price.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bullish Rectangle Pattern</Text>
        <Text style={styles.sectionContent}>
          The Bullish Rectangle is a continuation pattern that forms after a
          strong downtrend. It indicates a period of consolidation where the
          price trades within a horizontal range before continuing its upward
          movement.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>
            Components of the Bullish Rectangle Pattern:
          </Text>
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Rectangle Range:</Text> A horizontal
          trading range that is formed by two parallel trendlines. The upper
          trendline represents resistance, and the lower trendline represents
          support.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Consolidation Period:</Text> The price
          moves back and forth between the support and resistance levels within
          the rectangle, indicating a period of indecision.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Breakout:</Text> A bullish breakout occurs
          when the price rises above the upper trendline of the rectangle,
          signaling the continuation of the uptrend.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Significance:</Text>
          {"\n"}• <Text style={styles.bold}>Bullish Continuation:</Text> The
          pattern suggests that the prevailing uptrend will continue after the
          consolidation period.
          {"\n"}• <Text style={styles.bold}>Volume:</Text> Volume often
          decreases during the consolidation phase and increases significantly
          at the breakout above the upper trendline.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Trading Strategy:</Text>
          {"\n"}• <Text style={styles.bold}>Entry Point:</Text> Enter a buy
          position when the price breaks above the upper trendline of the
          rectangle with increased volume.
          {"\n"}• <Text style={styles.bold}>Stop-Loss:</Text> Place a stop-loss
          below the lower trendline to manage risk.
          {"\n"}• <Text style={styles.bold}>Target Price:</Text> Measure the
          height of the rectangle (distance between support and resistance) and
          add this distance to the breakout point to estimate the target price.
        </Text>
      </View>
    </ScrollView>
  );
};
