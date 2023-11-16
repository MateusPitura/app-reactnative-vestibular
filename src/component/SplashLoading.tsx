import React from "react";
import { View, ActivityIndicator, StatusBar } from 'react-native'

//style
import Color from "../asset/design/Color";
import StyleAuxiliar from '../style/ComponentSplashLoading'
import General from "../asset/design/General";

export default function () {

    const Style = StyleAuxiliar()

    return (
        <View style={[General.flexCentralizedContainer, Style.container]}>
            <StatusBar //Aqui não é necessário se adaptar ao tema, pois essa tela será sempre no modo claro
                backgroundColor={Color["light"].surface}
                barStyle={"light-content"}
            />
            <ActivityIndicator
                size={"large"}
                color={Color["light"].primary}
            />
        </View>
    )
}