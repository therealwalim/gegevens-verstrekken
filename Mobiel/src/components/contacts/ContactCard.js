import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

export default function ContactCard({item}) {
    return (
        <View style={styles.container}>
            <Icon name="users" size={27} color="white" />
            <View style={styles.TextContainer}>
                <Text style={styles.Text}>{item.givenName}</Text>
                {item.phoneNumbers.map(phone=>(
                    <Text style={styles.Text}>{phone.number}</Text>
                ))}
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
