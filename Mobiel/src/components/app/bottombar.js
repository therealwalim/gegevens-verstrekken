import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
    footer:{
        backgroundColor: '#4158D0',
        padding: 25,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        elevation: 2,
        shadowColor: '#4158D0',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around'
    },button:{
        opacity: 0.4
    },buttonActive: {
        opacity: 1
    }
})


export default function BottomBar({ navigation }) {
    return (
        <View style ={styles.footer}>
            <TouchableHighlight style={styles.button} onPress={ () => navigation.navigate('Settings')}>
                <Icon name="users" size={22} color="white" />
            </TouchableHighlight>

            <TouchableHighlight style={styles.button} onPress={ () => navigation.navigate('Settings')}>
                <Icon name="mail" size={22} color="white" />
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonActive} onPress={ () => navigation.navigate('Home')}>
                <Icon name="home" size={22} color="white" />
            </TouchableHighlight>

            <TouchableHighlight style={styles.button} onPress={ () => navigation.navigate('Settings')}>
                <Icon name="check-circle" size={22} color="white" />
            </TouchableHighlight>

            <TouchableHighlight style={styles.button} onPress={ () => navigation.navigate('Settings')}>
                <Icon name="settings" size={22} color="white" />
            </TouchableHighlight>
        </View>
    );
}
