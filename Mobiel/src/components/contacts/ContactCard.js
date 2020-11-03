import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

export default function ContactCard() {
    return (
        <View style={styles.container}>
            <Icon name="users" size={27} color="white" />
            <View style={styles.TextContainer}>
                <Text style={styles.Text}>Lomé Saka</Text>
                <Text style={styles.Text}>+213 (0) 384639293</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: '#4158d0',
        elevation: 2,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        marginTop:5,
        marginBottom: 5,

    },TextContainer:{
        marginLeft: 25,
    },Text:{
        fontFamily: "Open Sans",
        fontWeight: "bold",
        fontSize: 14,
        color: '#fff',

    },
})
