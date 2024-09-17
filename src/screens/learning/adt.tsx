import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export const ADT = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Understanding Ascending and Descending Triangles
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ascending Triangle</Text>
        <Text style={styles.sectionContent}>
          An ascending triangle is a bullish continuation pattern characterized
          by a horizontal resistance line and an upward-sloping support line. It
          indicates that the price is consolidating within a range, with higher
          lows and a consistent resistance level.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Features:</Text>
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Resistance Line:</Text> The horizontal
          line at the top where the price has struggled to break through.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Support Line:</Text> The upward-sloping
          line formed by connecting the higher lows.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Volume:</Text> Typically decreases as the
          pattern progresses and increases during the breakout.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Significance:</Text> Suggests buyers are
          gaining strength, and a breakout above resistance is likely.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Trading Strategy:</Text>
          {"\n"}• <Text style={styles.bold}>Entry:</Text> Buy when the price
          breaks above resistance with increased volume.
          {"\n"}• <Text style={styles.bold}>Stop-Loss:</Text> Place below the
          most recent low within the pattern.
          {"\n"}• <Text style={styles.bold}>Target:</Text> Height of the
          triangle added to the breakout point.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Descending Triangle</Text>
        <Text style={styles.sectionContent}>
          A descending triangle is a bearish continuation pattern characterized
          by a horizontal support line and a downward-sloping resistance line.
          It indicates that the price is consolidating within a range, with
          lower highs and a consistent support level.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Features:</Text>
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Support Line:</Text> The horizontal line
          at the bottom where the price has found consistent support.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Resistance Line:</Text> The
          downward-sloping line formed by connecting the lower highs.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Volume:</Text> Often decreases as the
          pattern develops and increases during the breakout.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Significance:</Text> Suggests sellers are
          gaining strength, and a breakout below support is likely.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Trading Strategy:</Text>
          {"\n"}• <Text style={styles.bold}>Entry:</Text> Sell when the price
          breaks below support with increased volume.
          {"\n"}• <Text style={styles.bold}>Stop-Loss:</Text> Place above the
          most recent high within the pattern.
          {"\n"}• <Text style={styles.bold}>Target:</Text> Height of the
          triangle subtracted from the breakout point.
        </Text>
      </View>
    </ScrollView>
  );
};
