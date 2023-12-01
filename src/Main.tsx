import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';

//component
import IconNavigation from './component/IconNavigation';
import SplashLoading from './component/SplashLoading';

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
import ColorAuxiliar from './asset/design/Color';
import ThemeAuxiliar from './asset/design/Theme';

//model
import { restoreThemeLocaly } from './model/ThemeController';

export default function () {

    const [themeUser, setThemeUser] = useState("light"); //Tema (light, dark, default) definido pelo usuário
    const [loading, setLoading] = useState(true);

    const bottomTabNavigator = createBottomTabNavigator();

    const themeSystem = useColorScheme(); //Pega o tema padrão do sistema

    const theme = themeUser == "default" ? 
        themeSystem == "dark" ? 'dark' : 'light' //Se definido pelo usuário como "default" pega o tema do sistema
        :
        themeUser == "dark" ? 'dark' : 'light' //Se não foi definido pelo usuário "default" pega o que ele escolheu

    const Color = ColorAuxiliar[theme]
    
    useEffect(() => { //Essa função executa apenas uma vez ao iniciar o aplicativo
        restoreThemeLocaly(setLoading, setThemeUser);
    }, [])

    function SettingAuxiliar() { //Cria uma tela auxiliar para poder passar um parâmetro para a tela a ser chamada
        return (
            <Setting setTheme={setThemeUser} /> //Passa o setState que define o tema a ser definido pelo usuário
        )
    }

    return (
        loading == true ?
        <SplashLoading />
        :
        <NavigationContainer theme={ThemeAuxiliar[theme]}>
            <bottomTabNavigator.Navigator
                initialRouteName='Setting' //Tela inicial
                screenOptions={{
                    tabBarStyle: {
                        height: 80, //Altura do container
                        backgroundColor: Color.surfaceContainer, //Cor do container
                        borderTopWidth: 0,
                    },
                    tabBarShowLabel: false, //Não exibe a label de cada tela, pois eu mesmo implemento a label
                }}
            >
                <bottomTabNavigator.Screen
                    name="News"
                    component={News}
                    options={{
                        headerShown: false, //Não mostra o cabeçalho
                        tabBarIcon: ({ focused }) => (
                            <IconNavigation focused={focused} label="Avisos">
                                <NewsIcon //Icone da label
                                    fill={focused ? Color.onSurface : Color.onSurfaceVariant} //Caso o ícone esteja selecionado muda a cor
                                    height={24} //Altura
                                    width={24} //Largura
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
                            <IconNavigation focused={focused} label="Datas">
                                <CalendarIcon
                                    fill={focused ? Color.onSurface : Color.onSurfaceVariant}
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
                            <IconNavigation focused={focused} label="Salvos">
                                <BookmarIcon
                                    fill={focused ? Color.onSurface : Color.onSurfaceVariant}
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
                            <IconNavigation focused={focused} label="Ajustes">
                                <SettingIcon
                                    fill={focused ? Color.onSurface : Color.onSurfaceVariant}
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