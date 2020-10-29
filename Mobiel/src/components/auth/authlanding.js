import React, { useContext, useState } from "react";
import { View, Text, Image, StyleSheet } from 'react-native'

const assets = require('../../assets/assets')

const styles = StyleSheet.create({
    image: {
      
    },logo:{
        alignSelf: "center",
        
    },logocontainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingTop: 20,
    },imagecontainer:{
        paddingRight: 40,
      paddingTop: 20,
    },
  });

export default function AuthLanding(props) {
    return (
        <View>
            <View style={styles.logocontainer}>
                <Image style={styles.logo} source={require('../../assets/img/logo.png')}/>
            </View>
            <View style={styles.imagecontainer}>
                <Image style={styles.image} source={assets[props.imagePath]}/>
            </View>
        </View>
    );
}
