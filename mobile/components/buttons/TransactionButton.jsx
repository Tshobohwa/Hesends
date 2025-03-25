import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const TransactionButton = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default TransactionButton;

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "semibold",
  },
});
