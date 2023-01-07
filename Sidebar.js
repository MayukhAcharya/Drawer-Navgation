import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Home from "./Home";
import Settings from "./Settings";

export default function Sidebar() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
