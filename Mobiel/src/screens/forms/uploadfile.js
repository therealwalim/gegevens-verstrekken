import { AuthContext } from "../../providers/AuthProvider";
import { Button, Text,TextInput, View, Image, StyleSheet, Dimensions, ScrollView, StatusBar } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import Header from '../../components/app/header'
import BottomBar from '../../components/app/bottombar'
import { TouchableHighlight } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Feather';
import { color } from "react-native-reanimated";
import DocumentPicker from 'react-native-document-picker';

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
  },inputupload:{
    width: width,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },icon:{
      padding: 18,
      backgroundColor: '#4158D0',
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
  },inputfile:{
    width: 301,
    padding: 18,
    backgroundColor: '#f8f8f8',
    elevation: 1,
    marginTop: 5,
    marginBottom: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#4F69F3',
    color: 'white'
  },
})

export default function UploadFile({ navigation }) {
    const { user, logout } = useContext(AuthContext)
    const [name, setName] = useState(null);
    const [file, setFile] = useState('Upload file');
    const [folder, setFolder] = useState('');

    const uploadImage = async () => {
      // Check if any file is selected or not
      if (file != null) {
        console.log("ça marche ici");
        // If file selected then create FormData
        const fileToUpload = file;
        const data = new FormData();
        data.append('folderName', folder);
        data.append('fileName', fileToUpload);
        // Please change file upload URL
        let res = await fetch(
          `http://10.0.2.2:8000/api/file`,
          {
            method: 'post',
            body: data,
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${user.token}`
            },
          }
        );
        let responseJson = await res.json();
        if (responseJson.code == 200) {
          console.log('Upload Successful');
        }
      } else {
        // If no file selected the show alert
        console.log('Please Select File first');
      }
    };

    const selectFile = async () => {
      // Opening Document Picker to select one file
      try {
        const res = await DocumentPicker.pick({
          // Provide which type of file you want user to pick
          type: [DocumentPicker.types.allFiles],
        });
        // Printing the log realted to the file
        console.log('res : ' + JSON.stringify(res));
        // Setting the state to show single file attributes
        setFile(res);
      } catch (err) {
        setFile(null);
        // Handling any exception (If any)
        if (DocumentPicker.isCancel(err)) {
          // If user canceled the document selection
          alert('Canceled');
        } else {
          // For Unknown Error
          alert('Unknown Error: ' + JSON.stringify(err));
          throw err;
        }
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

        console.log(file);
  
    }, []);
  
    return (
      
        // Header component
        <View style={styles.container}>
            <Header style={styles.header} name={user.name} navigation={navigation}/>
            {/* Disconnection Button <Button title="Logout" onPress={() => logout()} /> */}
            
            <View style={styles.titleContainer}>
                <Text style={styles.title1}>Upload file</Text>
            </View>

            <ScrollView style={styles.content}>
              
                <View style={styles.containerLog}>
                        <View style={styles.inputupload}>
                            <Icon style={styles.icon} name="upload" size={26} color="white" onPress={selectFile} />
                            <TextInput
                                value={file.name}
                                editable={false}
                                autoCapitalize = 'none'
                                style={styles.inputfile}
                            />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Folder Name"
                            autoCapitalize = 'none'
                            onChangeText={text => setFolder(text)}
                        />
                        <TouchableHighlight
                            style={styles.button}
                            onPress={uploadImage}
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