import React from "react";
import { View, Text } from "react-native";
import { useTheme } from '@react-navigation/native'

//style
import Typography from "../asset/design/Typography";
import StyleAuxiliar from "../style/ComponentCard"
import ColorAuxiliar from "../asset/design/Color";

//icon
import TrashIcon from '../asset/icon/delete.svg'

export default function (props: any) {

    const Style = StyleAuxiliar()

    const { dark } = useTheme();
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

    return (
        props.blank==true?
        <View style={[Style.card, Style.blankCard]}>
        </View>
        :
        <View style={Style.card}>
            <View style={Style.header}>
                <View style={Style.title}>
                    <Text numberOfLines={1} style={[Typography.titleMedium, Style.text]}>
                        {props.header}
                    </Text>
                </View>
                <View style={Style.icon}>
                    <TrashIcon
                        fill={Color.onTertiary}
                        height={24}
                        width={24}
                    />
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