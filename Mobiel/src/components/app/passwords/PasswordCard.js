import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';
import BenjaminButton from 'react-native-vector-icons/MaterialCommunityIcons';

const service = require('../../../assets/service')

export default function PasswordCard({site}) {

    const [hidePass, setHidePass] = useState(true);

    return (
        <View style={{
            padding: 20,
            backgroundColor: service[site].color,
            elevation: 2,
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop:5,
            marginBottom: 5,
        }}>
            <Icon style={styles.service} name={service[site].name} size={27} color="white" />
            <View style={styles.TextContainer}>
                <Text style={styles.Text}>k.adesida@provi.data</Text>
                <TextInput
                style={styles.Password}
                value={service[site].name}
                editable={false} 
                secureTextEntry={hidePass ? true : false}
                />
            </View>
            <TouchableHighlight style={styles.icon}>
                <BenjaminButton name={hidePass ? 'eye-off' : 'eye'} size={22} color="white" onPress={() => setHidePass(!hidePass)} />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    TextContainer:{
        flexDirection: "column",
        flex: 4
    },Text:{
        fontFamily: "Open Sans",
        fontWeight: "bold",
        fontSize: 15,
        color: '#fff',

    },service:{
        flex: 1,
    },
    icon:{
    }, Password:{
        padding: 0,
        margin:0,
        color: 'white',
    }
})

{
    /* 

    width: 317px;
    height: 70px;
    border-radius: 5px;
    background: linear-gradient(#0882de 0%, #28a2f3 100%);
    box-shadow: 0px 0px 16px rgba(65, 88, 208, 0.19);

    */
}