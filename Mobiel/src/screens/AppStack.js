import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./app/home";
import Contact from "./app/contacts";
import Settings from "./app/settings";
import Message from "./app/messages";
import Task from "./app/tasks";
import Password from "./app/passwords";
import Profile from "./app/profile";
import AddNote from "./forms/addnote";
import EditNote from "./forms/editnote";
import AddPassword from "./forms/addpassword";
import UploadFile from "./forms/uploadfile"

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen options={{headerShown: false}} name="Settings" component={Settings} />
      <Stack.Screen options={{headerShown: false}} name="Contact" component={Contact} />
      <Stack.Screen options={{headerShown: false}} name="Message" component={Message} />
      <Stack.Screen options={{headerShown: false}} name="Task" component={Task} />
      <Stack.Screen options={{headerShown: false}} name="Password" component={Password} />
      <Stack.Screen options={{headerShown: false}} name="Profile" component={Profile} />
      <Stack.Screen options={{headerShown: false}} name="AddNote" component={AddNote} />
      <Stack.Screen options={{headerShown: false}} name="EditNote" component={EditNote} />
      <Stack.Screen options={{headerShown: false}} name="AddPassword" component={AddPassword} />
      <Stack.Screen options={{headerShown: false}} name="UploadFile" component={UploadFile} />
    </Stack.Navigator>
  )
}
