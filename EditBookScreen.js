import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditBookScreen = ({ navigation, route }) => {
    const { book, books } = route.params;
    const [copies, setCopies] = useState(book.copies.toString());

    const saveChanges = async () => {
        const updatedBooks = books.map((b) =>
            b.isbn === book.isbn ? { ...b, copies: parseInt(copies) } : b
        );
        await AsyncStorage.setItem('books', JSON.stringify(updatedBooks));
        navigation.navigate('Home');
    };

    const deleteBook = async () => {
        const updatedBooks = books.filter((b) => b.isbn !== book.isbn);
        await AsyncStorage.setItem('books', JSON.stringify(updatedBooks));
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text>Title: {book.title}</Text>
            <Text>ISBN: {book.isbn}</Text>
            <Text>Copies Owned:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={copies}
                onChangeText={setCopies}
            />
            <Button title="Save" onPress={saveChanges} />
            <Button title="Delete" onPress={deleteBook} />
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

export default EditBookScreen;
