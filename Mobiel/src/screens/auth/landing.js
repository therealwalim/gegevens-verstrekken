import React, { useContext, useState } from "react";
import { View, Text, Image, StyleSheet } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

const styles = StyleSheet.create({
    image: {
      right: 20,
      top: 100,
    },logo:{
        alignSelf: "center",
        top: 40,
    },logocontainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    }
  });

export default function landing({ navigation }) {
    return (
        <View>
            <View style={styles.logocontainer}>
                <Image style={styles.logo} source={require('../../assets/img/logo.png')}/>
            </View>
            <Image style={styles.image} source={require('../../assets/img/landing.png')}
      />
        </View>
        
    );

    
}
