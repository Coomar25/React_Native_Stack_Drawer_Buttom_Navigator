import { View, Text, StyleSheet, Image} from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./DrawerMenuList/Home";
import About from "./DrawerMenuList/About";
import Contact from "./DrawerMenuList/Contact";


const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* <Image source={require("./path-to-your-logo.png")} style={styles.logo} /> */}
        <Image
          source={{ uri: "https://imgs.search.brave.com/YI3kl2BlhR6vNcNzIpf5PzrG-E8bYCZDCImwR759pLQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9pcGhvbmUtYXBw/LXN0b3JlLWljb24t/YXBwbGUtYXBwLXN0/b3JlLWljb25fNzQw/NTMzLTEzNS5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw" }} // Replace with your image URL
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <>
        <Drawer.Navigator 
            screenOptions={{
              activeTintColor: "blue", // Color for the active item
              itemStyle: styles.drawerItem, // Style for each item
              labelStyle: styles.labelStyle, // Style for item labels
            }}
            >
                <Drawer.Screen name="Home" component={Home} options={{headerShown: true}}/>
                <Drawer.Screen name="About" component={About} options={{headerShown: true}}/>
                <Drawer.Screen name="Contact" component={Contact} options={{headerShown: true}} />
        </Drawer.Navigator>
    </>
        
  );
};

const styles = StyleSheet.create({
  drawerItem: {
    padding:15,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    borderBottomEndRadius:20,
  },
  labelStyle: {
    fontSize: 18,
    padding: 12,
    color: "black",
  },
});

export default DrawerNavigator;
