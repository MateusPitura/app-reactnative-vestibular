import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import News from './screen/News';
import Calendar from './screen/Calendar';
import Bookmark from './screen/Bookmark';
import Setting from './screen/Setting';

const bottomTabNavigator = createBottomTabNavigator();

export default function () {
    return (
        <NavigationContainer>
            <bottomTabNavigator.Navigator 
                initialRouteName='News'
                screenOptions={{
                    tabBarShowLabel: false,
                }}
            >
                <bottomTabNavigator.Screen
                    name="News"
                    component={News}
                    options={{ 
                        headerShown: false,
                    }}
                />
                <bottomTabNavigator.Screen
                    name="Calendar"
                    component={Calendar}
                    options={{ 
                        headerShown: false,
                    }}
                />
                <bottomTabNavigator.Screen
                    name="Bookmark"
                    component={Bookmark}
                    options={{ 
                        headerShown: false,
                    }}
                />
                <bottomTabNavigator.Screen
                    name="Setting"
                    component={Setting}
                    options={{ 
                        headerShown: false,
                    }}
                />
            </bottomTabNavigator.Navigator>
        </NavigationContainer>
    );
}; 