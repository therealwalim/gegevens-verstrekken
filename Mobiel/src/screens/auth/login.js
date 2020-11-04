import React, { useContext, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { AuthContext } from "../../providers/AuthProvider";
import AuthLanding from '../../components/auth/authlanding'
import { ScrollView } from "react-native-gesture-handler";
import {TouchableOpacity} from "react-native-gesture-handler";

const styles = StyleSheet.create({
  containerLog:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'#EEEEF1',
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    overflow: "hidden",
    height: 400,
    paddingTop: 30,
  },title:{
    fontSize:20,
    fontFamily:'Montserrat',
    fontWeight: '600',
    marginBottom:10,
    color:'#4158D0',
  },input:{
    width: 300,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    elevation: 1,
  },label:{
    alignSelf: 'flex-start',
    marginLeft: 60,
    marginBottom: 5,
    color: '#3f3d56',
    opacity: 0.70,
    marginTop: 10,
  },button:{
    width: 224,
    height: 41,
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: '#4158d0',
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },backText:{
    flex: 2,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'center'
  },error:{
    width: 300,
    height: 35,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: '#f56565',
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default function login({navigation, image}) {
    const { login, error } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return ( 
      <ScrollView style={{backgroundColor:'white'}}>
        <View>
        <AuthLanding imagePath={'loginImage'} />
        <View style={styles.containerLog}>
          <Text style={styles.title}>Log In</Text>
          { error &&
            <View style={styles.error}><Text style={{ color: 'white'}}>{ error }</Text></View>
          }
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            placeholder="Email"
            textContentType="emailAddress"
            autoCapitalize = 'none'
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => login(email, password)}
          ><Text style={{color:'white'}}>Submit</Text></TouchableOpacity>
          <View style={styles.backText}>
            <Text>I'm a new user ? </Text>
            <Text style={{marginLeft:3,color:'blue'}} onPress={() => navigation.navigate('Register')}>Register</Text>
          </View>
        </View>
      </View>
      </ScrollView>
  );
}

{/*
CSS :
width: 224px;
height: 41px;

width: 317,
height: 53,
borderRadius: 10,
backgroundColor: '#f56565',
elevation: 1,

*/}