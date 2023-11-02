import { View, Text, StyleSheet} from "react-native";
import React, { useEffect } from "react";

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
            navigation.navigate('Master')
    }, 3000);
  }, []);

  return (
    <View style={loadingScreen.container}>
         <Text style={loadingScreen.loadingText}>Loading Please Wait ...................</Text>
    </View>
  );
};

const loadingScreen = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});

export default Splash;
