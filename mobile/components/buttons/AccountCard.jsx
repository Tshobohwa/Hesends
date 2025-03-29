import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import COLORS from "../../utils/colors";

const AccountCard = ({ currency, balance, icon, symbol }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image source={icon} style={{ width: 30, height: 30 }} />
      </View>
      <View style={{ width: 180, alignItems: "flex-end" }}>
        <Text
          style={[styles.text, { color: COLORS["green"], fontWeight: "500" }]}
        >
          {currency}
        </Text>
        <Text style={[styles.text, { color: COLORS["black-light"] }]}>
          {balance + " " + symbol}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AccountCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS["green-light-50"],
    width: 200,
    height: 120,
    justifyContent: "space-between",
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
});
