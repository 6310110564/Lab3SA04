import React from "react";
import { FlatList, View, Text, TouchableHighlight, ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', { zipCode: code})
    }}>
    <View style={styles.ZipItem}>
        <Text>{place}</Text>
        <Text>{code}</Text>
    </View>
    </TouchableHighlight>
)

export default function zipCodeScreen() {
    const navigation = useNavigation()
    return(
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
    )
}

const styles = StyleSheet.create({
    ZipItem: {
        flex: 1,
        backgroundColor: '#00ACC1',
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    ZipPlace: {
        flex: 1,   
    },
    ZipCode: {
        flex: 1,
    },
})