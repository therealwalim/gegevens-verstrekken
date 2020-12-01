import React, { Component, useContext }  from 'react'
import { Text, View, Image, StyleSheet, Dimensions, ImageBackground} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AuthContext } from "../../providers/AuthProvider";

var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        width:width,
        justifyContent: 'space-between',
        paddingLeft: 24,
        paddingTop: 24,
        paddingRight: 24,
        backgroundColor: "blue"
    },avatar:{
        position: "absolute",
        top: 120,
        alignSelf: "center",
        margin: 0,
        padding: 0,
        width:70,
        height:70,
        borderRadius: 200,
        zIndex: 200,
    },logo:{
        
    },name:{
        fontFamily:'Montserrat',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        marginTop: 15,
        marginBottom: 3,
    },plan:{
        fontFamily:'Montserrat',
        fontWeight: 'bold',
        fontSize: 14,
        color: 'white',
    },image:{
        flex: 1,
        position: 'absolute',
        width: width,
    }
})


export default function HeaderProfile({name, navigation}){
    const { user } = useContext(AuthContext)
    const avatarimg = `http://10.0.2.2:8000/upload/avatars/${user.photo}`;
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/img/overlay.png')} style={styles.image} />
                <View style={styles.profile}>
                    <Image style={styles.logo} source={require('../../assets/img/logo-light-small.png')} />
                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.plan}>Basic Plan</Text>
                    </View>
                </View>
                <Image style={styles.avatar} source={{ uri: avatarimg,}} />
            </View>
        );
    }

    {
        /* 
        position: "absolute",
        top: 115,
        alignSelf: "center",
        margin: 0,
        padding: 0,
        */
    }