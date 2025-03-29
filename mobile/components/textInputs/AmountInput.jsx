import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import screenDimensions from "../../utils/screenDimensions";

const AmountInput = () => {
  return (
    <View>
      <View
        style={{
          height: 60,
          borderWidth: 1,
          width: screenDimensions.screenWidth - 20,
          borderRadius: 10,
          flexDirection: "row",
        }}
      >
        <TextInput
          style={{
            height: 60,
            fontSize: 28,
            width: screenDimensions.screenWidth - 130,
          }}
          inputMode="decimal"
        />
        <TouchableOpacity
          style={{
            height: 60,
            width: 110,
            backgroundColor: "yellow",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 28 }}>KES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AmountInput;

const styles = StyleSheet.create({});
