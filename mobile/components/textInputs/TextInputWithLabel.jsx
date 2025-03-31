import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const TextInputWithLabel = ({
  label,
  placeholder,
  icon,
  value,
  onChange,
  keyboardType,
}) => {
  return (
    <View style={{}}>
      <Text>{label}</Text>
      <View style={{ borderWidth: 1 }}>
        <TextInput
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          keyboardType={keyboardType}
          style={{ fontFamily: "Poppins_400Regular" }}
        />
        {icon}
      </View>
    </View>
  );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({});
