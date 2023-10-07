import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import Login from "../../modules/auth/adapters/screens/Login";
import CreateAccount from "../../modules/users/adapters/screens/CreateAccount";

import HomeStack from "../stack/HomeSinSesionStack";
import SearchStack from "../stack/SearchStack";

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
          name="login"
          component={Login}
          options={{ title: "Asistencia" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case "login":
      iconName = "chat";
      break;
    // case 'createAccount':
    //     iconName = 'account-plus-outline'
    //     break
    case "home":
      iconName = "card-bulleted-outline";
      break;
    case "buscar":
      iconName = "magnify";
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
