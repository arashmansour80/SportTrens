// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyHome from "./components/home/MyHome";
import LoginScreen from "./components/Login/LoginScreen";
import RegistrationScreen from "./components/Registration/RegistrationScreen";
import Sports from "./components/Sport/Sports";
import Student from "./components/Student/Student";
import Home from "./components/home/Home";


const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
                <Stack.Screen name="MyHome" component={MyHome} />
                <Stack.Screen name="Sports" component={Sports} />
                <Stack.Screen name="Student" component={Student} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
