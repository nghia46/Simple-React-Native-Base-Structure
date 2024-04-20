import { View, Text } from "react-native";
import React from "react";
import MyButton from "../components/common/buttons/myButton";
export default function LoginScreen({ navigation }) {
  return (
    <View>
      <MyButton
        icon="login"
        label="Login"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}
