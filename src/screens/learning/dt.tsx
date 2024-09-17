import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export const DT = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Double Top - Double Bottom</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Double Top Pattern</Text>
        <Text style={styles.sectionContent}>
          The Double Top pattern is a bearish reversal pattern that typically
          forms after an uptrend. It signals that the price has reached a
          resistance level twice and is likely to reverse downward.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Components of the Double Top Pattern:</Text>
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>First Peak:</Text> The initial high point
          where the price reaches a resistance level and then declines.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Trough:</Text> The dip that follows the
          first peak where the price finds temporary support before rising
          again.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Second Peak:</Text> The subsequent high
          point that is similar in height to the first peak, indicating a failed
          attempt to break the resistance.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Neckline:</Text> A horizontal trendline
          drawn through the lows of the troughs. This line acts as support and
          is crucial for confirming the pattern.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Significance:</Text>
          {"\n"}• <Text style={styles.bold}>Bearish Reversal:</Text> The pattern
          signals that the upward momentum is weakening and that a downward
          trend may follow.
          {"\n"}• <Text style={styles.bold}>Volume:</Text> Volume often
          decreases as the pattern forms and increases during the breakout below
          the neckline.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Trading Strategy:</Text>
          {"\n"}• <Text style={styles.bold}>Entry Point:</Text> Enter a sell
          position when the price breaks below the neckline with increased
          volume.
          {"\n"}• <Text style={styles.bold}>Stop-Loss:</Text> Place a stop-loss
          above the second peak to protect against false breakouts.
          {"\n"}• <Text style={styles.bold}>Target Price:</Text> Measure the
          distance from the peaks to the neckline and subtract this distance
          from the breakout point to estimate the target price.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Double Bottom Pattern</Text>
        <Text style={styles.sectionContent}>
          The Double Bottom pattern is a bullish reversal pattern that forms
          after a downtrend. It suggests that the price has reached a support
          level twice and is likely to reverse upward.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>
            Components of the Double Bottom Pattern:
          </Text>
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>First Trough:</Text> The initial low point
          where the price reaches a support level and then rebounds.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Peak:</Text> The rise that follows the
          first trough where the price finds resistance before declining again.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Second Trough:</Text> The subsequent low
          point that is similar in depth to the first trough, indicating a
          failed attempt to break the support level.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Neckline:</Text> A horizontal trendline
          drawn through the highs of the peaks. This line acts as resistance and
          is crucial for confirming the pattern.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Significance:</Text>
          {"\n"}• <Text style={styles.bold}>Bullish Reversal:</Text> The pattern
          signals that the downward momentum is weakening and that an upward
          trend may follow.
          {"\n"}• <Text style={styles.bold}>Volume:</Text> Volume often
          decreases as the pattern forms and increases during the breakout above
          the neckline.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Trading Strategy:</Text>
          {"\n"}• <Text style={styles.bold}>Entry Point:</Text> Enter a buy
          position when the price breaks above the neckline with increased
          volume.
          {"\n"}• <Text style={styles.bold}>Stop-Loss:</Text> Place a stop-loss
          below the second trough to protect against false breakouts.
          {"\n"}• <Text style={styles.bold}>Target Price:</Text> Measure the
          distance from the troughs to the neckline and add this distance to the
          breakout point to estimate the target price.
        </Text>
      </View>
    </ScrollView>
  );
};
