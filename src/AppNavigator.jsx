// rnfe for shortcut component creation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Master from "./StackNavigation/Master";
import Splash from "./StackNavigation/Splash";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{headerShown:true}} />
            <Stack.Screen name="Master" component={Master} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default AppNavigator;
