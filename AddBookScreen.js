import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddBookScreen = ({ navigation, route }) => {
    const [title, setTitle] = useState('');
    const [isbn, setIsbn] = useState('');
    const [image, setImage] = useState('');
    const [copies, setCopies] = useState('1');

    const saveBook = async () => {
        const newBook = { title, isbn, image, copies: parseInt(copies) };
        const books = [...route.params.books, newBook];
        await AsyncStorage.setItem('books', JSON.stringify(books));
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text>Title:</Text>
            <TextInput style={styles.input} onChangeText={setTitle} />
            <Text>ISBN:</Text>
            <TextInput style={styles.input} onChangeText={setIsbn} />
            <Text>Image URL:</Text>
            <TextInput style={styles.input} onChangeText={setImage} />
            <Text>Copies Owned:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={setCopies}
            />
            <Button title="Save" onPress={saveBook} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    input: {
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
        borderRadius: 5,
    },
});

export default AddBookScreen;
