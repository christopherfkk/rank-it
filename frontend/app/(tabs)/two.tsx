import {StyleSheet, Button} from 'react-native';
import React, {useState, useEffect} from 'react';

import EditScreenInfo from '../../components/EditScreenInfo';
import {Text, View} from '../../components/Themed';

export default function TabTwoScreen() {
    const [data, setData] = useState(null);

    const handleClick = () => {
        fetch('http://192.168.31.202:8000/', {
            method: "GET"
            })
            .then(response => response.json())
            .then(data => setData(data.message))
            .catch(error => {
                // Handle the error.
                console.error(error);
            }), []
    };

    const handleClear = () => {
        setData(null)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>
            <Button title="Get Data" onPress={handleClick}/>
            <Button title="Clear" onPress={handleClear}/>
            {data && (
                <Text>GET data response: {data}</Text>
            )}
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <EditScreenInfo path="app/(tabs)/two.tsx"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
