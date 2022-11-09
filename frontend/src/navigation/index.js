import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardDetailsScreen from "../screens/CardDetailsScreen";
import SignInScreen from "../screens/SignInScreen";
import TopupScreen from "../screens/TopupScreen";
import NewCardScreen from "../screens/NewCardScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen/NewPasswordScreen";
import ReportDownloadScreen from "../screens/ReportDownloadScreen";
import ViewCardSceen from "../screens/ViewCardScreen/ViewCardSceen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ViewCardSceen" component={ViewCardSceen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="Home" component={AdminHomeScreen} />
        <Stack.Screen name="Topup"  component={TopupScreen} />
        <Stack.Screen name="NewCardScreen"  component={NewCardScreen} />
        <Stack.Screen name="CardDetails"  component={CardDetailsScreen} />
        <Stack.Screen name="ReportDownloadScreen" component={ReportDownloadScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
