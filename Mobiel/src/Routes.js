import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Button, TextInput, ActivityIndicator, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './providers/AuthProvider';
import { AuthStack } from './screens/AuthStack';
import { AppStack } from './screens/AppStack';
//import * as SecureStore from 'expo-secure-store';

export default function Routes() {
  const { user, setUser, login, logout } = useContext(AuthContext)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check if the user is logged in or not
    //SecureStore.getItemAsync('user')
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
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
