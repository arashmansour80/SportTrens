import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Profile from "../Profile/Profile";
import Dashboard from "../Dashboard/Dashboard";
import Sports from "../Sport/Sports";
import MyHome from "./MyHome";
import Student from "../Student/Student";
import Map from "../Map/Map";

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function Home() {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName="Home1">
                <Drawer.Screen name="Home" component={MyHome} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                <Drawer.Screen name="Profile" component={Profile} />
                <Drawer.Screen name="Dashboard" component={Dashboard} />
                <Drawer.Screen name="Sports" component={Sports} />
                <Drawer.Screen name="Student" component={Student} />
                <Drawer.Screen name="Find sport clubs near you" component={Map} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
