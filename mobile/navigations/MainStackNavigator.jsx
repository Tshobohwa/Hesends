import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import BottomTabsNavigator from "./BottomTabsNavigator";
import TopUp from "../pages/TopUp";
import Send from "../pages/Send";
import Withdraw from "../pages/Withdraw";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="BottomTabs"
    >
      <Stack.Screen name="BottomTabs" component={BottomTabsNavigator} />
      <Stack.Screen
        name="TopUp"
        component={TopUp}
        options={{ animation: "slide_from_bottom" }}
      />
      <Stack.Screen
        name="Send"
        component={Send}
        options={{ animation: "slide_from_bottom" }}
      />
      <Stack.Screen
        name="Withdraw"
        component={Withdraw}
        options={{ animation: "slide_from_bottom" }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
