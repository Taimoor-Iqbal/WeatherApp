import React, { useEffect } from 'react'
import { View, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'

const SplashScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('fetch')
        }, 2500);
    }, [])

    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor='#e8e8e8' />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <LottieView
                    style={{ width: '100%', height: '100%', resizeMode: "contain" }}
                    source={require('../assets/splash.json')}
                    autoPlay
                />

            </View>
        </>
    )
}

export default SplashScreen