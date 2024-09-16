import React from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native";

const Intro = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Introduction to Crypto Trading</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What is Cryptocurrency Trading?</Text>
        <Text style={styles.sectionContent}>
          Cryptocurrency trading involves buying, selling, and exchanging
          digital assets on various online platforms. These digital currencies,
          such as Bitcoin and Ethereum, operate on decentralized networks
          without a central authority.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Concepts</Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Cryptocurrencies:</Text> Digital or virtual
          currencies secured by cryptography. Bitcoin is the most well-known,
          but there are many others.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Blockchain Technology:</Text> A
          decentralized ledger that records transactions across multiple
          computers.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Exchanges:</Text> Platforms for trading
          cryptocurrencies, such as Binance and Coinbase.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Wallets:</Text> Digital tools for storing
          and managing cryptocurrencies, which can be software or
          hardware-based.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Trading Pairs:</Text> Cryptocurrencies are
          traded in pairs (e.g., BTC/ETH), where one currency is exchanged for
          another.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Market and Limit Orders:</Text> Market
          orders execute immediately at the current price, while limit orders
          execute at a specified price.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Technical Analysis:</Text> Analyzing price
          charts and market data to predict future price movements.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Risk Management:</Text> Strategies to
          minimize losses and protect your capital, such as stop-loss orders and
          diversification.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Trade Cryptocurrencies?</Text>
        <Text style={styles.sectionContent}>
          Cryptocurrencies offer volatility, 24/7 market access, and continuous
          innovation, providing unique trading opportunities.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Getting Started</Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Research:</Text> Understand blockchain and
          cryptocurrencies. Familiarize yourself with various assets.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Choose an Exchange:</Text> Select a
          reputable platform with strong security and user-friendly features.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Create an Account:</Text> Sign up, verify
          your identity, and secure your account with strong passwords and
          two-factor authentication.
        </Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.bold}>Start Trading:</Text> Begin with small
          trades to learn the process and use tools for market analysis.
        </Text>
      </View>
    </ScrollView>
  );
};

const ADT = () => {
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

const ST = () => {
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

const HNS = () => {
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

const DT = () => {
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

const TT = () => {
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

const BP = () => {
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

const BR = () => {
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

const RW = () => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
  },
  bold: {
    fontWeight: "bold",
  },
});

export { Intro, ADT, ST, HNS, DT, TT, BP, BR, RW };
