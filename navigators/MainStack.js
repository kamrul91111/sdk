import React from "react";
import {View, Text} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Screen1 from "./../screens/Screen1";
import Screen2 from "./../screens/Screen2";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
};

export default MainStack;
