import { AuthContext } from "../../providers/AuthProvider";
import { Button, Text, View, Image, StyleSheet, Dimensions, ScrollView } from "react-native";
import {Picker} from '@react-native-picker/picker';
import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import Header from '../../components/app/header'
import BottomBar from '../../components/app/bottombar'
import Icon from 'react-native-vector-icons/Feather';

export default function Settings({ navigation }) {
    const { user, logout } = useContext(AuthContext)
    const [name, setName] = useState(null);
    const [country, setCountry] = useState('uk');
  
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
      <View style={styles.container}>
            <Header style={styles.header} name={user.email} />
            {/* Disconnection Button <Button title="Logout" onPress={() => logout()} /> */}
            <ScrollView style={styles.content}>
              
              <Text style={styles.title1}>Settings</Text>
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={country}
                  style={styles.pickerWrapper}
                  onValueChange={(itemValue, itemIndex) =>
                    setCountry(itemValue)
                  }>
                  <Picker.Item label="🇬🇧  UK" value="uk" />
                  <Picker.Item label="🇫🇷  FR" value="fr" />
                </Picker>
                <Icon style={styles.pickerIcon}
                  name="chevron-down"
                  size={22}
                  color="red"
                />
              </View>
            </ScrollView>
            <BottomBar style={styles.footer} navigation={navigation} />
        </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      backgroundColor:'#EEEEF1',
      flex: 1,
    },header:{
      flex: .2
    },content:{
      flex: .6,
      paddingLeft: 24,
      paddingRight: 24,
    },footer:{
      flex: .2
    },title1:{
      fontSize: 16,
      fontFamily: 'Montserrat',
      fontWeight: "bold",
      color: '#3F3D56',
      opacity: .86,
      marginBottom: 20,
    },pickerWrapper: {
      backgroundColor: "white",
      borderRadius: 5,
      padding: 5,
   },
   pickerIcon: {
      color: "#4158D0",
      position: "absolute",
      bottom: 20,
      right: 20,
      fontSize: 20
   },
  
   pickerContent: {
      color: "red",
      backgroundColor: "transparent",
   },
  })

{
  /*
  * <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <Text>User: {user.email}</Text>
        <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
        <Button title="Logout" onPress={() => logout()} />
      </View>

      width: 317px;
height: 53px;
border-radius: 5px;
background: #fff;
box-shadow: 0px 3px 6px rgba(65, 88, 208, 0.16);

  */
}