import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import HomeStack from "../stack/HomeSinSesionStack";
import AsistenseStack from "../stack/AsistenseStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          tabBarActiveTintColor: "#0E7466",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="home"
          component={HomeStack}
          options={{ title: "Productos" }}
        />
        <Tab.Screen
          name="asistente"
          component={AsistenseStack}
          options={{ title: "Asistencia" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case "asistente":
      iconName = "chat";
      break;
    case "home":
      iconName = "card-bulleted-outline";
      break;
    default:
      break;
  }
  return (
    <Icon
      type="material-community"
      name={iconName}
      size={22}
      color={color}
    ></Icon>
  );
};
