import { AuthContext } from "../../providers/AuthProvider";
import { Button, Text, View } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';

axios.defaults.baseURL = 'http://10.0.2.2:8000';

export default function Home({ navigation }) {
    const { user, logout } = useContext(AuthContext)
    const [name, setName] = useState(null);
  
    useEffect(() => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
  
      axios.get('/api/user')
        .then(response => {
          setName(response.data.name);
        })
        .catch(error => {
          console.log(error.response);
        })
  
    }, []);
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dashboard Screen Logged In View</Text>
        <Text>User: {user.email}</Text>
        <Text>User from Server: {name}</Text>
        <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
        <Button title="Logout" onPress={() => logout()} />
      </View>
    );
  }