import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export const RW = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Rising - Falling Wedge</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rising Wedge Pattern</Text>
        <Text style={styles.sectionContent}>
          The Rising Wedge is a bearish reversal pattern that forms after an
          uptrend. It indicates a potential reversal in the price direction,
          where the price consolidates within an upward-sloping range before a
          possible downward movement.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>
            Components of the Rising Wedge Pattern:
          </Text>
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Wedge Formation:</Text> The price forms
          two upward-sloping trendlines that converge, with the upper trendline
          representing resistance and the lower trendline representing support.
          The convergence of these trendlines creates a wedge shape.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Consolidation Period:</Text> The price
          consolidates within the wedge, with higher highs and higher lows. This
          period of consolidation typically occurs after a strong uptrend.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Breakout:</Text> A bearish breakout occurs
          when the price falls below the lower trendline of the wedge, signaling
          a potential reversal and continuation of the downtrend.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Significance:</Text>
          {"\n"}• <Text style={styles.bold}>Bearish Reversal:</Text> The pattern
          suggests that the prevailing uptrend may reverse after the
          consolidation within the wedge.
          {"\n"}• <Text style={styles.bold}>Volume:</Text> Volume often
          decreases during the formation of the wedge and increases
          significantly when the price breaks below the lower trendline.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Trading Strategy:</Text>
          {"\n"}• <Text style={styles.bold}>Entry Point:</Text> Enter a sell
          position when the price breaks below the lower trendline of the wedge
          with increased volume.
          {"\n"}• <Text style={styles.bold}>Stop-Loss:</Text> Place a stop-loss
          above the upper trendline of the wedge to manage risk.
          {"\n"}• <Text style={styles.bold}>Target Price:</Text> Measure the
          height of the wedge (distance between the initial high and the
          breakout point) and subtract this distance from the breakout point to
          estimate the target price.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Falling Wedge Pattern</Text>
        <Text style={styles.sectionContent}>
          The Falling Wedge is a bullish reversal pattern that forms after a
          downtrend. It indicates a potential reversal in the price direction,
          where the price consolidates within a downward-sloping range before a
          possible upward movement.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>
            Components of the Falling Wedge Pattern:
          </Text>
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Wedge Formation:</Text> The price forms
          two downward-sloping trendlines that converge, with the upper
          trendline representing resistance and the lower trendline representing
          support. The convergence of these trendlines creates a wedge shape.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Consolidation Period:</Text> The price
          consolidates within the wedge, with lower lows and lower highs. This
          period of consolidation typically occurs after a strong downtrend.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Breakout:</Text> A bullish breakout occurs
          when the price rises above the upper trendline of the wedge, signaling
          a potential reversal and continuation of the uptrend.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Significance:</Text>
          {"\n"}• <Text style={styles.bold}>Bullish Reversal:</Text> The pattern
          suggests that the prevailing downtrend may reverse after the
          consolidation within the wedge.
          {"\n"}• <Text style={styles.bold}>Volume:</Text> Volume often
          decreases during the formation of the wedge and increases
          significantly when the price breaks above the upper trendline.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Trading Strategy:</Text>
          {"\n"}• <Text style={styles.bold}>Entry Point:</Text> Enter a buy
          position when the price breaks above the upper trendline of the wedge
          with increased volume.
          {"\n"}• <Text style={styles.bold}>Stop-Loss:</Text> Place a stop-loss
          below the lower trendline of the wedge to manage risk.
          {"\n"}• <Text style={styles.bold}>Target Price:</Text> Measure the
          height of the wedge (distance between the initial low and the breakout
          point) and add this distance to the breakout point to estimate the
          target price.
        </Text>
      </View>
    </ScrollView>
  );
};
