import React from "react";
import { View, Text } from 'react-native'

//style
import StyleAuxiliar from '../style/ComponentListItemCalendar'
import Typography from "../asset/design/Typography";

export default function (props: any) {

    const Style = StyleAuxiliar()

    const date = new Date(props.date)

    const transformDataDay = () => {
        const dayOfTheMonth = date.getDate()
        return dayOfTheMonth
    }

    const transformDataMonth = () => {
        const monthNames = ["jan", "fev", "mar", "abr", "mai", "jun",
            "jul", "ago", "set", "out", "nov", "dez"
        ];
        const month = monthNames[date.getMonth()]
        return month
    }

    return (
        <View style={Style.listContainer}>
            <View style={Style.iconLabel}>
                <View style={Style.dayLabel}>
                    <Text
                        numberOfLines={1}
                        style={[Typography.labelSmall, Style.dateLabel]}
                    >
                        {transformDataDay()}
                    </Text>
                </View>
                <View style={Style.monthLabel}>
                    <Text
                        numberOfLines={1}
                        style={[Typography.labelSmall, Style.dateLabel]} //Precisa ser nesse ordem pois estou sobreescrevendo uma propriedade de labelSmall
                    >
                        {transformDataMonth()}
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