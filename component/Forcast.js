import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function Forecast(props) {
    return (
        <View style={styles.TextForecast}>
            <Text style={styles.Text}>{props.main}</Text>
            <Text style={styles.Text1}>{props.description}</Text>
            <Text style={styles.Text1}>{props.temp}</Text>
            <Text style={styles.Text}>°C</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    TextForecast: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'flex-start',
        backgroundColor: '#00ACC1',
        alignSelf: 'stretch'
    },
    Text: {
        fontWeight: "400",
        fontSize: 30,
        color: 'white'
    },
    Text1: {
        fontSize: 15,
        color: 'white'
    }
});