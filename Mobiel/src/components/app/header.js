import React, { useContext }  from 'react'
import { Text, View, Image, StyleSheet, Dimensions} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AuthContext } from "../../providers/AuthProvider";

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
        width: 48,
        height: 48,
        borderRadius: 200,
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

export default function Header({name, navigation}){
    const { user } = useContext(AuthContext)
    const avatarimg = `http://10.0.2.2:8000/upload/avatars/${user.photo}`;
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
                    <TouchableWithoutFeedback onPress={ () => navigation.navigate('Profile')}>
                        <Image style={styles.avatar} source={{ uri: avatarimg,}} />
                        
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
