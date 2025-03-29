import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../utils/colors";

const Transactions = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.white, padding: 10 }}
    >
      <Text style={styles.title}>Transactions</Text>
    </SafeAreaView>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});
