import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./pages/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as Font from "expo-font";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { ActivityIndicator } from "react-native";
export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#000" />;
      </View>
    );
  }

  // Set defaultProps for Text to map fontWeight to correct Poppins font
  const originalRender = Text.render;
  Text.render = function (...args) {
    const origin = originalRender.apply(this, args);
    const { style } = origin.props;

    // Determine font family based on fontWeight
    let fontFamily = "Poppins_400Regular"; // Default

    if (style?.fontWeight) {
      const fontWeightMap = {
        100: "Poppins_100Thin",
        200: "Poppins_200ExtraLight",
        300: "Poppins_300Light",
        400: "Poppins_400Regular",
        500: "Poppins_500Medium",
        600: "Poppins_600SemiBold",
        700: "Poppins_700Bold",
        800: "Poppins_800ExtraBold",
        900: "Poppins_900Black",
      };
      fontFamily = fontWeightMap[style.fontWeight] || "Poppins_400Regular";
    }

    return React.cloneElement(origin, {
      style: [{ fontFamily }, style],
    });
  };

  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
