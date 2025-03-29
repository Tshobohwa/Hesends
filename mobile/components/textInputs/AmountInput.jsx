import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import screenDimensions from "../../utils/screenDimensions";

const AmountInput = ({ account }) => {
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
            paddingHorizontal: 10,
          }}
          inputMode="decimal"
          placeholder={`max ${account.balance}`}
        />
        <TouchableOpacity
          style={{
            height: 59,
            width: 110,
            flexDirection: "row",
            alignItems: "center",
            padding: 5,
            gap: 8,
            borderLeftWidth: 1,
            justifyContent: "center",
          }}
        >
          <Image source={account.icon} style={{ height: 24, width: 24 }} />
          <Text style={{ fontSize: 24, fontWeight: "500" }}>KES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AmountInput;

const styles = StyleSheet.create({});
