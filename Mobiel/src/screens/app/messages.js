import { AuthContext } from "../../providers/AuthProvider";
import { Button, Text, View, Image, StyleSheet, Dimensions, ScrollView, PermissionsAndroid } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
import Header from '../../components/app/header'
import BottomBar from '../../components/app/bottombar'
import { TouchableHighlight } from "react-native-gesture-handler";
import MessageCard from "../../components/app/messages/MessageCard";
import SmsAndroid from 'react-native-get-sms-android';

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
    color: '#F1C40F',
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
    const [name, setName] = useState(null);
    const [sms, setSms] = useState([]);
    const [count, setCount] = useState('');
    
/* List SMS messages matching the filter */
var filter = {
  box: '', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all

  /**
   *  the next 3 filters can work together, they are AND-ed
   *  
   *  minDate, maxDate filters work like this:
   *    - If and only if you set a maxDate, it's like executing this SQL query:
   *    "SELECT * from messages WHERE (other filters) AND date <= maxDate"
   *    - Same for minDate but with "date >= minDate"
   */
  minDate: 1554636310165, // timestamp (in milliseconds since UNIX epoch)
  maxDate: 1556277910456, // timestamp (in milliseconds since UNIX epoch)
  bodyRegex: '(.*)How are you(.*)', // content regex to match

  /** the next 5 filters should NOT be used together, they are OR-ed so pick one **/
  read: 1, // 0 for unread SMS, 1 for SMS already read
  _id: '', // specify the msg id
  thread_id: '', // specify the conversation thread_id
  address: '', // sender's phone number
  body: '', // content to match
  /** the next 2 filters can be used for pagination **/
  indexFrom: 0, // start from index 0
  maxCount: 10, // count of SMS to return each time
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
        
        SmsAndroid.list(
          JSON.stringify(filter),
          (fail) => {
            console.log('Failed with this error: ' + fail);
          },
          (count, smsList) => {
            console.log('Count: ', count);
            console.log('List: ', smsList);
            
            setCount(count);

            setSms(smsList);
            console.log(sms)
            var arr = JSON.parse(smsList);
        
            arr.forEach(function(object) {
              console.log('Object: ' + object);
              console.log('-->' + object.date);
              console.log('-->' + object.body);
            });
          },
        );
  
    }, []);
  
    return (
      
        // Header component
        <View style={styles.container}>
            <Header style={styles.header} name={user.name} navigation={navigation} />
            {/* Disconnection Button <Button title="Logout" onPress={() => logout()} /> */}
            
            <View style={styles.titleContainer}>
                <Text style={styles.title1}>Messages</Text>
                <Text style={styles.title2}>{count}</Text>
            </View>

            <ScrollView style={styles.content}>
              
              <View style={styles.CardContainer}>
                 <MessageCard />
                 
              </View>
  
            </ScrollView>
            <BottomBar style={styles.footer} navigation={navigation} />
        </View>

        
        
    );
  }

{/*

*/
}