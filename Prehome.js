import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

export default function Prehome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Prehome</Text>
      <Button
        title="Press me"
        onPress={() => navigation.navigate("DrawerHome")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
