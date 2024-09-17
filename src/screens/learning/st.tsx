import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export const ST = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Understanding Symmetrical Triangles</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Symmetrical Triangle</Text>
        <Text style={styles.sectionContent}>
          A symmetrical triangle is a chart pattern that forms when the price
          converges between two trendlines, creating a symmetrical shape. This
          pattern indicates a period of consolidation, where the market is
          undecided, and a breakout in either direction is expected.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Features:</Text>
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Trendlines:</Text> The pattern is defined
          by two converging trendlines: a downward-sloping resistance line and
          an upward-sloping support line.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Consolidation:</Text> The price moves
          within the converging trendlines, showing a period of decreasing
          volatility.
        </Text>
        <Text style={styles.sectionContent}>
          - <Text style={styles.bold}>Volume:</Text> Typically, volume decreases
          as the pattern develops and may increase during the breakout.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Significance:</Text> The symmetrical
          triangle indicates that the market is in a state of indecision. A
          breakout in either direction signals the potential for a strong price
          move.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Trading Strategy:</Text>
          {"\n"}• <Text style={styles.bold}>Entry:</Text> Enter a trade when the
          price breaks out of the pattern with increased volume. The direction
          of the breakout will determine the trade direction.
          {"\n"}• <Text style={styles.bold}>Stop-Loss:</Text> Place a stop-loss
          order just outside the opposite side of the triangle from the breakout
          point.
          {"\n"}• <Text style={styles.bold}>Target:</Text> The potential target
          price is the height of the triangle measured from the breakout point.
        </Text>
      </View>
    </ScrollView>
  );
};
