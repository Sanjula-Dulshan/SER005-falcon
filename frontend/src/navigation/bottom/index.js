import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AdminHomeScreen from "../../screens/AdminHomeScreen";
import UsersDashboardScreen from "../../screens/UsersDashboard/UsersDashboardScreen";

import ViewCardSceen from "../screens/ViewCardScreen/ViewCardSceen";

const Tab = createBottomTabNavigator();

const NavigationBottom = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={AdminHomeScreen} />
        <Tab.Screen name="Users" component={UsersDashboardScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationBottom;
