import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import MainStack from "./navigators/MainStack";
import BottomTab from "./navigators/BottomTab";

export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
