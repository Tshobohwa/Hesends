import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SelectAccountButton = ({ currency, balance }) => {
  return (
    <View style={{ height: 60, borderWidth: 1, borderRadius: 15 }}>
      <Text style={{ fontWeight: "500", fontSize: 18 }}>{currency}</Text>
      <Text style={{ fontWeight: "500" }}>{balance}</Text>
    </View>
  );
};

export default SelectAccountButton;

const styles = StyleSheet.create({});
