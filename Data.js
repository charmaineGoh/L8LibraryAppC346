import AsyncStorage from '@react-native-async-storage/async-storage';


export const defaultBooks = [
    {
        title: 'Kings of the Wyld',
        isbn: '9780356509020',
        image: 'https://m.media-amazon.com/images/I/51NwNZmd7L._SY344_BO1,204,203,200_.jpg',
        copies: 2,
    },
    {
        title: 'Lies of Locke Lamora',
        isbn: '9780420667799',
        image: 'https://m.media-amazon.com/images/I/61Ono8V8kgL._SY344_BO1,204,203,200_.jpg',
        copies: 1,
    },
];


export const initializeData = async () => {
    const storedBooks = await AsyncStorage.getItem('books');
    if (!storedBooks) {
        await AsyncStorage.setItem('books', JSON.stringify(defaultBooks));
    }
};
export const fetchBooks = async () => {
    const storedBooks = await AsyncStorage.getItem('books');
    return storedBooks ? JSON.parse(storedBooks) : [];
};


export const saveBooks = async (books) => {
    await AsyncStorage.setItem('books', JSON.stringify(books));
};
