import React, {useContext} from 'react'
import { AuthContext } from "../../providers/AuthProvider";
import { Button, Text, View } from "react-native";

export default function Settings({ navigation }) {
    const { user, logout } = useContext(AuthContext)
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <Text>User: {user.email}</Text>
        <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
        <Button title="Logout" onPress={() => logout()} />
      </View>
    );
  }