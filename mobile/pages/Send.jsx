import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import CircularButtonWithIcon from "../components/bottomSheets/CircularButtonWithIcon";
import COLORS from "../utils/colors";
import AmountInput from "../components/textInputs/AmountInput";
import accounts from "../mockingData/accounts";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Send = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <CircularButtonWithIcon
        icon={<AntDesign name="close" size={24} color="black" />}
        onPress={() => navigation.pop()}
      />
      <Text style={styles.header}>Send</Text>
      <AmountInput account={accounts[0]} label={"You send"} />
      <View style={styles.operationsContainer}>
        <FontAwesome name="times-circle" size={16} color="black" />
      </View>
    </SafeAreaView>
  );
};

export default Send;

const styles = StyleSheet.create({
  header: { fontSize: 24, fontWeight: "500", color: COLORS["green"] },
  operationsContainer: { padding: 10, borderLeftWidth: 1, marginVertical: 10 },
});
