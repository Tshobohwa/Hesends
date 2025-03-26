import { StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../../utils/colors";

const BottomTabIcon = ({ name, icon, focused }) => {
  return (
    <View style={{ alignItems: "center", width: 70, marginBottom: -20 }}>
      {icon}
      <Text
        style={{
          fontSize: 10,
          fontWeight: "600",
          color: focused ? COLORS["green-light"] : COLORS["black"],
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default BottomTabIcon;

const styles = StyleSheet.create({});
