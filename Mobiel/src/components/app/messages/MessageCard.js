import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

export default function MessageCard() {
    return (
        <View style={styles.container}>
            <View style={styles.secondContainer}>
                <Icon name="users" size={27} color="white" />
                <View style={styles.TextContainer}>
                    <Text style={styles.Text}>Lomé Saka</Text>
                    <Text style={styles.Text}>+213 (0) 384639293</Text>
                </View>
            </View>
            <Text style={styles.message}>
                Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la cænogenèse de l"être dont il est question dans la cause ambiguë entendue à Moÿ, dans un capharnaüm qui, pense-t-il, diminue çà et là la qualité de son œuvre. Prouvez, beau juge, que le fameux…
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
        marginLeft: 25,
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
