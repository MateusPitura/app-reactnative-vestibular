import React from 'react'
import { View, FlatList, Text } from 'react-native'

//style
import StyleAuxiliar from '../style/ScreenNews'

//component
import ListItemCalendar from '../component/ListItemCalendar'
import EmptyContent from '../component/EmptyContent'

export default function () {

    const Style = StyleAuxiliar()

    const array = [
        {
            id: "1",
            headline: "Lorem",
            support: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            day: "04",
            month: "nov"
        },
        {
            id: "2",
            headline: "Ipsum",
            support: "Ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            day: "05",
            month: "nov"
        },
        {
            id: "3",
            headline: "Dolor",
            support: "Dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            day: "06",
            month: "nov"
        },
        {
            id: "4",
            headline: "Lorem",
            support: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            day: "04",
            month: "nov"
        },
        {
            id: "5",
            headline: "Ipsum",
            support: "Ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            day: "05",
            month: "nov"
        },
        {
            id: "6",
            headline: "Dolor",
            support: "Dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            day: "06",
            month: "nov"
        },
        {
            id: "7",
            headline: "Lorem",
            support: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            day: "04",
            month: "nov"
        },
        {
            id: "8",
            headline: "Ipsum",
            support: "Ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            day: "05",
            month: "nov"
        },
        {
            id: "9",
            headline: "Dolor",
            support: "Dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            day: "06",
            month: "nov"
        },
        {
            id: "10",
            headline: "Lorem",
            support: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            day: "04",
            month: "nov"
        },
        {
            id: "11",
            headline: "Ipsum",
            support: "Ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            day: "05",
            month: "nov"
        },
        {
            id: "12",
            headline: "Dolor",
            support: "Dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            day: "06",
            month: "nov"
        },
    ]

    return (
        <View style={Style.container}>
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