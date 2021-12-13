import React from "react";
import {View, Text} from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MainStack from "./MainStack";
import Screen1 from "./../screens/Screen1";
import Screen2 from './../screens/Screen2';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator initialRoute="Primary">
      <Tab.Screen
        name="Primary"
        options={{
          headerShown: false,
        }}
        component={MainStack}
      />
      <Tab.Screen name="Secondary" component={Screen2} />
    </Tab.Navigator>
  );
};

export default BottomTab;
