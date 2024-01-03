import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import SignInScreen from "../screens/SignInScreen";
import LandingPage from "../screens/LandingPage";
import SuccessLoginScreen from "../screens/SuccessLoginScreen";
import PreferencesScreen from "../screens/PreferencesScreen";
import StepScreen02 from "../screens/PreferencesStepScreen/StepScreen02";
import StepScreen01 from "../screens/PreferencesStepScreen/StepScreen01";
import TabNavigator from "./TabNavigation";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SuccessLoginScreen"
          component={SuccessLoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PreferencesScreen"
          component={PreferencesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StepScreen01"
          component={StepScreen01}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StepScreen02"
          component={StepScreen02}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
