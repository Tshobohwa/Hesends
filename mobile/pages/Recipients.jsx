import {
  Image,
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
import { KES } from "../mockingData/accounts";

const RecipientButton = () => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View
          style={{
            padding: 8,
            backgroundColor: COLORS["white-light"],
            borderRadius: 8,
          }}
        >
          <Text style={{ fontWeight: "600", lineHeight: 20 }}>JD</Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              lineHeight: 24,
            }}
          >
            John Doe
          </Text>
          <Text style={{ color: COLORS["black-light"] }}>@johndoe</Text>
        </View>
      </View>
      <Image style={{ height: 25, width: 25 }} source={KES} />
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
            borderRadius: 20,
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
