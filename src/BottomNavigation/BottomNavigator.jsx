import { Image } from "react-native";
import React from "react";
import Analytics from "./Screen/Analytics";
import Dashboard from "./Screen/Dashboard";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const TabButtonNavigator = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <>
            <TabButtonNavigator.Navigator initialRouteName="Dashboard">
                <TabButtonNavigator.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        headerShown: false, 
                        tabBarIcon: (tabInfo) => {
                            return (
                                <>
                                    <Image
                                        source={require('../../assets/icons8-dashboard-50.png')}
                                        style={{ width: 35, height: 35, tintColor: tabInfo.focused?'#38EACF':'#2b2b2b'}} 
                                    />
                                </>
                            );
                        }
                    }} 
                />
                <TabButtonNavigator.Screen
                     name="Analytics"
                     component={Analytics}
                     options={{ 
                                headerShown: false ,
                                tabBarIcon: ()=> {
                                    return(
                                        <Image    
                                            source={require('../../assets/icons8-analytics-64.png')}
                                            style={{width: 30, height:30}}
                                        />
                                    )
                                }
                             }}     
                />

            </TabButtonNavigator.Navigator>
        </>
  )
}

export default BottomNavigator
