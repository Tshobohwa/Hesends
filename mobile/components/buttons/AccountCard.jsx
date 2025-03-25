import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import COLORS from "../../utils/colors";

const AccountCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={[styles.text, { color: COLORS["green"] }]}>
          Account card
        </Text>
        <Text style={styles.text}>Account card</Text>
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
    borderColor: COLORS["green-light"],
    width: 160,
    height: 120,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
