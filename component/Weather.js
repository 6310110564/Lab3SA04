import React from "react";
import { ImageBackground, Text } from "react-native";
import Forecast from "./Forcast";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })
    return (
        <ImageBackground source={require('../bg.png')} style={styles.backdrop}>
            <Text style={styles.Text}>zip Code</Text>
            <Text style={styles.Text}>{props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'flex-start',
        paddingRight: 1,
        width: '100%',
        height: '100%',
    },
    Text: { 
        fontSize: 15,
        color: 'white'
    }
});
   