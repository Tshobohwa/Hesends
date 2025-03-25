import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../pages/Home";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 10,
    elevation: 0,
    height: 70,
    borderRadius: 10,
    marginHorizontal: 8,
    borderTopWidth: 0,
  },
};

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} screenOptions={screenOptions} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
