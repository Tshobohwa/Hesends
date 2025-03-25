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
      <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}>
        <View
          style={{
            padding: 8,
            backgroundColor: COLORS["white-light"],
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600" }}>JD</Text>
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>John Doe</Text>
          <Text style={{ fontSize: 14 }}>John Doe</Text>
        </View>
      </View>
      <Text style={{ fontSize: 18, fontWeight: "semibold" }}>
        -354 <Text style={{ fontSize: 12, fontWeight: "600" }}>KES</Text>
      </Text>
    </View>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({});
