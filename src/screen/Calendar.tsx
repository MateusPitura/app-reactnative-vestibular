import React from 'react'
import { View, FlatList, Text } from 'react-native'

//style
import StyleAuxiliar from '../style/ScreenCalendar'
import Typography from '../asset/design/Typography'

//component
import ListItemCalendar from '../component/ListItemCalendar'
import EmptyContent from '../component/EmptyContent'

export default function () {

    const Style = StyleAuxiliar()

    const array = [
        {
            id: "1",
            headline: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            support: "13h00 às 14h00",
            day: "30",
            month: "jan"
        },
        {
            id: "2",
            headline: "Ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            support: "Todo o dia",
            day: "05",
            month: "fev"
        },
        {
            id: "3",
            headline: "Dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            support: "13h00 às 14h00",
            day: "06",
            month: "mar"
        },
        {
            id: "4",
            headline: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            support: "Todo o dia",
            day: "04",
            month: "abr"
        },
        {
            id: "5",
            headline: "Ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            support: "13h00 às 14h00",
            day: "05",
            month: "mai"
        },
        {
            id: "6",
            headline: "Dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            support: "Todo o dia",
            day: "06",
            month: "jun"
        },
        {
            id: "7",
            headline: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            support: "13h00 às 14h00",
            day: "04",
            month: "jul"
        },
        {
            id: "8",
            headline: "Ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            support: "Todo o dia",
            day: "05",
            month: "ago"
        },
        {
            id: "9",
            headline: "Dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            support: "13h00 às 14h00",
            day: "06",
            month: "set"
        },
        {
            id: "10",
            headline: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            support: "Todo o dia",
            day: "04",
            month: "out"
        },
        {
            id: "11",
            headline: "Ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            support: "13h00 às 14h00",
            day: "05",
            month: "nov"
        },
        {
            id: "12",
            headline: "Dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            support: "Todo o dia",
            day: "06",
            month: "dez"
        },
    ]

    return (
        <View style={Style.container}>
            <View style={Style.label}>
                <Text style={[Typography.bodySmall, Style.labelText]}>Próximos eventos</Text>
            </View>
            <FlatList
                data={array}
                keyExtractor={item=>item.id}
                renderItem={({item})=>
                    <ListItemCalendar
                        day={item.day}
                        month={item.month}
                        headline={item.headline}
                        support={item.support}
                    />
                }
                contentContainerStyle={Style.listContainer}
                ListEmptyComponent={
                    <EmptyContent/>
                }
            />
        </View>
    )
} 