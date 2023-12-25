import React from "react";
import { View, Text } from 'react-native'

//style
import StyleAuxiliar from '../style/ComponentListItemCalendar'
import Typography from "../asset/design/Typography";

export default function (props: any) {

    const Style = StyleAuxiliar()

    return (
        <View style={Style.listContainer}>
            <View style={Style.iconLabel}>
                <View style={Style.dayLabel}>
                    <Text
                        numberOfLines={1}
                        style={[Typography.labelSmall, Style.dateLabel]}
                    >
                        {props.day}
                    </Text>
                </View>
                <View style={Style.monthLabel}>
                    <Text
                        numberOfLines={1}
                        style={[Typography.labelSmall, Style.dateLabel]} //Precisa ser nesse ordem pois estou sobreescrevendo uma propriedade de labelSmall
                    >
                        {props.month}
                    </Text>
                </View>
            </View>
            <View style={Style.text}>
                <Text
                    numberOfLines={1}
                    style={[Typography.titleMedium, Style.headlineText]}
                >
                    {props.title}
                </Text>
                <Text
                    numberOfLines={1}
                    style={[Typography.bodyMedium, Style.supportText]}
                >
                    {props.body}
                </Text>
            </View>
        </View>
    )
}