import React from "react";
import { View, Text } from 'react-native'
import { useTheme } from "@react-navigation/native";

//style
import Typography from "../asset/design/Typography";
import StyleAuxiliar from '../style/ComponentSearchBar'
import ColorAuxiliar from "../asset/design/Color";

//icones
import SearchIcon from '../asset/icon/search.svg'

export default function (props: any) {

    const Style = StyleAuxiliar()

    const { dark } = useTheme();
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

    return (
        <View style={Style.box}>
            <View style={Style.container}>
                <View style={Style.iconContainer}>
                    <SearchIcon
                        width={24}
                        height={24}
                        fill={Color.onSurfaceVariant}
                    />
                </View>
                <View style={Style.textContainer}>
                    <Text style={[Typography.bodyLarge, Style.text]}>{props.text}</Text>
                </View>
            </View>
        </View>
    )
}