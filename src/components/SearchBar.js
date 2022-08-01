import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { TextInput, } from 'react-native-paper'
import AntDesign from 'react-native-vector-icons/AntDesign';



export default function SearchBar({ fetchWeatherData }) {

    const [cityName, setCityName] = useState('');

    return (
        <View style={styles.searchBar}>
            <View style={{ width: '100%', alignItems: 'center', alignSelf: "center" }}>
                <TextInput
                    style={{
                        // backgroundColor: "red",
                        width: '85%',
                        borderColor: 'transparent'
                    }}
                    theme={{
                        colors: {
                            background: 'rgba(255,255,255,0.7)'
                        }
                    }}
                    label='Enter City name'
                    outlineColor="white"
                    activeUnderlineColor="black"

                    // mode='outlined'
                    value={cityName}
                    onChangeText={(text) => setCityName(text)}
                />

                <TouchableOpacity
                    style={{ borderWidth: 1, borderColor: 'black', padding: 8, borderRadius: 8, position: 'absolute', top: 9, right: 35 }}
                >
                    <AntDesign name='search1' size={28} color="black" onPress={() => fetchWeatherData(cityName)} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 35,
        width: Dimensions.get('screen').width,
        paddingVertical: 10,
        backgroundColor: 'transparent',
    }
})