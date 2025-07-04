import React, { createContext, useEffect, useState } from "react";
import ColorAuxiliar from "../asset/design/Color";
import { useTheme } from '@react-navigation/native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { shecheduleNotification, cancelAllNotification, showAllNotification } from '../model/NotificationsController'

//controller
import { read } from '../model/SalvosController'

export const TabsContext = createContext({})

const TabsProvider = ({ children }: any) => {

    const [tabs, setTabs] = useState([])

    const [staticData, setStaticData] = useState<any>()

    const { dark } = useTheme()
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

    useEffect(() => {
        read(setTabs)
    }, [])

    useEffect(() => {
        try {
            changeNavigationBarColor(Color.surfaceContainer, dark ? false : true, false);
        } catch (e) {
        }
    }, [Color])

    const retrieveData = async () => {
        if (tabs[0] != undefined) {
            const listUniversidadeId = tabs?.map((item: any) => item.id)
            try{
                const dataFromServer = await fetch(`http://164.152.51.188/eventos?universidade=${listUniversidadeId}`)
                const dataJsoned = await dataFromServer.json()
                setStaticData(dataJsoned)
                scheduleNotifications(dataJsoned)
            } catch(e){
                console.log("Erro")
            }
        }
    }

    useEffect(() => {
        retrieveData()
    }, [tabs])

    const scheduleNotifications = async (data: any) => {
        await cancelAllNotification()
        await shecheduleNotification(Color.primary, data)
        await showAllNotification()
    }

    return (
        <TabsContext.Provider value={{ tabs, setTabs, Color, dark, staticData, retrieveData }}>
            {children}
        </TabsContext.Provider>
    )
}

export default TabsProvider