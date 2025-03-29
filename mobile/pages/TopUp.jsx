import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../utils/colors";
import AmountInput from "../components/textInputs/AmountInput";

const TopUp = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 32, fontWeight: "600", color: COLORS["green"] }}>
        Top up your Kenyan Shilling account
      </Text>
      <AmountInput />
    </SafeAreaView>
  );
};

export default TopUp;

const styles = StyleSheet.create({});
