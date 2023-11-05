import React from "react";
import { View } from "react-native";

//style
import StyleAuxiliar from '../style/ComponentDivisor'

export default function(){

    const Style = StyleAuxiliar();

    return(
        <View style={Style.divisor}>
        </View>
    )
}