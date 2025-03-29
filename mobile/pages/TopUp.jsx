import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../utils/colors";
import AmountInput from "../components/textInputs/AmountInput";
import accounts from "../mockingData/accounts";
import SelectWithLabel from "../components/selects/SelectWithLabel";
import CircularButtonWithIcon from "../components/bottomSheets/CircularButtonWithIcon";
import AntDesign from "@expo/vector-icons/AntDesign";

const TopUp = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <CircularButtonWithIcon
        icon={<AntDesign name="close" size={24} color="black" />}
        onPress={() => navigation.pop()}
      />
      <Text
        style={{
          fontSize: 32,
          fontWeight: "600",
          color: COLORS["green"],
          marginBottom: 20,
        }}
      >
        Top up your Kenyan Shilling account
      </Text>
      <AmountInput account={accounts[0]} />
      <View style={{ height: 120 }} />
      <SelectWithLabel label={"Top up from"} />
    </SafeAreaView>
  );
};

export default TopUp;

const styles = StyleSheet.create({});
