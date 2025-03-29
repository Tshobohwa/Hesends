import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import COLORS from "../../utils/colors";

const SelectAccountButton = ({ currency, balance, icon }) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: "space-between",
        padding: 10,
        margin: 10,
        marginVertical: 5,
        flexDirection: "row",
        borderColor: COLORS["green-light"],
      }}
    >
      <View>
        <Text style={{ fontWeight: "500", fontSize: 18 }}>{currency}</Text>
        <Text style={{ fontWeight: "500" }}>{balance}</Text>
      </View>
      <Image source={icon} style={{ height: 30, width: 30 }} />
    </TouchableOpacity>
  );
};

export default SelectAccountButton;

const styles = StyleSheet.create({});
