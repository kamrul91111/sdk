import React from "react";
import {View, Text} from "react-native";
import {Button} from "react-native-paper";

const Screen1 = ({navigation}) => {
  return (
    <View style={{margin: 15, flex: 1}}>
      <Text>This is Screen 1</Text>
      <Button mode="contained" onPress={() => navigation.navigate("Screen2")}>
        Go to Screen 2
      </Button>
    </View>
  );
};

export default Screen1;
