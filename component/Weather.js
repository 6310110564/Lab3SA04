import React from "react";
import { ImageBackground, Text, StyleSheet } from "react-native";
import Forecast from "./Forcast";
import { useState, useEffect } from "react";

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`)
    if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=f9aca8dc6018b007db374f7508d4a44d`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])

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
   