import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../screens/SignInScreen";
import HomeTicket from "../screens/HomeTicket";
import SeatCount from "../screens/SeatCount";
import BusList from "../screens/BusList";
import BusDetails from "../screens/BusDetails";
import Confirmation from "../screens/Confirmation";


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="HomeTicket" component={HomeTicket} />
        <Stack.Screen name="SeatCount" component={SeatCount} />
        <Stack.Screen name="BusList" component={BusList} />
        <Stack.Screen name="BusDetails" component={BusDetails} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
