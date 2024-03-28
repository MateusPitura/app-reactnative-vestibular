import React, { useContext } from "react";
import { StatusBar } from "react-native";
import { TabsContext } from "../contexts/tabs";

export default function () {

    const { Color, dark } = useContext<any>(TabsContext)

    return (
        <StatusBar
            backgroundColor={Color.surface}
            barStyle={dark==true?'light-content':'dark-content'}
        />
    )
}