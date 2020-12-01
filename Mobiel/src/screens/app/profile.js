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
    const { user, logout, profile } = useContext(AuthContext)

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
  
    useEffect(() => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
  
      axios.get('/api/users')
        .then(response => {
          setName(response.data.name);
        })
        .catch(error => {
          console.log(error.response);
        })

        axios.get('/api/user')
        .then(response => {
          setName(response.data.name);
        })
        .catch(error => {
          console.log(error.response);
        })
  
    }, []);

    return (
        
      <View style={styles.container}>
          <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
            <HeaderProfile style={styles.header} name={user.name}/>
            {/* Disconnection Button <Button title="Logout" onPress={() => logout()} /> */}
            <ScrollView style={styles.content}>
                <View style={styles.containerLog}>
                    <TextInput
                        
                        style={styles.input}
                        editable={false} 
                        placeholder={user.email ? user.email : "Email"}
                        textContentType="emailAddress"
                        autoCapitalize = 'none'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={user.name ? user.name : "Name"}
                        onChangeText={text => setName(text)}
                        textContentType="name"
                        autoCapitalize = 'none'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={user.phone ? user.phone : "Phone"}
                        onChangeText={text => setPhone(text)}
                        textContentType="telephoneNumber"
                        autoCapitalize = 'none'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={user.password ? user.password : "Password"}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}
                    />
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => profile(name, phone, password)}
    ><Text style={{color:'white',fontWeight:"bold",fontSize:15}}>Submit</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.buttonlogout}
                        onPress={() => logout()}
                    ><Text style={{color:'white',fontWeight:"bold",fontSize:15}}>Logout</Text>
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