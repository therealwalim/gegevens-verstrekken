import React, { useContext, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TextInput, Button } from 'react-native';

export default function Register({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Register Screen</Text>
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
        {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      </View>
    );
  }
