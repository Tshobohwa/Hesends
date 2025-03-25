import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import COLORS from "../../utils/colors";
import uganda from "../../images/uganda.png";

const AccountCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image source={uganda} style={{ width: 30, height: 30 }} />
      </View>
      <View style={{ width: 160, alignItems: "flex-end" }}>
        <Text
          style={[styles.text, { color: COLORS["green"], fontWeight: "600" }]}
        >
          Ugandan Shilling
        </Text>
        <Text style={[styles.text, { color: COLORS["black-light"] }]}>
          10 000 UGX
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AccountCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS["green-light-50"],
    width: 180,
    height: 120,
    justifyContent: "space-between",
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
