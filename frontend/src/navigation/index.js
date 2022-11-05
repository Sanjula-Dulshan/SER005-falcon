import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../screens/SignInScreen";
import RouteSearch from "../screens/RouteSearch/RouteSearch";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="SignIn" component={SignInScreen} /> */}
        <Stack.Screen name="RouteSearch" component={RouteSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
