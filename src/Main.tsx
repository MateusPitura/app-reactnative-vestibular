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
            <bottomTabNavigator.Navigator>
                <bottomTabNavigator.Screen
                    name="News"
                    component={News}
                    options={{ title: "News" }}
                />
                <bottomTabNavigator.Screen
                    name="Calendar"
                    component={Calendar}
                    options={{ title: "Calendar" }}
                />
                <bottomTabNavigator.Screen
                    name="Bookmark"
                    component={Bookmark}
                    options={{ title: "Bookmark" }}
                />
                <bottomTabNavigator.Screen
                    name="Setting"
                    component={Setting}
                    options={{ title: "Setting" }}
                />
            </bottomTabNavigator.Navigator>
        </NavigationContainer>
    );
}; 