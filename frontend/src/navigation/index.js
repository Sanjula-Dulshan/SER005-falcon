import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../screens/SignInScreen";
import RouteSearch from "../screens/RouteSearch/RouteSearch";
import PassengerList from "../screens/PassengerList";
import ReportUser from "../screens/ReportUser";
import BottomSheet from "../screens/BottomSheet/BottomSheet";
import ReportUserList from "../screens/ReportUserList";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="SignIn" component={SignInScreen} /> */}
        {/* <Stack.Screen name="RouteSearch" component={RouteSearch} /> */}
        {/* <Stack.Screen name="PassengersList" component={PassengerList} /> */}

        {/* <Stack.Screen name="ReportUser" component={ReportUser} /> */}

        {/* <Stack.Screen name="Sheet" component={BottomSheet} /> */}

        <Stack.Screen name="ReportUserList" component={ReportUserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
