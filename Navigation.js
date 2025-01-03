import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AddBookScreen from './AddBookScreen';
import EditBookScreen from './EditBookScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'My Library' }}
                />
                <Stack.Screen
                    name="AddBook"
                    component={AddBookScreen}
                    options={{ title: 'Add New Book' }}
                />
                <Stack.Screen
                    name="EditBook"
                    component={EditBookScreen}
                    options={{ title: 'Edit Book' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
