import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native';
import SearchBar from './SearchBar';
import { haze, rainy, snow, sunny, cloud, mist, therderstorm } from '../assets/backgroundImages/index';
import LottieView from 'lottie-react-native';

export default function Weather({ weatherData, fetchWeatherData }) {

    const [backgroundImage, setBackgroundImage] = useState(null);

    const { weather,
        name,
        sys: { country },
        main: { temp, humidity, temp_min, temp_max, pressure },
        wind: { speed }
    } = weatherData;
    const [{ main, description }] = weather;



    function getBackgroundImg(weather) {
        if (weather === 'Snow') return snow
        if (weather === 'Clear') return sunny
        if (weather === 'Rain') return rainy
        if (weather === 'Haze') return haze
        if (weather === 'Clouds') return cloud
        if (weather === 'Mist') return mist
        if (weather === 'Therderstorm') return therderstorm
        return haze;
    }
    useEffect(() => {
        setBackgroundImage(getBackgroundImg(main));
    }, [weatherData])




    let textColor = backgroundImage !== sunny ? 'white' : 'black'
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <ImageBackground
                    source={backgroundImage}
                    style={styles.backgroundImg}
                    resizeMode='cover'
                >
                    <SearchBar fetchWeatherData={fetchWeatherData} />
                    <View style={{ marginTop: 10 }}>
                        <View style={styles.temperatureContainer}>
                            <View style={styles.temperature}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    {

                                        weather[0].main === 'Rain' ?
                                            <View style={{ marginTop: 10, paddingRight: 15 }}>
                                                <LottieView
                                                    style={{ width: 50, height: 50, resizeMode: "contain" }}
                                                    source={require('../assets/lottie/rainy.json')}
                                                    autoPlay
                                                />
                                            </View>

                                            :
                                            weather[0].main === 'Clouds' ?
                                                <>
                                                    <View style={{ marginTop: 10, paddingRight: 15 }}>
                                                        <LottieView
                                                            style={{ width: 50, height: 50, resizeMode: "contain" }}
                                                            source={require('../assets/lottie/cloudy.json')}
                                                            autoPlay
                                                        />
                                                    </View>
                                                </>
                                                :
                                                weather[0].main === 'Snow' ?
                                                    <>
                                                        <View style={{ marginTop: 10, paddingRight: 15 }}>
                                                            <LottieView
                                                                style={{ width: 50, height: 50, resizeMode: "contain" }}
                                                                source={require('../assets/lottie/snow.json')}
                                                                autoPlay
                                                            />
                                                        </View>
                                                    </>
                                                    :
                                                    weather[0].main === 'Clear' ?
                                                        <>
                                                            <View style={{ marginTop: 10, paddingRight: 15 }}>
                                                                <LottieView
                                                                    style={{ width: 50, height: 50, resizeMode: "contain" }}
                                                                    source={require('../assets/lottie/sunny.json')}
                                                                    autoPlay
                                                                />
                                                            </View>
                                                        </>
                                                        :
                                                        weather[0].main === 'Mist' ?
                                                            <>
                                                                <View style={{ marginTop: 10, paddingRight: 15 }}>
                                                                    <LottieView
                                                                        style={{ width: 50, height: 50, resizeMode: "contain" }}
                                                                        source={require('../assets/lottie/mist.json')}
                                                                        autoPlay
                                                                    />
                                                                </View>
                                                            </>
                                                            :
                                                            weather[0].main === 'Therderstorm' ?
                                                                <>
                                                                    <View style={{ marginTop: 10, paddingRight: 15 }}>
                                                                        <LottieView
                                                                            style={{ width: 50, height: 50, resizeMode: "contain" }}
                                                                            source={require('../assets/lottie/thunderstorm.json')}
                                                                            autoPlay
                                                                        />
                                                                    </View>
                                                                </>
                                                                :
                                                                weather[0].main === 'Therderstorm' ?
                                                                    <>
                                                                        <View style={{ marginTop: 10, paddingRight: 15 }}>
                                                                            <LottieView
                                                                                style={{ width: 50, height: 50, resizeMode: "contain" }}
                                                                                source={require('../assets/lottie/thunderstorm.json')}
                                                                                autoPlay
                                                                            />
                                                                        </View>
                                                                    </>
                                                                    :
                                                                    null

                                    }
                                    <Text style={{ color: textColor, fontSize: 24 }}>{main}</Text>
                                </View>
                            </View>
                            <View style={styles.naming}>
                                <Text style={{ fontSize: 56, color: textColor }}>{Math.round(temp)}
                                    <Text style={{ fontSize: 40 }}>°C</Text>
                                </Text>
                                <Text style={{ fontSize: 26, color: textColor }}>{name}, {country}</Text>
                                <Text style={{ fontSize: 16, color: textColor, marginTop: 17 }}>{new Date().toLocaleDateString()}, {new Date().toLocaleTimeString()}</Text>

                            </View>
                        </View>
                    </View>

                    <View style={styles.extraInfo}>

                        <View style={styles.info}>
                            <Text style={{ fontSize: 22, color: 'white' }}>Humidity</Text>
                            <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', marginTop: 5 }}>{humidity} %</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={{ fontSize: 22, color: 'white' }}>Wind Speed</Text>
                            <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', marginTop: 5 }}>{speed} m/s</Text>
                        </View>

                    </View>
                    <View style={styles.extraInfo}>

                        <View style={styles.info}>
                            <Text style={{ fontSize: 22, color: 'white' }}>Pressure</Text>
                            <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', marginTop: 5 }}>{pressure} ATM</Text>
                        </View>

                        <View style={styles.info}>
                            <Text style={{ fontSize: 22, color: 'white' }}>Description</Text>
                            <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', marginTop: 5 }}>{description}</Text>
                        </View>

                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    backgroundImg: {
        flex: 1,
        width: Dimensions.get('screen').width
    },
    temperatureContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0, 0.3)',
        height: 210,
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center'
    },
    temperature: {
        alignSelf: 'center',
        alignItems: 'center',
        width: '45%',
    },
    headerText: {
        fontSize: 36,
        marginTop: 10,
    },
    extraInfo: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
        padding: 10
    },
    info: {
        width: Dimensions.get('screen').width / 2.5,
        backgroundColor: 'rgba(0,0,0, 0.3)',
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center'
    }
});
