import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const TransactionButton = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default TransactionButton;

const styles = StyleSheet.create({
  container: {},
});
