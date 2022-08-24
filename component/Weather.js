import React from "react";
import { ImageBackground, Text } from "react-native";
import Forecast from "./Forcast";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
        <ImageBackground source={require('../bg.png')} style={styles.backdrop}>
            <Text>zip Code</Text>
            <Text>{props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
});
   