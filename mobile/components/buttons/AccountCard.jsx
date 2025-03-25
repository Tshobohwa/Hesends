import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../styles/colors";
import React from "react";

const AccountCard = () => {
  return (
    <View>
      <Text>AccountCard</Text>
    </View>
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
