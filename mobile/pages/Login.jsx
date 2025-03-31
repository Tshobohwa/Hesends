import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HederaIcon from "../images/hedera-green.png";
import COLORS from "../utils/colors";
import TextInputWithLabel from "../components/textInputs/TextInputWithLabel";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          gap: 4,
          marginHorizontal: "auto",
        }}
      >
        <Image
          style={{ height: 50, width: 30, objectFit: "contain" }}
          source={HederaIcon}
        />
        <Text
          style={{
            fontSize: 32,
            marginBottom: -12,
            color: COLORS["green-light"],
          }}
        >
          esends
        </Text>
      </View>
      <Text
        style={{
          fontSize: 18,
          marginVertical: 30,
          textAlign: "center",
          color: COLORS["black-light"],
        }}
      >
        Send money across East Africa instantly and securely with Hesend.
      </Text>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>Login</Text>
      <TextInputWithLabel
        label={"email"}
        placeholder="enter your email address"
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
});
