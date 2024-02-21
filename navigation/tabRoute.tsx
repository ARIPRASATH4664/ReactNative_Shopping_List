import React, { FunctionComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ShoppingList } from '../screens/shoppingList';
import { UserList } from '../screens/userList';
import { Auth } from '../screens/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

export const TabRoute = (): JSX.Element => {
    return (
        <Tab.Navigator
        sceneContainerStyle={{borderRadius: 10}}
            screenOptions={({ route }) => (
                {
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'User') {
                    iconName = focused
                      ? 'user'
                      : 'user-o';
                    return <Icon name={iconName} size={size} color={color} />;
                  } else if (route.name === 'List') {
                    iconName = focused ? 'cart' : 'cart-outline';
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                  }
      
                  // You can return any component that you like here!
                  
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerShown: false
              })}
            >
            <Tab.Screen name={"List"} component={ShoppingList} />
            <Tab.Screen name={"User"} component={UserList} />

        </Tab.Navigator>
    );
}