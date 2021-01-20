import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

export default function MessageCard({item, token, navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.secondContainer}>
                <Icon name="message-circle" size={27} color="white" />
                <View style={styles.TextContainer}>
                    <Text style={styles.Text}>{item.sender}</Text>
                </View>
            </View>
            <Text style={styles.message}>
                {item.content}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: '#F1C40F',
        elevation: 2,
        borderRadius: 5,
        marginTop:5,
        marginBottom: 5,
        flexDirection: "column",
        justifyContent: "space-evenly"

    },secondContainer:{
        flexDirection: "row",
        alignItems: "center",

    },TextContainer:{
        marginLeft: 10,
    },Text:{
        fontFamily: "Open Sans",
        fontWeight: "bold",
        fontSize: 14,
        color: '#fff',

    },message:{
        fontFamily: "Open Sans",
        fontSize: 14,
        color: '#fff',
        marginTop: 5
    }
})
