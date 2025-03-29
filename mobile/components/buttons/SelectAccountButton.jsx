import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const SelectAccountButton = ({ currency, balance, icon }) => {
  return (
    <View
      style={{
        height: 60,
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: "space-between",
        padding: 10,
        flexDirection: "row",
      }}
    >
      <View>
        <Text style={{ fontWeight: "500", fontSize: 18 }}>{currency}</Text>
        <Text style={{ fontWeight: "500" }}>{balance}</Text>
      </View>
      <Image source={icon} style={{ height: 30, width: 30 }} />
    </View>
  );
};

export default SelectAccountButton;

const styles = StyleSheet.create({});
