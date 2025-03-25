import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import COLORS from "../utils/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import TransactionButton from "../components/buttons/TransactionButton";

const Home = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingVertical: 20, backgroundColor: COLORS.white }}
    >
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
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "semibold" }}>
            Transactions
          </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, color: COLORS["green-light"] }}>
              see all
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
