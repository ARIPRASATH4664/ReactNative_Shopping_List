import React, { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TabRoute} from './tabRoute';
import { Auth } from '../screens/auth';
import { useSelector } from 'react-redux';
import { TInitialState } from '../store';

const Stack = createNativeStackNavigator();

export const StackRoute = (): JSX.Element => {
    const loggedInStatus = useSelector((state:TInitialState) => state.loggedInStatus);
    console.log("SUCK!!! ~ StackRoute ~ loggedInStatus:", loggedInStatus)


    return (
        <Stack.Navigator
        screenOptions={{ headerShown: false }}>
            {!loggedInStatus ? (
                <Stack.Screen name={"Login"} component={Auth} />
            ) : (
                <Stack.Screen name={"TabRoute"} component={TabRoute} />
            )}
        </Stack.Navigator>
    );
}