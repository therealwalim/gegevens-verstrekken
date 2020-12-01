import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
//import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

axios.defaults.baseURL = 'http://10.0.2.2:8000';

export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        login: (email, password) => {
          axios.post('/api/sanctum/token', {
            email,
            password,
            device_name: 'mobile',
          })
          .then(response => {
            const userResponse = {
              email: response.data.user.email,
              token: response.data.token,
              name: response.data.user.name,
              phone: response.data.user.phone,
              password: response.data.user.password,
              id: response.data.user.id,
              photo: response.data.user.photo,
            }
            setUser(userResponse);
            setError(null);
            AsyncStorage.setItem('user', JSON.stringify(userResponse));
            console.log(response.data.user.name+" connected")
          })
          .catch(error => {
            const key = Object.keys(error.response.data.errors)[0];
            setError(error.response.data.errors[key][0]);
          })
        },register: (email,name,phone,password) => {
          axios.post('/api/users', {
            email,
            name,
            phone,
            password,
          })
          .then(response => {
            console.log(response.message)
          })
          .catch(error => {
            console.log(error.response);
          })
        },
        profile: (name,phone,password) => {
          axios.put('/api/users/' + user.id, {
            name,
            phone,
            password,
          })
          .then(response => {
            console.log(response.message)
          })
          .catch(error => {
            console.log(error.response);
          })
        },
        logout: () => {
          axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;

          axios.post('/api/logout')
          .then(response => {
            setUser(null);
            //SecureStore.deleteItemAsync('user')
            AsyncStorage.removeItem('user')
            console.log("User disconnected")
          })
          .catch(error => {
            console.log(error.response);
          })
        }
      }}>
      {children}
    </AuthContext.Provider>
  );
}
