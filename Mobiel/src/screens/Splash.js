import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';

const styles = StyleSheet.create({
    lottie: {
      height: 280,
      width: 280,
    }
  });

export default class Splash extends Component {
    constructor(props) {
        super();
    }

    

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems: 'center',
                    backgroundColor: '#4158D0'
                }}
            >
                <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
                <LottieView
                    source={require('../assets/splash.json')}
                    autoPlay
                    loop={false}
                    speed={2}
                    style={styles.lottie}
                    imageAssetsFolder={'lottie/image'}
                />
            </View>
        )
    }
}