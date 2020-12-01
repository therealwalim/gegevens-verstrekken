import { AuthContext } from "../../providers/AuthProvider";
import { Button, Text, View, Image, StyleSheet, Dimensions, ScrollView, FlatList } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import Header from '../../components/app/header'
import BottomBar from '../../components/app/bottombar'
import { TouchableHighlight } from "react-native-gesture-handler";
import PasswordCard from "../../components/app/passwords/PasswordCard";

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
    paddingRight: 24,
  },footer:{
    flex: .2
  },titleContainer:{
    marginBottom: 20,
    marginLeft: 24,
    flexDirection: "row",
    alignItems:"center",
  },
    title1:{
    fontSize: 16,
    fontFamily: 'Montserrat',
    fontWeight: "bold",
    color: '#3F3D56',
    opacity: .86,
  },
  title2:{
    fontSize: 13,
    fontFamily: 'Montserrat',
    fontWeight: "bold",
    color: '#4158D0',
    opacity: .86,
    marginLeft: 6,
  },CardContainer:{
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "stretch"
  }
})


export default function Password({ navigation }) {
    const { user, logout } = useContext(AuthContext)
    const [password, setPassword] = useState([]);
    const [name, setName] = useState('');
  
    useEffect(() => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
  
      axios.get('/api/password')
        .then(response => {
          setPassword(response.data);
        })
        .catch(error => {
          console.log(error.response);
        })

        axios.get('/api/user')
        .then(response => {
          setName(response.data.photo);
          console.log(name);
        })
        .catch(error => {
          console.log(error.response);
        })
  
    }, []);

    if(!password){
      return null
    }

    console.log(user.token);
  
    return (
      
        // Header component
        <View style={styles.container}>
            <Header style={styles.header} name={user.name}  navigation={navigation}/>
            {/* Disconnection Button <Button title="Logout" onPress={() => logout()} /> */}
            
            <View style={styles.titleContainer}>
                <Text style={styles.title1}>Passwords</Text>
                <Text style={styles.title2}>{password.count}</Text>
            </View>

            <ScrollView style={styles.content}>
              
              <View style={styles.CardContainer}>
                  
                  <FlatList
                    data={password.password}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => <PasswordCard item={item} site={item.service} />
                  }
                  />
                  
                  {/*<PasswordCard site={"facebook"} />
                  <PasswordCard site={"spotify"} />
                  */}
              </View>
  
            </ScrollView>
            <BottomBar style={styles.footer} navigation={navigation} />
        </View>

        
        
    );
  }

{/*

*/
}