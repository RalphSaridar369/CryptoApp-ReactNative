import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export const TT = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Triple Top - Triple Bottom</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Triple Top Pattern</Text>
        <Text style={styles.sectionContent}>
          The Triple Top pattern is a bearish reversal pattern that typically
          occurs after an uptrend. It indicates that the price has reached a
          resistance level three times, and the pattern suggests a potential
          reversal of the upward trend.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Components of the Triple Top Pattern:</Text>
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>First Peak:</Text> The initial high point
          where the price hits a resistance level and then declines.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>First Trough:</Text> The dip following the
          first peak where the price finds support temporarily.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Second Peak:</Text> The second high that
          reaches approximately the same level as the first peak.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Second Trough:</Text> The dip following
          the second peak where the price again finds support.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Third Peak:</Text> The final high point
          that is similar in height to the previous peaks, indicating a failed
          attempt to break the resistance level.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Neckline:</Text> A horizontal trendline
          drawn through the lows of the troughs. This line acts as a key support
          level for confirming the pattern.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Significance:</Text>
          {"\n"}• <Text style={styles.bold}>Bearish Reversal:</Text> The pattern
          indicates that the current uptrend is losing momentum and a downward
          reversal may follow.
          {"\n"}• <Text style={styles.bold}>Volume:</Text> Volume typically
          increases at the peaks and decreases at the troughs. A significant
          volume increase at the breakdown confirms the pattern.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Trading Strategy:</Text>
          {"\n"}• <Text style={styles.bold}>Entry Point:</Text> Enter a sell
          position when the price breaks below the neckline with increased
          volume.
          {"\n"}• <Text style={styles.bold}>Stop-Loss:</Text> Place a stop-loss
          above the third peak to guard against false breakouts.
          {"\n"}• <Text style={styles.bold}>Target Price:</Text> Measure the
          distance from the peaks to the neckline and subtract this distance
          from the breakout point to estimate the target price.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Triple Bottom Pattern</Text>
        <Text style={styles.sectionContent}>
          The Triple Bottom pattern is a bullish reversal pattern that typically
          forms after a downtrend. It indicates that the price has tested a
          support level three times and is likely to reverse upward.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>
            Components of the Triple Bottom Pattern:
          </Text>
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>First Trough:</Text> The initial low point
          where the price hits a support level and then rebounds.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>First Peak:</Text> The rise following the
          first trough where the price encounters resistance.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Second Trough:</Text> The second low point
          that is similar in depth to the first trough, indicating a failed
          attempt to break the support.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Second Peak:</Text> The rise following the
          second trough where the price again encounters resistance.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Third Trough:</Text> The final low point
          similar to the previous troughs, showing another failed attempt to
          break the support level.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Neckline:</Text> A horizontal trendline
          drawn through the highs of the peaks. This line acts as a key
          resistance level for confirming the pattern.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Significance:</Text>
          {"\n"}• <Text style={styles.bold}>Bullish Reversal:</Text> The pattern
          suggests that the current downtrend is losing momentum and a bullish
          reversal may be imminent.
          {"\n"}• <Text style={styles.bold}>Volume:</Text> Volume often
          decreases during the formation of the pattern and increases at the
          breakout point above the neckline.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Trading Strategy:</Text>
          {"\n"}• <Text style={styles.bold}>Entry Point:</Text> Enter a buy
          position when the price breaks above the neckline with increased
          volume.
          {"\n"}• <Text style={styles.bold}>Stop-Loss:</Text> Place a stop-loss
          below the third trough to manage risk.
          {"\n"}• <Text style={styles.bold}>Target Price:</Text> Measure the
          distance from the troughs to the neckline and add this distance to the
          breakout point to estimate the target price.
        </Text>
      </View>
    </ScrollView>
  );
};
