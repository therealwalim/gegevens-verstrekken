import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./app/home";
import Contact from "./app/contacts";
import Settings from "./app/settings";
import Message from "./app/messages";

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen options={{headerShown: false}} name="Settings" component={Settings} />
      <Stack.Screen options={{headerShown: false}} name="Contact" component={Contact} />
      <Stack.Screen options={{headerShown: false}} name="Message" component={Message} />
    </Stack.Navigator>
  )
}
