import React, { useState } from 'react'
import { View, FlatList } from 'react-native'

//style
import StyleAuxiliar from '../style/ScreenDatas'

//component
import ListItemCalendar from '../component/ListItemCalendar'
import EmptyContent from '../component/EmptyContent'
import Label from '../component/Label'
import Tabs from '../component/Tabs'

export default function () {

    const [tabSelected, setTabSelected] = useState(0)

    const Style = StyleAuxiliar()

    const array = [
        {
            id: "1",
            headline: "ENEM",
            support: "13h00 às 14h00",
            day: "30",
            month: "jan"
        },
        {
            id: "2",
            headline: "PSS",
            support: "Todo o dia",
            day: "05",
            month: "fev"
        },
        {
            id: "3",
            headline: "UTFPR",
            support: "13h00 às 14h00",
            day: "06",
            month: "mar"
        },
        {
            id: "4",
            headline: "ENEM",
            support: "Todo o dia",
            day: "04",
            month: "abr"
        },
        {
            id: "5",
            headline: "PSS",
            support: "13h00 às 14h00",
            day: "05",
            month: "mai"
        },
        {
            id: "6",
            headline: "UTFPR",
            support: "Todo o dia",
            day: "06",
            month: "jun"
        },
        {
            id: "7",
            headline: "ENEM",
            support: "13h00 às 14h00",
            day: "04",
            month: "jul"
        },
        {
            id: "8",
            headline: "PSS",
            support: "Todo o dia",
            day: "05",
            month: "ago"
        },
        {
            id: "9",
            headline: "UTFPR",
            support: "13h00 às 14h00",
            day: "06",
            month: "set"
        },
        {
            id: "10",
            headline: "ENEM",
            support: "Todo o dia",
            day: "04",
            month: "out"
        },
        {
            id: "11",
            headline: "PSS",
            support: "13h00 às 14h00",
            day: "05",
            month: "nov"
        },
        {
            id: "12",
            headline: "UTFPR",
            support: "Todo o dia",
            day: "06",
            month: "dez"
        },
    ]

    // const array = null

    return (
        <View style={Style.container}>
            <Tabs data={array} setSelected={setTabSelected} selected={tabSelected} />
            <FlatList
                data={array}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <ListItemCalendar
                        day={item.day}
                        month={item.month}
                        headline={item.headline}
                        support={item.support}
                    />
                }
                contentContainerStyle={Style.listContainer}
                ListEmptyComponent={
                    <EmptyContent text="Adicione um vestibular ao seus favoritos" />
                }
                ListHeaderComponent={() => (
                    <Label text="Próximos eventos" />
                )}
            />
        </View>
    )
} 