import React from "react";
import { View, Text } from "react-native";

//style
import Typography from "../asset/design/Typography";
import StyleAuxiliar from "../style/ComponentCardHorizontal"

export default function (props: any) {

    const Style = StyleAuxiliar()

    return (
        <View style={Style.card}>
            <View style={Style.header}>
                <View style={Style.title}>
                    <Text numberOfLines={1} style={[Typography.titleMedium, Style.text]}>
                        {props.header}
                    </Text>
                </View>
                <View style={Style.icon}>
                    {props.children}
                </View>
            </View>
            <View style={Style.description}>
                <Text numberOfLines={4} style={[Typography.bodyMedium, Style.text]}>
                    {props.body}
                </Text>
            </View>
        </View>
    )
}