import React from "react";
import { useTheme } from "@react-navigation/native";
import ColorAuxiliar from "../asset/design/Color";
import { StatusBar } from "react-native";

export default function () {

    const { dark } = useTheme()
    const Color = dark==true?ColorAuxiliar['dark']:ColorAuxiliar['light']

    return (
        <StatusBar
            backgroundColor={Color.surface}
            barStyle={dark==true?'light-content':'dark-content'}
        />
    )
}