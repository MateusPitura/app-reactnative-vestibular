import React, { createContext, useEffect, useState } from "react";
import ColorAuxiliar from "../asset/design/Color";
import { useTheme } from '@react-navigation/native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

//controller
import { read } from '../model/SalvosController'

export const TabsContext = createContext({})

const TabsProvider = ({ children }: any) => {

    const [tabs, setTabs] = useState([])
    
    const { dark } = useTheme();
    const Color = dark==true?ColorAuxiliar['dark']:ColorAuxiliar['light']

    useEffect(() => {
        read(setTabs)
    }, [])

    useEffect(()=>{
        try{
            changeNavigationBarColor(Color.surfaceContainer);
        }catch(e){
        }
    }, [Color])

    return (
        <TabsContext.Provider value={{ tabs, setTabs, Color }}>
            {children}
        </TabsContext.Provider>
    )
}

export default TabsProvider