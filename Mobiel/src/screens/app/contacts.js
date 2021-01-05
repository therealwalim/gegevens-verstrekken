import { AuthContext } from "../../providers/AuthProvider";
import { Button, Text, View, Image, StyleSheet, Dimensions, ScrollView, PermissionsAndroid, FlatList } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import Header from '../../components/app/header'
import BottomBar from '../../components/app/bottombar'
import { TouchableHighlight } from "react-native-gesture-handler";
import ContactCard from "../../components/contacts/ContactCard";
import con from 'react-native-contacts';

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


export default function Contact({ navigation }) {
    const { user, logout } = useContext(AuthContext)
    const [contact, setContact] = useState([]);
    const [count, setCount] = useState('');
  
    useEffect(() => {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          'title': 'Contacts',
          'message': 'This app would like to view your contacts.'
        }
      ).then(() => {
        con.getAll((err, contacts) => {
          if (err === 'denied'){
            // error
          } else {
            // contacts returned in Array
            setContact(contacts);
          }
        })
      })
      .then(() => {
        con.getCount((counts) =>{
          setCount(counts)
        })
      })
      .catch((err)=> {
          console.log(err);
      })
    }, []);
    
    if(!contact){
      return null
    }

    return (
      
        // Header component
        <View style={styles.container}>
            <Header style={styles.header} name={user.name} navigation={navigation}/>
            {/* Disconnection Button <Button title="Logout" onPress={() => logout()} /> */}
            
            <View style={styles.titleContainer}>
                <Text style={styles.title1}>Contacts</Text>
                <Text style={styles.title2}>{count}</Text>
            </View>

            <ScrollView style={styles.content}>
              
              <View style={styles.CardContainer}>
              <FlatList
                    data={contact}
                    renderItem={({item}) => <ContactCard item={item}/>
                  }
              />
              </View>
  
            </ScrollView>
            <BottomBar style={styles.footer} navigation={navigation} />
        </View>

        
        
    );
  }

{/*

*/
}