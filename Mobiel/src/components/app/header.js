import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";

var width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width:width,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 24,
    },avatar:{
        alignSelf: 'flex-end',
    },logo:{
        
    },name:{
        fontFamily:'Montserrat',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#3F3D56',
        marginTop: 15,
        marginBottom: 3,
    },plan:{
        fontFamily:'Montserrat',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#B2BDC8',
    }
})

export default function Header({name}){
        return (
            <View style={styles.container}>
                <View>
                    <Image style={styles.logo} source={require('../../assets/img/logo-small.png')} />
                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.plan}>Basic Plan</Text>
                    </View>
                </View>
                <View>
                    <Image style={styles.avatar} source={require('../../assets/img/avatar.png')} />
                </View>
            </View>
        );
    }
