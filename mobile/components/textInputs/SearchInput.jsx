import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import screenDimensions from "../../utils/screenDimensions";

const SearchInput = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} style={styles.textInput} />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: screenDimensions.screenWidth - 40,
    marginHorizontal: "auto",
    borderWidth: 1,
    borderRadius: 30,
  },
  textInput: {
    height: 60,
    width: screenDimensions.screenWidth - 40,
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
});
