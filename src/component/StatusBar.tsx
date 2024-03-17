import React, { useContext } from "react";
import { useTheme } from "@react-navigation/native";
import ColorAuxiliar from "../asset/design/Color";
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