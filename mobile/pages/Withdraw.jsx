import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CircularButtonWithIcon from "../components/bottomSheets/CircularButtonWithIcon";
import AntDesign from "@expo/vector-icons/AntDesign";

const Withdraw = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <CircularButtonWithIcon
        onPress={() => navigation.pop()}
        icon={<AntDesign name="close" size={24} color="black" />}
      />
      <Text style={styles.header}>Withdraw money to your mobile wallet</Text>
    </SafeAreaView>
  );
};

export default Withdraw;

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: "600",
    color: COLORS["green"],
    marginBottom: 20,
  },
});
