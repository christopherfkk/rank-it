import {Button, StyleSheet, TextInput} from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import {Text, View} from '../../components/Themed';
import React, {useState} from "react";

export default function TabOneScreen() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [data, setData] = useState('')

    const handleSubmit = () => {
        fetch('http://192.168.31.202:8000/', {
            method: "POST",
            body: JSON.stringify({'name': name, 'age': age}),
        })
            .then(response => response.json())
            .then(data => setData(data.message))
            .catch(error => {
                // Handle the error.
                console.error(error);
            }), []
    };

    const handleClear = () => {
        setData('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab One</Text>
            <Text>Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                onChangeText={setName}
            />
            <Text>Age:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your age"
                onChangeText={setAge}
            />
            <Button
                title="Submit"
                onPress={handleSubmit}
            />
            <Button title="Clear Data" onPress={handleClear}/>
            {data && (
                <Text>POST data response: {data}</Text>
            )}
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <EditScreenInfo path="app/(tabs)/index.tsx"/>
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
    input: {
      color: 'white'
    }
});
