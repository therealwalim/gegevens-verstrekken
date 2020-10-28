
import React, { useContext, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../providers/AuthProvider";
import { Button, Text, View, TextInput } from "react-native";
import Login from "../screens/auth/login";
import Register from "../screens/auth/register";
import Landing from "../screens/auth/landing";

const Stack = createStackNavigator();


export const AuthStack = () => {
  return ( 
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Landing" component={Landing} />
      <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
    </Stack.Navigator>
  )
}
