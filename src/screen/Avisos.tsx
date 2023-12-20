import React, { useState } from 'react'
import { SafeAreaView, FlatList } from 'react-native'

//style
import StyleAuxiliar from '../style/ScreenAvisos'

//component
import ListItemNews from '../component/ListItemNews';
import Divisor from '../component/Divisor';
import EmptyContent from '../component/EmptyContent';
import StatusBar from '../component/StatusBar';
import Tabs from '../component/Tabs';

export default function () {

    const [tabSelected, setTabSelected] = useState(0)

    const Style = StyleAuxiliar();

    const array = [
        {
            id: "1",
            imageSource: require('../asset/image/photo1.webp'),
            headline: "ENEM",
            support: "ENEM ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "04 nov"
        },
        {
            id: "2",
            imageSource: require('../asset/image/photo2.webp'),
            headline: "PSS",
            support: "PSS dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "05 nov"
        },
        {
            id: "3",
            imageSource: require('../asset/image/photo3.webp'),
            headline: "UTFPR",
            support: "UTFPR sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "06 nov"
        },
        {
            id: "4",
            imageSource: require('../asset/image/photo1.webp'),
            headline: "ENEM",
            support: "ENEM ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "04 nov"
        },
        {
            id: "5",
            imageSource: require('../asset/image/photo2.webp'),
            headline: "PSS",
            support: "PSS dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "05 nov"
        },
        {
            id: "6",
            imageSource: require('../asset/image/photo3.webp'),
            headline: "UTFPR",
            support: "UTFPR sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "06 nov"
        },
        {
            id: "7",
            imageSource: require('../asset/image/photo1.webp'),
            headline: "ENEM",
            support: "ENEM ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "04 nov"
        },
        {
            id: "8",
            imageSource: require('../asset/image/photo2.webp'),
            headline: "PSS",
            support: "PSS dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "05 nov"
        },
        {
            id: "9",
            imageSource: require('../asset/image/photo3.webp'),
            headline: "UTFPR",
            support: "UTFPR sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "06 nov"
        },
        {
            id: "10",
            imageSource: require('../asset/image/photo1.webp'),
            headline: "ENEM",
            support: "ENEM ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "04 nov"
        },
        {
            id: "11",
            imageSource: require('../asset/image/photo2.webp'),
            headline: "PSS",
            support: "Ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "05 nov"
        },
        {
            id: "12",
            imageSource: require('../asset/image/photo3.webp'),
            headline: "UTFPR",
            support: "UTFPR sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "06 nov"
        },
        {
            id: "13",
            imageSource: require('../asset/image/photo3.webp'),
            headline: "UTFPR",
            support: "UTFPR sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "06 nov"
        },
        {
            id: "14",
            imageSource: require('../asset/image/photo1.webp'),
            headline: "ENEM",
            support: "ENEM ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "04 nov"
        },
        {
            id: "15",
            imageSource: require('../asset/image/photo2.webp'),
            headline: "PSS",
            support: "Ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "05 nov"
        },
        {
            id: "16",
            imageSource: require('../asset/image/photo3.webp'),
            headline: "UTFPR",
            support: "UTFPR sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "06 nov"
        },
    ]

    // const array = null

    return (
        <SafeAreaView style={[Style.container]}>
            <Tabs data={array} setSelected={setTabSelected} selected={tabSelected} />
            <StatusBar />
            <FlatList
                data={array}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <ListItemNews
                        image={item.imageSource}
                        headline={item.headline}
                        support={item.support}
                        trailing={item.trailing}
                    />
                }
                ItemSeparatorComponent={() => <Divisor />}
                ListEmptyComponent={ //Renderiza caso a lista esteja vazia
                    <EmptyContent text="Adicione um vestibular ao seus favoritos" />
                }
                contentContainerStyle={Style.listContainer} //Define o estilo do container
            />
        </SafeAreaView>
    )
} 