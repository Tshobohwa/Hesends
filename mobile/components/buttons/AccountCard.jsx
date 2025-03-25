import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import COLORS from "../../utils/colors";

const AccountCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>AccountCard</Text>
    </TouchableOpacity>
  );
};

export default AccountCard;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS["green-light"],
  },
});
