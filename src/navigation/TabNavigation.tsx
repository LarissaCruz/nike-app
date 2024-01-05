// TabNavigator.js
import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import ShopScreen from "../screens/ShopScreen";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
          paddingTop: 10,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: "#E25319",
        tabBarInactiveTintColor: "#767676",
        tabBarLabelStyle: {
          paddingBottom: 12,
          fontSize: 10,
          fontFamily: "exo-regular",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={ShopScreen}
        options={{
          headerTitle: "",
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <Feather name="search" size={24} color="black" />
            </View>
          ),
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite-border" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
