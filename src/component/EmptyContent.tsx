import React from "react";
import { View, Text } from "react-native";

//style
import General from "../asset/design/General";
import Typography from "../asset/design/Typography";
import StyleAuxiliar from "../style/ComponentEmptyContent";

export default function(){

    const Style = StyleAuxiliar()

    return(
        <View style={General.centralizedContainer}>
            <Text style={[Typography.bodyMedium, Style.text]}>Adicione um vestibular ao seus favoritos</Text>
        </View>
    )
}