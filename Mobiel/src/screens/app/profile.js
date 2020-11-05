import { AuthContext } from "../../providers/AuthProvider";
import { Button, Text,TextInput, View, Image, StyleSheet, Dimensions, ScrollView, StatusBar } from "react-native";
import {Picker} from '@react-native-picker/picker';
import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import HeaderProfile from '../../components/app/headerProfile'
import BottomBar from '../../components/app/bottombar'
import Icon from 'react-native-vector-icons/Feather';
import { TouchableHighlight } from "react-native-gesture-handler";

export default function Profile({ navigation }) {
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
          <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
            <HeaderProfile style={styles.header} name={user.email}/>
            {/* Disconnection Button <Button title="Logout" onPress={() => logout()} /> */}
            <ScrollView style={styles.content}>
                <View style={styles.containerLog}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        textContentType="emailAddress"
                        autoCapitalize = 'none'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        textContentType="name"
                        autoCapitalize = 'none'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        textContentType="telephoneNumber"
                        autoCapitalize = 'none'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <TouchableHighlight
                        style={styles.button}
                    ><Text style={{color:'white'}}>Submit</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.buttonlogout}
                    ><Text style={{color:'white'}}>Logout</Text>
                    </TouchableHighlight>
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
      flex: .2,
      zIndex: 1
    },content:{
      flex: .6,
      paddingLeft: 24,
      paddingRight: 24,
      top: 100,
    },footer:{
      flex: .2
    },containerLog:{
        flex: 1,
        flexDirection: 'column',
        alignItems: "stretch",
        backgroundColor:'#EEEEF1',
        borderTopLeftRadius: 30, 
        borderTopRightRadius: 30,
        height: 600,
        paddingTop: 30,
      },
    input:{
        padding: 18,
        borderRadius: 5,
        backgroundColor: '#f8f8f8',
        elevation: 1,
        marginTop: 5,
        marginBottom: 5,
      },button:{
        padding: 18,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor: '#4158D0',
        elevation: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: "red"
      },buttonlogout:{
        padding: 18,
        marginTop: 8,
        borderRadius: 5,
        backgroundColor: '#F5444F',
        elevation: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: "red"
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