import React, { createContext, useEffect, useState } from "react";

//controller
import { read } from '../model/SalvosController'

export const TabsContext = createContext({})

const TabsProvider = ({ children }: any) => {

    const [tabs, setTabs] = useState([])

    useEffect(() => {
        read(setTabs)
    }, [])

    return (
        <TabsContext.Provider value={{ tabs, setTabs }}>
            {children}
        </TabsContext.Provider>
    )
}

export default TabsProvider