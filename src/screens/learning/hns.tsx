import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export const HNS = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Head and Shoulders - Inverted Head and Shoulders
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Head and Shoulders Pattern</Text>
        <Text style={styles.sectionContent}>
          The Head and Shoulders pattern is one of the most popular and reliable
          reversal patterns in technical analysis. It consists of three peaks: a
          higher peak (head) between two lower peaks (shoulders). This pattern
          indicates a potential reversal of the current trend.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>
            Components of the Head and Shoulders Pattern:
          </Text>
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Left Shoulder:</Text> The first peak
          formed by a rise and fall in price, representing a high followed by a
          pullback.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Head:</Text> The second peak, which is
          higher than the left shoulder, formed by a further rise and subsequent
          pullback.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Right Shoulder:</Text> The third peak,
          which is lower than the head but similar in height to the left
          shoulder, formed by another rise and fall.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Neckline:</Text> A trendline drawn through
          the lows between the left shoulder, head, and right shoulder. This
          line acts as a support level.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Significance:</Text>
          {"\n"}• <Text style={styles.bold}>Bearish Reversal:</Text> The pattern
          signals the end of an uptrend and the potential start of a downtrend
          once the price breaks below the neckline.
          {"\n"}• <Text style={styles.bold}>Volume:</Text> Typically, volume
          increases during the formation of the head and decreases during the
          formation of the right shoulder.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Trading Strategy:</Text>
          {"\n"}• <Text style={styles.bold}>Entry Point:</Text> Consider selling
          when the price breaks below the neckline with confirmation from
          increased volume.
          {"\n"}• <Text style={styles.bold}>Stop-Loss:</Text> Place a stop-loss
          above the right shoulder to protect against false breakouts.
          {"\n"}• <Text style={styles.bold}>Target Price:</Text> Measure the
          vertical distance from the head to the neckline and subtract this
          value from the breakout point to estimate the target price.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Inverted Head and Shoulders Pattern
        </Text>
        <Text style={styles.sectionContent}>
          The Inverted Head and Shoulders pattern is a bullish reversal pattern
          that indicates a potential change from a downtrend to an uptrend. It
          mirrors the Head and Shoulders pattern but inverted, with three
          troughs instead of peaks.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>
            Components of the Inverted Head and Shoulders Pattern:
          </Text>
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Left Shoulder:</Text> The first trough
          formed by a decline and subsequent rise in price.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Head:</Text> The second trough, which is
          lower than the left shoulder, formed by a further decline followed by
          a rise.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Right Shoulder:</Text> The third trough,
          which is higher than the head but similar in depth to the left
          shoulder.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Neckline:</Text> A trendline drawn through
          the highs between the left shoulder, head, and right shoulder. This
          line acts as a resistance level.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Significance:</Text>
          {"\n"}• <Text style={styles.bold}>Bullish Reversal:</Text> The pattern
          signals the end of a downtrend and the potential start of an uptrend
          once the price breaks above the neckline.
          {"\n"}• <Text style={styles.bold}>Volume:</Text> Volume typically
          increases during the formation of the head and decreases during the
          formation of the right shoulder.
        </Text>

        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Trading Strategy:</Text>
          {"\n"}• <Text style={styles.bold}>Entry Point:</Text> Consider buying
          when the price breaks above the neckline with confirmation from
          increased volume.
          {"\n"}• <Text style={styles.bold}>Stop-Loss:</Text> Place a stop-loss
          below the right shoulder to protect against false breakouts.
          {"\n"}• <Text style={styles.bold}>Target Price:</Text> Measure the
          vertical distance from the head to the neckline and add this value to
          the breakout point to estimate the target price.
        </Text>
      </View>
    </ScrollView>
  );
};
