import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CardDetailsScreen from "../screens/CardDetailsScreen";
import SignInScreen from "../screens/SignInScreen";

import HomeTicket from "../screens/HomeTicket";
import SeatCount from "../screens/SeatCount";
import BusList from "../screens/BusList";
import BusDetails from "../screens/BusDetails";
import Confirmation from "../screens/Confirmation";

import TopupScreen from "../screens/TopupScreen";
import NewCardScreen from "../screens/NewCardScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen/NewPasswordScreen";
import ReportDownloadScreen from "../screens/ReportDownloadScreen";

import AdminHomeScreen from "../screens/AdminHomeScreen";
import UsersDashboardScreen from "../screens/UsersDashboard/UsersDashboardScreen";

import ViewCardSceen from "../screens/ViewCardScreen/ViewCardSceen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReportDownloadScreen"
          component={ReportDownloadScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfirmEmail"
          component={ConfirmEmailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BusDetails"
          component={BusDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confirmation"
          component={Confirmation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeAdmin"
          component={AdminHomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SeatCount"
          component={SeatCount}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HomeTicket"
          component={HomeTicket}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Topup"
          component={TopupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewCardScreen"
          component={NewCardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CardDetails"
          component={CardDetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BusList"
          component={BusList}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ViewCardSceen"
          component={ViewCardSceen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="New Users" component={UsersDashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
