import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppState, useColorScheme } from 'react-native';
import TabsProvider from './contexts/tabs';
import notifee from '@notifee/react-native';
import { shecheduleNotification, cancelAllNotification, showAllNotification } from './model/NotificationsController'

//component
import IconNavigation from './component/IconNavigation';
import SplashLoading from './component/SplashLoading';

//screen
import Avisos from './screen/Avisos';
import Datas from './screen/Datas';
import Salvos from './screen/Salvos';
import Ajustes from './screen/Ajustes';

//icone
import AvisosIconUnchecked from './asset/icon/avisos-unchecked.svg'
import AvisosIconChecked from './asset/icon/avisos-checked.svg'
import DatasIconUnchecked from './asset/icon/datas-unchecked.svg';
import DatasIconChecked from './asset/icon/datas-checked.svg';
import SalvosIconUnchecked from './asset/icon/salvos-unchecked.svg';
import SalvosIconChecked from './asset/icon/salvos-checked.svg';
import AjustesIconUnchecked from './asset/icon/ajustes-unchecked.svg';
import AjustesIconChecked from './asset/icon/ajustes-checked.svg';

//style
import ColorAuxiliar from './asset/design/Color';
import ThemeAuxiliar from './asset/design/Theme';

//model
import { restoreThemeLocaly } from './model/ThemeController';

