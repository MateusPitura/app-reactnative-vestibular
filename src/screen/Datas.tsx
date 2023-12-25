import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList } from 'react-native'

//style
import StyleAuxiliar from '../style/ScreenDatas'

//component
import ListItemCalendar from '../component/ListItemCalendar'
import EmptyContent from '../component/EmptyContent'
import Label from '../component/Label'
import Tabs from '../component/Tabs'

//controller
import { read } from '../model/SalvosController';

export default function (props: any) {

    const [tabSelected, setTabSelected] = useState(0)

    const [data, setData] = useState([])

    useEffect(() => {
        read(setData)
    }, [props.update])

    const Style = StyleAuxiliar()

    const array = [
        {
            id: "1",
            title: "ENEM",
            body: "13h00 às 14h00",
            day: "30",
            month: "jan"
        },
        {
            id: "2",
            title: "PSS",
            body: "Todo o dia",
            day: "05",
            month: "fev"
        },
        {
            id: "3",
            title: "UTFPR",
            body: "13h00 às 14h00",
            day: "06",
            month: "mar"
        },
        {
            id: "4",
            title: "ENEM",
            body: "Todo o dia",
            day: "04",
            month: "abr"
        },
        {
            id: "5",
            title: "PSS",
            body: "13h00 às 14h00",
            day: "05",
            month: "mai"
        },
        {
            id: "6",
            title: "UTFPR",
            body: "Todo o dia",
            day: "06",
            month: "jun"
        },
        {
            id: "7",
            title: "ENEM",
            body: "13h00 às 14h00",
            day: "04",
            month: "jul"
        },
        {
            id: "8",
            title: "PSS",
            body: "Todo o dia",
            day: "05",
            month: "ago"
        },
        {
            id: "9",
            title: "UTFPR",
            body: "13h00 às 14h00",
            day: "06",
            month: "set"
        },
        {
            id: "10",
            title: "ENEM",
            body: "Todo o dia",
            day: "04",
            month: "out"
        },
        {
            id: "11",
            title: "PSS",
            body: "13h00 às 14h00",
            day: "05",
            month: "nov"
        },
        {
            id: "12",
            title: "UTFPR",
            body: "Todo o dia",
            day: "06",
            month: "dez"
        },
    ]

    // const array = null

    return (
        <SafeAreaView style={Style.container}>
            <Tabs data={data} setSelected={setTabSelected} selected={tabSelected} />
            <FlatList
                data={array}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <ListItemCalendar
                        day={item.day}
                        month={item.month}
                        title={item.title}
                        body={item.body}
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
        </SafeAreaView>
    )
} 