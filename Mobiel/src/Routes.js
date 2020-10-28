import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Button, TextInput, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './providers/AuthProvider';
import { AuthStack } from './screens/AuthStack';
import { AppStack } from './screens/AppStack';
import Splash from './screens/Splash';
//import * as SecureStore from 'expo-secure-store';

export default function Routes() {
  const { user, setUser, login, logout } = useContext(AuthContext)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check if the user is logged in or not
    //SecureStore.getItemAsync('user')
    const timer = setTimeout(() => {
      AsyncStorage.getItem('user')
      .then(userString => {
        if (userString) {
          // decode it
          // login();
          userObject = JSON.parse(userString)
          setUser(userObject);
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      })
    }, 1500);
    
  }, []);

  if (loading) {
    // We haven't finished checking for the token yet
    return <Splash />;
  }

  return (
      <NavigationContainer>
        {user ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
  );
}
