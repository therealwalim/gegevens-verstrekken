import React, { useContext, useState } from "react";
import { View, Text, Image, StyleSheet, Button, StatusBar } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import AuthLanding from "../../components/auth/authlanding";
import tailwind from 'tailwind-rn';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    carousel:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 10,
    },carouselTitle:{
        fontFamily:'Montserrat',
        fontWeight: "600",
        fontSize: 17,
        textAlign: 'center',
        color: '#000',
        marginBottom: 12,
    },carouselDescription:{
        fontFamily:'Montserrat',
        fontWeight: "600",
        fontSize: 14,
        textAlign: 'center',
        color: '#000',
        opacity: 0.38,
        width: 254,
        height: 54,
    },buttons:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 0,
        paddingBottom: 5,
    },
    buttoncontainer:{
        marginTop: 10,
        width: 260,
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#f8f8f8',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.05)',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 7,
        },
        shadowOpacity: 0.21,
        shadowRadius: 9.11,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttoncontainer2:{
        marginTop: 16,
        width: 260,
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#4267B2',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.05)',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 7,
        },
        shadowOpacity: 0.21,
        shadowRadius: 9.11,
        elevation: 3,
        alignItems: 'center',
        flexDirection: 'row',
    },icon:{
        marginRight: 20,
    }
  });

export default function landing({ navigation }) {
    return (
        
        <ScrollView>
            <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />
            <View>
                <AuthLanding imagePath={'landingImage'} />
                <View style={styles.carousel}>
                    <Text style={styles.carouselTitle}>Contacts</Text>
                    <Text style={styles.carouselDescription}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy sed diam nonumy</Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.buttoncontainer} onPress={() => navigation.navigate('Login')}>
                        <Image style={styles.icon} source={require('../../assets/img/mail-icon.png')} />
                        <Text style={tailwind('pr-5 text-black font-bold')}>Register with e-mail</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttoncontainer2}>
                        <Image style={styles.icon} source={require('../../assets/img/fb-icon.png')} />
                        <Text style={styles.spacingButton} style={tailwind('text-white font-bold')}>Connect with Facebook</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );

    
}

{/*
CSS :
width: 224px;
height: 48px;
border-radius: 5px;
background: #f8f8f8;
border: 1px solid rgba(0, 0, 0, 0.05);
box-shadow: 0px 1px 14px rgba(0, 0, 0, 0.1);

*/}