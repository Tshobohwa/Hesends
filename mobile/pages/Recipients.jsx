import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../utils/colors";
import SearchInput from "../components/textInputs/SearchInput";

const Recipients = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView style={{ padding: 10 }}>
        <Text style={styles.title}>Recipients</Text>
        <SearchInput placeholder={"Search Receiver by @tag or name"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipients;

const styles = StyleSheet.create({
  title: {
    fontWeight: "500",
    fontSize: 24,
  },
});
