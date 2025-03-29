import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import BottomTabIcon from "../components/icons/BottomTabIcon";
import Feather from "@expo/vector-icons/Feather";
import COLORS from "../utils/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Transactions from "../pages/Transactions";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    borderTopWidth: 0,
    height: 60,
  },
};

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon
              name={"Home"}
              focused={focused}
              icon={
                <Feather
                  name="home"
                  size={24}
                  color={focused ? COLORS["green-light"] : COLORS["black"]}
                />
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon
              name={"Transactions"}
              focused={focused}
              icon={
                <AntDesign
                  name="swap"
                  size={24}
                  color={focused ? COLORS["green-light"] : COLORS["black"]}
                />
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <BottomTabIcon
              name={"Profile"}
              focused={focused}
              icon={
                <Feather
                  name="user"
                  size={24}
                  color={focused ? COLORS["green-light"] : COLORS["black"]}
                />
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
