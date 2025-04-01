import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./navigations/MainStackNavigator";

import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  // Override Text component to apply correct Open Sans font weight dynamically
  const originalRender = Text.render;
  Text.render = function (...args) {
    const origin = originalRender.apply(this, args);
    const { style } = origin.props;

    let fontFamily = "OpenSans_400Regular"; // Default font

    if (style?.fontWeight) {
      const fontWeightMap = {
        300: "OpenSans_300Light",
        400: "OpenSans_400Regular",
        600: "OpenSans_600SemiBold",
        700: "OpenSans_700Bold",
        800: "OpenSans_800ExtraBold",
      };
      fontFamily = fontWeightMap[style.fontWeight] || "OpenSans_400Regular";
    }

    return React.cloneElement(origin, {
      style: [{ fontFamily }, style],
    });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
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
