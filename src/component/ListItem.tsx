import React from "react";
import { View, Text, Image } from 'react-native'

//style
import StyleAuxiliar from '../style/ComponentListItem'
import Typography from "../asset/design/Typography";

export default function (props: any) {

    const Style = StyleAuxiliar()

    return (
        <View style={Style.listContainer}>
            <View style={Style.imageContainer}>
                <Image
                    source={props.image}
                    style={Style.image}
                />
            </View>
            <View style={Style.text}>
                <Text
                    numberOfLines={1}
                    style={[Typography.titleMedium, Style.headlineText]}
                >
                    {props.headline}
                </Text>
                <Text
                    numberOfLines={2}
                    style={[Typography.bodyMedium, Style.supportText]}
                >
                    {props.support}
                </Text>
            </View>
            <View style={Style.date}>
                <Text
                    numberOfLines={2}
                    style={[Typography.labelSmall, Style.trailingText]}
                >
                    {props.trailing}
                </Text>
            </View>
        </View>
    )
}