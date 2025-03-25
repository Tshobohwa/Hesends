import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import screenDimensions from "../../utils/screenDimensions";
import COLORS from "../../utils/colors";

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
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: (screenDimensions.screenWidth - 30) / 3,
    borderWidth: 1,
    borderColor: COLORS["green-light"],
  },
  text: {
    fontSize: 18,
    fontWeight: "semibold",
    color: COLORS.black,
  },
});
