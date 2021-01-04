import { AuthContext } from "../../providers/AuthProvider";
import { Button, Text,TextInput, View, Image, StyleSheet, Dimensions, ScrollView, StatusBar } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import Header from '../../components/app/header'
import BottomBar from '../../components/app/bottombar'
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
  },containerLog:{
    flex: 1,
    flexDirection: 'column',
    alignItems: "stretch",
    backgroundColor:'#EEEEF1',
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    height: 600,
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
  },inputarea:{
    padding: 18,
    height:200,
    textAlignVertical: 'top',
    borderRadius: 5,
    backgroundColor: '#f8f8f8',
    elevation: 1,
    marginTop: 5,
    marginBottom: 5,
  }
})


export default function AddNote({ navigation }) {
    const { user, logout } = useContext(AuthContext)
    const [name, setName] = useState(null);
  
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const SubmitPost = async (title, content) => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
      try {
        axios.post(`/api/note`, {
          title,
          content,
          user_id: user.id
        });
        console.log(`Post successfully added with: ${title} and ${content}`);
      } catch (err) {
        console.log(err);
      }
    };

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
            <Header style={styles.header} name={user.name} navigation={navigation}/>
            {/* Disconnection Button <Button title="Logout" onPress={() => logout()} /> */}
            
            <View style={styles.titleContainer}>
                <Text style={styles.title1}>Create Note</Text>
            </View>

            <ScrollView style={styles.content}>
              
                <View style={styles.containerLog}>
                        <TextInput
                            style={styles.input}
                            placeholder="Title"
                            autoCapitalize = 'none'
                            onChangeText={text => setTitle(text)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Description"
                            autoCapitalize = 'none'
                        />
                        <TextInput
                            style={styles.inputarea}
                            placeholder="Content"
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={text => setContent(text)}
                        />
                        <TouchableHighlight
                            style={styles.button}
                            onPress={() => SubmitPost(title, content)}
                        ><Text style={{color:'white',fontWeight:"bold",fontSize:15}}>Submit</Text>
                        </TouchableHighlight>
                    </View>
  
            </ScrollView>
            <BottomBar style={styles.footer} navigation={navigation} />
        </View>

        
        
    );
  }

{/*

*/
}