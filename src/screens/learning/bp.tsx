import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export const BP = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bearish - Bullish Pennant</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bearish Pennant Pattern</Text>
        <Text style={styles.sectionContent}>
          The Bearish Pennant is a continuation pattern that forms after a
          strong downtrend. It indicates a brief consolidation period before the
          price resumes its downward movement.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>
            Components of the Bearish Pennant Pattern:
          </Text>
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Flagpole:</Text> The initial strong
          downward move that sets the stage for the pennant formation.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Pennant:</Text> A small symmetrical
          triangle or flag that forms as the price consolidates, usually
          characterized by converging trendlines. It typically forms after the
          flagpole and represents a brief period of consolidation.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Breakout:</Text> The continuation of the
          downward trend once the price breaks below the lower trendline of the
          pennant.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Significance:</Text>
          {"\n"}• <Text style={styles.bold}>Bearish Continuation:</Text> The
          pattern suggests that the prevailing downtrend will continue after the
          consolidation period.
          {"\n"}• <Text style={styles.bold}>Volume:</Text> Volume typically
          decreases during the formation of the pennant and increases
          significantly when the price breaks below the lower trendline.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Trading Strategy:</Text>
          {"\n"}• <Text style={styles.bold}>Entry Point:</Text> Enter a sell
          position when the price breaks below the lower trendline of the
          pennant with increased volume.
          {"\n"}• <Text style={styles.bold}>Stop-Loss:</Text> Place a stop-loss
          above the upper trendline of the pennant to manage risk.
          {"\n"}• <Text style={styles.bold}>Target Price:</Text> Measure the
          height of the flagpole and subtract this distance from the breakout
          point to estimate the target price.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bullish Pennant Pattern</Text>
        <Text style={styles.sectionContent}>
          The Bullish Pennant is a continuation pattern that forms after a
          strong uptrend. It indicates a brief consolidation period before the
          price resumes its upward movement.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>
            Components of the Bullish Pennant Pattern:
          </Text>
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Flagpole:</Text> The initial strong upward
          move that sets the stage for the pennant formation.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Pennant:</Text> A small symmetrical
          triangle or flag that forms as the price consolidates, usually
          characterized by converging trendlines. It typically forms after the
          flagpole and represents a brief period of consolidation.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Breakout:</Text> The continuation of the
          upward trend once the price breaks above the upper trendline of the
          pennant.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Significance:</Text>
          {"\n"}• <Text style={styles.bold}>Bullish Continuation:</Text> The
          pattern suggests that the prevailing uptrend will continue after the
          consolidation period.
          {"\n"}• <Text style={styles.bold}>Volume:</Text> Volume typically
          decreases during the formation of the pennant and increases
          significantly when the price breaks above the upper trendline.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Trading Strategy:</Text>
          {"\n"}• <Text style={styles.bold}>Entry Point:</Text> Enter a buy
          position when the price breaks above the upper trendline of the
          pennant with increased volume.
          {"\n"}• <Text style={styles.bold}>Stop-Loss:</Text> Place a stop-loss
          below the lower trendline of the pennant to manage risk.
          {"\n"}• <Text style={styles.bold}>Target Price:</Text> Measure the
          height of the flagpole and add this distance to the breakout point to
          estimate the target price.
        </Text>
      </View>
    </ScrollView>
  );
};
