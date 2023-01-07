import { View, Text } from "react-native";
import React from "react";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import Home from "./Home";
import Settings from "./Settings";
import Sidebar from "./Sidebar";
import Prehome from "./Prehome";

export default function Navigation() {
  //const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="prehome"
          component={Prehome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerHome"
          component={Sidebar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="settings"
          component={Settings}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
