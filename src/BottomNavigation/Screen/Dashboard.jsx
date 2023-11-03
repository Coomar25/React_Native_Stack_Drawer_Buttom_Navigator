import { View, Text } from "react-native";
import React from "react";

const Dashboard = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{ fontSize: 30 }}
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        Dashboard
      </Text>
    </View>
  );
};

export default Dashboard;
