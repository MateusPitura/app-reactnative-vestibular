import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//component
import IconNavigation from './component/IconNavigation';

//screen
import News from './screen/News';
import Calendar from './screen/Calendar';
import Bookmark from './screen/Bookmark';
import Setting from './screen/Setting';

//icone
import NewsIcon from './asset/icon/news.svg'
import CalendarIcon from './asset/icon/calendar.svg';
import BookmarIcon from './asset/icon/bookmark.svg';
import SettingIcon from './asset/icon/setting.svg';

//theme
import Color from './asset/theme/Color';

const bottomTabNavigator = createBottomTabNavigator();

export default function () {

    const ColorTheme = Color.light;

    return (
        <NavigationContainer>
            <bottomTabNavigator.Navigator
                initialRouteName='Setting'
                screenOptions={{
                    tabBarStyle: {
                        height: 80,
                        backgroundColor: ColorTheme.surfaceContainer,
                    },
                    tabBarShowLabel: false,
                }}
            >
                <bottomTabNavigator.Screen
                    name="News"
                    component={News}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <IconNavigation focused={focused} label="News">
                                <NewsIcon
                                    fill={focused ? ColorTheme.onSurface : ColorTheme.onSurfaceVariant}
                                    height={24}
                                    width={24}
                                />
                            </IconNavigation>
                        )
                    }}
                />
                <bottomTabNavigator.Screen
                    name="Calendar"
                    component={Calendar}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <IconNavigation focused={focused} label="Calendar">
                                <CalendarIcon
                                    fill={focused ? ColorTheme.onSurface : ColorTheme.onSurfaceVariant}
                                    height={24}
                                    width={24}
                                />
                            </IconNavigation>
                        )
                    }}
                />
                <bottomTabNavigator.Screen
                    name="Bookmark"
                    component={Bookmark}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <IconNavigation focused={focused} label="Bookmark">
                                <BookmarIcon
                                    fill={focused ? ColorTheme.onSurface : ColorTheme.onSurfaceVariant}
                                    height={24}
                                    width={24}
                                />
                            </IconNavigation>
                        )
                    }}
                />
                <bottomTabNavigator.Screen
                    name="Setting"
                    component={Setting}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <IconNavigation focused={focused} label="Setting">
                                <SettingIcon
                                    fill={focused ? ColorTheme.onSurface : ColorTheme.onSurfaceVariant}
                                    height={24}
                                    width={24}
                                />
                            </IconNavigation>
                        )
                    }}
                />
            </bottomTabNavigator.Navigator>
        </NavigationContainer>
    );
}; 