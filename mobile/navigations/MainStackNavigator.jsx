import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BottomTabsNavigator from "./BottomTabsNavigator";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabs" component={BottomTabsNavigator} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
