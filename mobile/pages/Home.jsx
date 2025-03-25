import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../utils/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import TransactionButton from "../components/buttons/TransactionButton";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
      >
        <Text
          style={{
            fontWeight: "semibold",
            color: COLORS["green-light"],
            fontSize: 24,
          }}
        >
          KES Account
        </Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={24}
          color={COLORS["green-light"]}
        />
      </TouchableOpacity>

      <Text
        style={{ color: COLORS.black, fontSize: 48, fontWeight: "semibold" }}
      >
        14 500<Text style={{ fontSize: 24 }}> KES</Text>
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TransactionButton name="Top up" />
        <TransactionButton name="Send" />
        <TransactionButton name="Withdraw" />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
