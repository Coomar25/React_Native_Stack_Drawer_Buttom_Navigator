// Samjhe raakh hai you chai child component hoo AppNavigator Component koo
import { View, Text } from "react-native";
import React, {useEffect} from "react";
import DrawerNavigator from "../DrawerNavigation/DrawerNavigator";

const Master = () => {
  return (
    <>
        <DrawerNavigator/>
    </>
  );
};

export default Master;
