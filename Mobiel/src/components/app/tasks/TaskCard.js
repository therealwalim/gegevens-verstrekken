import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

export default function TaskCard({item}) {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.secondContainer}>
                    <View style={styles.TextContainer}>
                        <Text style={styles.TextTitle}>{item.title}</Text>
                        <Text style={styles.TextDescription}>Description</Text>
                    </View>
                </View>
                <Text style={styles.message}>
                    {item.content}
                </Text>
            </View>
            <View style={styles.btnContainer}>
                
                <TouchableHighlight style={styles.btn}>
                    <Icon name="trash-2" size={15} color="#37F088" onPress={() => console.log(item.id)}/>
                </TouchableHighlight>

                <TouchableHighlight style={styles.btn}>
                    <Icon name="edit" size={15} color="#37F088" />
                </TouchableHighlight>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: '#37F088',
        elevation: 2,
        borderRadius: 5,
        marginTop:5,
        marginBottom: 5,
        flexDirection: "column",
        justifyContent: "space-evenly"

    },secondContainer:{
        flexDirection: "row",
        alignItems: "center",

    },TextTitle:{
        fontFamily: "Open Sans",
        fontWeight: "bold",
        fontSize: 16,
        color: '#fff',
    },TextDescription:{
        fontFamily: "Open Sans",
        fontSize: 15,
        color: '#fff',

    },message:{
        fontFamily: "Open Sans",
        fontSize: 14,
        color: '#fff',
        marginTop: 5
    },btnContainer:{
        flexDirection: "row-reverse",
    },btn:{
        width: 35,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
        borderRadius: 5,
        marginLeft: 5,
        alignSelf: "flex-end",
        marginTop: 10,
    }
})
