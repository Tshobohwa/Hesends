import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../utils/colors";
import SearchInput from "../components/textInputs/SearchInput";

const RecipientButton = () => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View>
          <Text>JD</Text>
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>John Doe</Text>
          <Text style={{ color: COLORS["black-light"] }}>@johndoe</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Recipients = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView style={{ padding: 10 }}>
        <View style={{ marginBottom: 15 }}>
          <Text style={styles.title}>Recipients</Text>
        </View>
        <SearchInput placeholder={"Search Receiver by @tag or name"} />
        <View
          style={{
            backgroundColor: "#ffffff",
            marginVertical: 20,
            marginHorizontal: 10,
          }}
        >
          <RecipientButton />
          <RecipientButton />
          <RecipientButton />
          <RecipientButton />
          <RecipientButton />
          <RecipientButton />
          <RecipientButton />
          <RecipientButton />
          <RecipientButton />
          <RecipientButton />
          <RecipientButton />
          <RecipientButton />
          <RecipientButton />
        </View>
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
