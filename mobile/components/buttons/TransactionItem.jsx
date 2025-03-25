import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TransactionItem = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <View></View>
      <Text style={{ fontSize: 18, fontWeight: "semibold" }}>
        -354 <Text style={{ fontSize: 12 }}>KES</Text>
      </Text>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({});
