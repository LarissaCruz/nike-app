import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import * as Font from "expo-font";
import { useEffect } from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
const loadFonts = async () => {
  await Font.loadAsync({
    "exo-regular": require("./src/assets/fonts/Exo-Regular.ttf"),
    "exo-medium": require("./src/assets/fonts/Exo-Medium.ttf"),
    "exo-bold": require("./src/assets/fonts/Exo-Bold.ttf"),
  });
};
export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);
  return (
    <>
      <StatusBar style="auto" />
      <AppNavigator />
    </>
  );
}