export default function () {

    const array = [
        {
            id: "1",
            title: "ENEM",
            vestibularId: "1",
            body: "13h00 às 14h00",
            day: "30",
            month: "jan",
            date: '2024-03-29'
        },
        {
            id: "2",
            title: "PSS",
            vestibularId: "2",
            body: "Todo o dia",
            day: "05",
            month: "fev",
            date: '2024-02-05'
        },
        {
            id: "3",
            title: "UTFPR",
            vestibularId: "7",
            body: "13h00 às 14h00",
            day: "06",
            month: "mar",
            date: '2024-03-06'
        },
        {
            id: "4",
            title: "ENEM",
            vestibularId: "1",
            body: "Todo o dia",
            day: "04",
            month: "abr",
            date: '2024-04-04'
        },
        {
            id: "5",
            title: "PSS",
            vestibularId: "2",
            body: "13h00 às 14h00",
            day: "05",
            month: "mai",
            date: '2024-05-05'
        },
        {
            id: "6",
            title: "UTFPR",
            vestibularId: "7",
            body: "Todo o dia",
            day: "06",
            month: "jun",
            date: '2024-06-06'
        },
        {
            id: "7",
            title: "ENEM",
            vestibularId: "1",
            body: "13h00 às 14h00",
            day: "04",
            month: "jul",
            date: '2024-07-04'
        },
        {
            id: "8",
            title: "PSS",
            vestibularId: "2",
            body: "Todo o dia",
            day: "05",
            month: "ago",
            date: '2024-08-05'
        },
        {
            id: "9",
            title: "UTFPR",
            vestibularId: "7",
            body: "13h00 às 14h00",
            day: "06",
            month: "set",
            date: '2024-09-06'
        },
        {
            id: "10",
            title: "ENEM",
            vestibularId: "1",
            body: "Todo o dia",
            day: "04",
            month: "out",
            date: '2024-10-04'
        },
        {
            id: "11",
            title: "PSS",
            vestibularId: "2",
            body: "13h00 às 14h00",
            day: "05",
            month: "nov",
            date: '2024-11-05'
        },
        {
            id: "12",
            title: "UTFPR",
            vestibularId: "7",
            body: "Todo o dia",
            day: "06",
            month: "dez",
            date: '2024-12-06'
        },
    ]

    const [themeUser, setThemeUser] = useState("light"); //Tema (light, dark, default) definido pelo usuário
    const [loading, setLoading] = useState(true);

    const bottomTabNavigator = createBottomTabNavigator();

    const themeSystem = useColorScheme(); //Pega o tema padrão do sistema

    const theme = themeUser == "default" ?
        themeSystem == "dark" ? 'dark' : 'light' //Se definido pelo usuário como "default" pega o tema do sistema
        :
        themeUser == "dark" ? 'dark' : 'light' //Se não foi definido pelo usuário "default" pega o que ele escolheu

    const Color = ColorAuxiliar[theme]

    const restoreThemeLocalyAuxiliar = async () => {
        await restoreThemeLocaly(setThemeUser);
        setLoading(false);
    }

    const requestNotificationPermission = async () => {
        await notifee.requestPermission()
    }

    const scheduleNotifications = async () => {
        await cancelAllNotification()
        await shecheduleNotification(Color.primary, array)
        await showAllNotification()
    }

    useEffect(() => { //Essa função executa apenas uma vez ao iniciar o aplicativo
        restoreThemeLocalyAuxiliar()
        requestNotificationPermission()

        const subscription = AppState.addEventListener('change', nextAppState => {
            if(nextAppState === 'background'){
                // scheduleNotifications()
            }
        });

        return () => {
            subscription.remove();
        };
    }, [])

    function AjustesAuxiliar() { //Cria uma tela auxiliar para poder passar um parâmetro para a tela a ser chamada
        return (
            <Ajustes setTheme={setThemeUser} /> //Passa o setState que define o tema a ser definido pelo usuário
        )
    }

    return (
        loading == true ?
            <SplashLoading />
            :
            <NavigationContainer theme={ThemeAuxiliar[theme]}>
                <TabsProvider>
                    <bottomTabNavigator.Navigator
                        initialRouteName='Avisos' //Tela inicial
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
                            name="Avisos"
                            component={Avisos}
                            options={{
                                headerShown: false, //Não mostra o cabeçalho
                                tabBarIcon: ({ focused }) => (
                                    <IconNavigation focused={focused} label="Avisos">
                                        {focused ?
                                            <AvisosIconChecked //Icone da label
                                                fill={Color.onSurface}
                                                height={24} //Altura
                                                width={24} //Largura
                                            />
                                            :
                                            <AvisosIconUnchecked //Icone da label
                                                fill={Color.onSurfaceVariant}
                                                height={24} //Altura
                                                width={24} //Largura
                                            />
                                        }
                                    </IconNavigation>
                                )
                            }}
                        />
                        <bottomTabNavigator.Screen
                            name="Datas"
                            component={Datas}
                            options={{
                                headerShown: false,
                                tabBarIcon: ({ focused }) => (
                                    <IconNavigation focused={focused} label="Datas">
                                        {focused ?
                                            <DatasIconChecked //Icone da label
                                                fill={Color.onSurface}
                                                height={24} //Altura
                                                width={24} //Largura
                                            />
                                            :
                                            <DatasIconUnchecked //Icone da label
                                                fill={Color.onSurfaceVariant}
                                                height={24} //Altura
                                                width={24} //Largura
                                            />
                                        }
                                    </IconNavigation>
                                )
                            }}
                        />
                        <bottomTabNavigator.Screen
                            name="Salvos"
                            component={Salvos}
                            options={{
                                headerShown: false,
                                tabBarIcon: ({ focused }) => (
                                    <IconNavigation focused={focused} label="Salvos">
                                        {focused ?
                                            <SalvosIconChecked //Icone da label
                                                fill={Color.onSurface}
                                                height={24} //Altura
                                                width={24} //Largura
                                            />
                                            :
                                            <SalvosIconUnchecked //Icone da label
                                                fill={Color.onSurfaceVariant}
                                                height={24} //Altura
                                                width={24} //Largura
                                            />
                                        }
                                    </IconNavigation>
                                )
                            }}
                        />
                        <bottomTabNavigator.Screen
                            name="Ajustes"
                            component={AjustesAuxiliar}
                            options={{
                                headerShown: false,
                                tabBarIcon: ({ focused }) => (
                                    <IconNavigation focused={focused} label="Ajustes">
                                        {focused ?
                                            <AjustesIconChecked //Icone da label
                                                fill={Color.onSurface}
                                                height={24} //Altura
                                                width={24} //Largura
                                            />
                                            :
                                            <AjustesIconUnchecked //Icone da label
                                                fill={Color.onSurfaceVariant}
                                                height={24} //Altura
                                                width={24} //Largura
                                            />
                                        }
                                    </IconNavigation>
                                )
                            }}
                        />
                    </bottomTabNavigator.Navigator>
                </TabsProvider>
            </NavigationContainer>
    );
}; 