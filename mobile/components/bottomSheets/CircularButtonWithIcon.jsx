import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CircularButtonWithIcon = ({ icon, onPress }) => {
  return (
    <TouchableOpacity
      style={{ height: 40, width: 40, borderRadius: 20 }}
      onPress={onPress}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default CircularButtonWithIcon;

const styles = StyleSheet.create({});
