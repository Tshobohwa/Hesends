import { StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../../utils/colors";

const TransactionItem = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <View
        style={{
          padding: 8,
          backgroundColor: COLORS["white-light"],
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600" }}>JD</Text>
      </View>
      <Text style={{ fontSize: 18, fontWeight: "semibold" }}>
        -354 <Text style={{ fontSize: 12 }}>KES</Text>
      </Text>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({});
