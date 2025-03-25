import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import COLORS from "../../utils/colors";

const TransactionItem = () => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        margin: 4,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "flex-start", gap: 10 }}>
        <View
          style={{
            padding: 10,
            backgroundColor: COLORS["white-light"],
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>JD</Text>
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>John Doe</Text>
          <Text style={{ fontSize: 14 }}>John Doe</Text>
        </View>
      </View>
      <Text style={{ fontSize: 18, fontWeight: "600" }}>
        -354 <Text style={{ fontSize: 12, fontWeight: "700" }}>KES</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({});
