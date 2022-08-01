
<View style={{ alignItems: 'center' }}>
    <Text style={{ ...styles.headerText, color: textColor, fontFamily: 'Lato-Regular', fontSize: 18 }}>{new Date().toLocaleString().slice(0, 20)} </Text>
    <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold', fontSize: 46 }}>{name}, {country}</Text>
    <View style={{ position: 'absolute', flexDirection: 'row', alignItems: 'center', top: 90, }}>
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
        <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold' }}>{main}</Text>
    </View>
    <Text style={{ ...styles.headerText, color: textColor, marginTop: 40 }}>{Math.round(temp)} °C</Text>
</View>