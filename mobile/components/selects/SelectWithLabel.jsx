import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const SelectWithLabel = ({ label, options }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TouchableOpacity
        style={{
          height: 60,
          borderRadius: 10,
          borderWidth: 1,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 28,
            backgroundColor: "red",
            lineHeight: 32,
          }}
        >
          +254704523242
        </Text>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />{" "}
      </TouchableOpacity>
    </View>
  );
};

export default SelectWithLabel;

const styles = StyleSheet.create({});
