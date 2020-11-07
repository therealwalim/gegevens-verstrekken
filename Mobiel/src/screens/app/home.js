import { AuthContext } from "../../providers/AuthProvider";
import { Button, Text, View, Image, StyleSheet, Dimensions, ScrollView } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import Header from '../../components/app/header'
import BottomBar from '../../components/app/bottombar'
import Icon from 'react-native-vector-icons/Feather';
import { TouchableHighlight } from "react-native-gesture-handler";

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
  },title1:{
    fontSize: 16,
    fontFamily: 'Montserrat',
    fontWeight: "bold",
    color: '#3F3D56',
    opacity: .86,
    marginBottom: 20,
  },title:{
    fontSize: 16,
    fontFamily: 'Montserrat',
    fontWeight: "bold",
    color: '#3F3D56',
    opacity: .86,
    marginBottom: 20,
    marginTop: 20,
  },CardContainer:{
    alignItems: "center",
    flexDirection:"row",
    justifyContent: "space-between"
  },Cards:{
    width: 180,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#4158d0',
    alignItems: "center",
    flexDirection:"row",
    justifyContent:"space-around"
  },CardsText:{
    alignItems: "flex-start",
    flexDirection:"column",
  },CardTitle:{
    fontFamily: 'Montserrat',
    fontWeight: "bold",
    fontSize: 11,
    color: 'white',
  },CardText:{
    fontFamily: 'Montserrat',
    fontWeight: "bold",
    fontSize: 14,
    color: 'white',
  },CardSection:{
    flexDirection: "row",
    justifyContent: "space-around"
  },CardElements:{
    alignItems: "center"
  },ContainerIcon:{
    width: 74,
    height: 74,
    borderRadius: 12,
    backgroundColor: 'white',
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 9,
  },
  ContainerIconReverse:{
    width: 74,
    height: 74,
    borderRadius: 12,
    backgroundColor: '#4158D0',
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 9,
  },TextCard:{
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: 12,
    color: "#3f3d56",
    opacity: .78,
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
        })
        .catch(error => {
          console.log(error.response);
        })
  
    }, []);
  
    return (
      
        // Header component
        <View style={styles.container}>
            <Header style={styles.header} name={user.name} navigation={navigation} />
            {/* Disconnection Button <Button title="Logout" onPress={() => logout()} /> */}
            <ScrollView style={styles.content}>
              
              <Text style={styles.title1}>Statistics</Text>
              
              <View style={styles.CardContainer}>
                <View style={styles.Cards}>
                  <Icon name="users" size={22} color="white" />
                  <View style={styles.CardsText}>
                    <Text style={styles.CardTitle}>Number of contacts</Text>
                    <Text style={styles.CardText}>210</Text>
                  </View>
                </View>
                <View style={styles.Cards}>
                  <Icon name="mail" size={22} color="white" />
                  <View style={styles.CardsText}>
                    <Text style={styles.CardTitle}>Number of messages</Text>
                    <Text style={styles.CardText}>500</Text>
                  </View>
                </View>
              </View>

              <Text style={styles.title}>Quick Actions</Text>

              <View style={styles.CardSection}>
                <View style={styles.CardElements}>
                  <TouchableHighlight underlayColor='#F1F1F1' style={styles.ContainerIcon} onPress={ () => navigation.navigate('AddNote')}>
                    <Icon name="list" size={32} color="#4158D0" />
                  </TouchableHighlight>
                  <Text style={styles.TextCard}>Create Note</Text>
                </View>

                <View style={styles.CardElements}>
                  <TouchableHighlight underlayColor='#F1F1F1' style={styles.ContainerIcon} onPress={ () => navigation.navigate('AddPassword')}>
                    <Icon name="key" size={26} color="#4158D0" />
                  </TouchableHighlight>
                  <Text style={styles.TextCard}>Add Password</Text>
                </View>

                <View style={styles.CardElements}>
                  <TouchableHighlight underlayColor='#F1F1F1' style={styles.ContainerIcon} onPress={ () => navigation.navigate('Settings')}>
                    <Icon name="globe" size={26} color="#4158D0" />
                  </TouchableHighlight>
                  <Text style={styles.TextCard}>Change Lang</Text>
                </View>

                <View style={styles.CardElements}>
                  <TouchableHighlight underlayColor='#F1F1F1' style={styles.ContainerIcon} onPress={ () => navigation.navigate('UploadFile')}>
                    <Icon name="upload" size={26} color="#4158D0" />
                  </TouchableHighlight>
                  <Text style={styles.TextCard}>Upload File</Text>
                </View>
              </View>

              <Text style={styles.title}>Other</Text>

              <View style={styles.CardSection}>
                <View style={styles.CardElements}>
                  <TouchableHighlight underlayColor='#3A51C9' style={styles.ContainerIconReverse} onPress={ () => navigation.navigate('Password')}>
                    <Icon name="shield" size={26} color="white" />
                  </TouchableHighlight>
                  <Text style={styles.TextCard}>Password Manager</Text>
                </View>

                <View style={styles.CardElements}>
                  <TouchableHighlight underlayColor='#3A51C9' style={styles.ContainerIconReverse}>
                    <Icon name="grid" size={26} color="white" />
                  </TouchableHighlight>
                  <Text style={styles.TextCard}>Album</Text>
                </View>

                <View style={styles.CardElements}>
                  <TouchableHighlight underlayColor='#3A51C9' style={styles.ContainerIconReverse}>
                    <Icon name="folder" size={26} color="white" />
                  </TouchableHighlight>
                  <Text style={styles.TextCard}>Folder</Text>
                </View>
              </View>
  
            </ScrollView>
            <BottomBar style={styles.footer} navigation={navigation} />
        </View>

        
        
    );
  }

  {
    /*<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Dashboard Screen Logged In View</Text>
    <Text>User: {user.email}</Text>
    <Text>User from Server: {name}</Text>
    <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
  
    </View>
    
    width: 156px;
    height: 63px;
    border-radius: 5px;
    background: #4158d0;
    box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.07);

fontFamily: Montserrat,
fontWeight: "bold",
fontSize: 10,
color: "#3f3d56",
opacity: .78,


    
    */
    }