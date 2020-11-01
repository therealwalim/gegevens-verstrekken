import { AuthContext } from "../../providers/AuthProvider";
import { Button, Text, View, Image, StyleSheet, Dimensions, ScrollView } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import Header from '../../components/app/header'
import BottomBar from '../../components/app/bottombar'

axios.defaults.baseURL = 'http://10.0.2.2:8000';

var {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#EEEEF1',
    flex: 1,
  },header:{
    flex: .2
  },content:{
    flex: .6,
    paddingLeft: 24,
  },footer:{
    flex: .2
  }
})


export default function Home({ navigation }) {
    const { user, logout } = useContext(AuthContext)
    const [name, setName] = useState(null);
  
    useEffect(() => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
  
      axios.get('/api/user')
        .then(response => {
          setName(response.data.name);
          console.log(name);
        })
        .catch(error => {
          console.log(error.response);
        })
  
    }, []);
  
    return (
      
        // Header component
        <View style={styles.container}>
            <Header style={styles.header} name={user.email} />
            {/* Disconnection Button <Button title="Logout" onPress={() => logout()} /> */}
            <ScrollView style={styles.content}>
              <Text>Content</Text>
            </ScrollView>
            <BottomBar style={styles.footer} value={() => navigation.navigate('Settings')} />
        </View>

        
        
    );
  }

  {
    /*<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Dashboard Screen Logged In View</Text>
    <Text>User: {user.email}</Text>
    <Text>User from Server: {name}</Text>
    <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    
    </View>*/
    }