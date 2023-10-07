import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../modules/home/adapters/screens/HomeSinSesion";
import PayScreen from "../../modules/pay/adapters/screens/PayScreen";

const Stack = createNativeStackNavigator();

export default function () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#098B67" },
      }}
    >
      <Stack.Screen
        name="homeStack"
        options={{ title: "Productos" }}
        component={Home}
      />

      <Stack.Screen
        name="PayScreen"
        options={{ title: "PayScreen" }}
        component={PayScreen}
      />
    </Stack.Navigator>
  );
}
