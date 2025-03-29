import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import CircularButtonWithIcon from "../components/bottomSheets/CircularButtonWithIcon";

const Send = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CircularButtonWithIcon
        icon={<AntDesign name="close" size={24} color="black" />}
        onPress={() => navigation.pop()}
      />
      <Text>Send</Text>
    </SafeAreaView>
  );
};

export default Send;

const styles = StyleSheet.create({});
