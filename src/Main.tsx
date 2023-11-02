import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';

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

//style
import Color from './asset/theme/Color';
import Theme from './asset/theme/Theme';


const bottomTabNavigator = createBottomTabNavigator();

export default function () {

    const [themeUser, setThemeUser] = useState("light");

    const themeDefault = useColorScheme();

    const ColorTheme = themeUser == "default" ?
        themeDefault == "dark" ? Color['dark'] : Color['light']
        :
        themeUser == "dark" ? Color['dark'] : Color['light']

    function SettingAuxiliar() {
        return (
            <Setting setTheme={setThemeUser} />
        )
    }

    return (
        <NavigationContainer
            theme={
                themeUser == "default" ?
                    themeDefault == "dark" ? Theme.dark : Theme.light
                    :
                    themeUser == "dark" ? Theme.dark : Theme.light
            }
        >
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
                    component={SettingAuxiliar}
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