import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Button, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const storedBooks = await AsyncStorage.getItem('books');
        if (storedBooks) {
            setBooks(JSON.parse(storedBooks));
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', fetchBooks);
        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <FlatList
                data={books}
                keyExtractor={(item) => item.isbn}
                renderItem={({ item }) => (
                    <View style={styles.bookItem}>
                        <Image source={{ uri: item.image }} style={styles.bookImage} />
                        <View>
                            <Text style={styles.bookTitle}>{item.title}</Text>
                            <Text>ISBN: {item.isbn}</Text>
                            <Text>Copies Owned: {item.copies}</Text>
                            <Button
                                title="Edit"
                                onPress={() =>
                                    navigation.navigate('EditBook', { book: item, books })
                                }
                            />
                        </View>
                    </View>
                )}
            />
            <Button
                title="Add Book"
                onPress={() => navigation.navigate('AddBook', { books })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    bookItem: {
        flexDirection: 'row',
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    bookImage: {
        width: 50,
        height: 75,
        marginRight: 10,
    },
    bookTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
