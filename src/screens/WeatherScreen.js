import { StatusBar, StyleSheet, Text, View, ImageBackground, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { TextInput } from 'react-native-paper'


const WeatherScreen = () => {
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])


    const fetchDataHandler = useCallback(async () => {
        setLoading(true);
        setInput('')
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=9d9444b9e4248b95e4c4f44686d78f75`, {
                method: "GET"
            })
            const resData = await response.json()
            setData(resData)
            setLoading(false)
            console.log(resData)
        } catch (err) {
            console.error(err)
        }
    }, [input]);
    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor='#484467' />
            <View style={styles.root}>
                <ImageBackground
                    source={require('../assets/images/night2.jpg')}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <View>
                        <TextInput
                            label='Enter City Name ...'
                            selectionColor="white"
                            activeOutlineColor="white"
                            mode='outlined'
                            theme={{
                                colors: {
                                    placeholder: 'white', text: 'white',
                                    underlineColor: 'transparent', background: '#003489'
                                }
                            }}
                            onChangeText={text => setInput(text)}
                            value={input}
                            style={styles.textInput}
                        />
                        <TouchableOpacity
                            onPress={fetchDataHandler}
                            style={styles.btn}>
                            <Text style={{ color: 'white' }}>Search</Text>
                        </TouchableOpacity>

                    </View>
                    {
                        loading && (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <ActivityIndicator size='large' color='#000' />
                            </View>
                        )}
                    {
                        data && (
                            <View style={styles.infoView}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{data?.weather?.map(v => v.description)}</Text>
                                <Text style={styles.infoText}>
                                    {data ? data.name : null}
                                    {data.name ? ", " : null}
                                    {data ? data.sys?.country : null}
                                </Text>
                                <Text style={styles.dateText}>{new Date().toLocaleString()}</Text>
                                <Text style={styles.tempText}>
                                    {data.main?.temp ? Math.round(data?.main?.temp) : null}
                                    {data.main?.temp ? " °C" : null}
                                </Text>
                                <Text style={styles.minMaxTemp}>
                                    {data.name ? "Min " : null}
                                    {data?.main?.temp_min ? Math.round(data?.main?.temp_min) : null}
                                    {data.main?.temp_min ? " °C / " : null}
                                    {data.name ? "Max " : null}
                                    {data?.main?.temp_max ? Math.round(data?.main?.temp_max) : null}
                                    {data.main?.temp_max ? " °C" : null}
                                </Text>
                            </View>
                        )

                    }
                </ImageBackground>
            </View>
        </>
    )
}

export default WeatherScreen

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    image: {
        flex: 1,
        flexDirection: 'column',
    },
    textInput: {
        paddingHorizontal: 20,
        marginVertical: 30,
        marginHorizontal: 20,
        backgroundColor: "rgba(223, 84, 64,0.0)",
        backgroundColor: "transparent",
        fontSize: 16,
        borderTopColor: 'black'
    },
    btn: {
        backgroundColor: 'tomato',
        alignItems: 'center',
        width: '30%',
        height: 40,
        justifyContent: "center",
        alignSelf: 'center',
        borderRadius: 8,
        marginBottom: 10
    },
    infoView: {
        alignItems: 'center',
        elevation: 1,
        backgroundColor: 'rgba(26,26,26,0.5)',
        width: '80%',
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        padding: 15
    },
    infoText: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold'
    },
    dateText: {
        color: 'white',
        fontSize: 22,
        marginVertical: 10
    },
    tempText: {
        fontSize: 45,
        color: 'white',
        marginVertical: 10
    },
    minMaxTemp: {
        color: 'white',
        fontSize: 22,
        marginVertical: 10,
        fontWeight: '500'
    }
})