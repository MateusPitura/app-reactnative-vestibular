import React from "react";
import { View, Text } from "react-native";

//style
import Typography from "../asset/design/Typography";
import StyleAuxiliar from "../style/ComponentHeaderList";

export default function (props: any) {

    const Style = StyleAuxiliar()

    return (
        <View style={[Style.container]}>
            <Text style={[Typography.bodyMedium, Style.text]}>{props.text}</Text>
        </View>
    )
}