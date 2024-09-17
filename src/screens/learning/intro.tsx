import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export const Intro = () => {
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
