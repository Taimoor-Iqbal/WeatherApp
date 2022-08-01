import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Weather from '../components/Weather';
import SearchBar from '../components/SearchBar';



export default function FetchApi() {

    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const fetchWeatherData = async (cityName) => {
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=46a9246bebba16d42b36aac3fc3ba8af`
        try {
            setLoaded(true)
            const response = await fetch(API);
            const data = await response.json();
            setWeatherData(data);
            setLoaded(false);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchWeatherData('Lahore');
    }, [])


    if (loaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator color='gray' size={36} />
            </View>

        )
    }

    else if (weatherData === null) {
        return (
            <View style={styles.container}>
                <SearchBar fetchWeatherData={fetchWeatherData} />
                <Text style={styles.primaryText}>City Not Found! Try Different City</Text>
            </View>
        )
    }

    return (
        <>
            <View style={styles.container}>
                <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryText: {
        margin: 20,
        fontSize: 28
    }
});