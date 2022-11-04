import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardDetailsScreen from "../screens/CardDetailsScreen";
import SignInScreen from "../screens/SignInScreen";
import TopupScreen from "../screens/TopupScreen";


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CardDetails"  component={CardDetailsScreen} />
        <Stack.Screen name="Topup"  component={TopupScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
