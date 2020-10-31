import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./app/home";
import Settings from "./app/settings";

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen options={{headerShown: false}} name="Settings" component={Settings} />
    </Stack.Navigator>
  )
}
