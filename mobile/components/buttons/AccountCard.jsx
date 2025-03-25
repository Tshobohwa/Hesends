import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import COLORS from "../../utils/colors";

const AccountCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View></View>
      <View style={{ width: 140, alignItems: "flex-end" }}>
        <Text
          style={[styles.text, { color: COLORS["green"], fontWeight: "600" }]}
        >
          Account card
        </Text>
        <Text style={[styles.text, { color: COLORS["black-light"] }]}>
          10 000 UGX
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
    width: 160,
    height: 120,
    justifyContent: "space-between",
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
