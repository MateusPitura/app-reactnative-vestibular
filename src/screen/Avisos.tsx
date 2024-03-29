import React, { useState, useEffect } from 'react'
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
    const [tabSelectedName, setTabSelectedName] = useState('')
    
    const Style = StyleAuxiliar();

    const array = [
        {
            id: "1",
            imageSource: require('../asset/image/photo1.webp'),
            title: "ENEM",
            vestibularId: "1",
            body: "ENEM ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "04 nov",
            url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem"
        },
        {
            id: "2",
            imageSource: require('../asset/image/photo2.webp'),
            title: "PSS",
            vestibularId: "2",
            body: "PSS dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "05 nov",
            url: "https://www.uepg.br/"
        },
        {
            id: "3",
            imageSource: require('../asset/image/photo3.webp'),
            title: "UTFPR",
            vestibularId: "7",
            body: "UTFPR sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "06 nov",
            url: "https://www.utfpr.edu.br/"
        },
        {
            id: "4",
            imageSource: require('../asset/image/photo1.webp'),
            title: "ENEM",
            vestibularId: "1",
            body: "ENEM ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "04 nov",
            url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem"
        },
        {
            id: "5",
            imageSource: require('../asset/image/photo2.webp'),
            title: "PSS",
            vestibularId: "2",
            body: "PSS dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "05 nov",
            url: "https://www.uepg.br/"
        },
        {
            id: "6",
            imageSource: require('../asset/image/photo3.webp'),
            title: "UTFPR",
            vestibularId: "7",
            body: "UTFPR sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "06 nov",
            url: "https://www.utfpr.edu.br/"
        },
        {
            id: "7",
            imageSource: require('../asset/image/photo1.webp'),
            title: "ENEM",
            vestibularId: "1",
            body: "ENEM ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "04 nov",
            url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem"
        },
        {
            id: "8",
            imageSource: require('../asset/image/photo2.webp'),
            title: "PSS",
            vestibularId: "2",
            body: "PSS dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "05 nov",
            url: "https://www.uepg.br/"
        },
        {
            id: "9",
            imageSource: require('../asset/image/photo3.webp'),
            title: "UTFPR",
            vestibularId: "7",
            body: "UTFPR sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "06 nov",
            url: "https://www.utfpr.edu.br/"
        },
        {
            id: "10",
            imageSource: require('../asset/image/photo1.webp'),
            title: "ENEM",
            vestibularId: "1",
            body: "ENEM ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "04 nov",
            url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem"
        },
        {
            id: "11",
            imageSource: require('../asset/image/photo2.webp'),
            title: "PSS",
            vestibularId: "2",
            body: "Ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "05 nov",
            url: "https://www.uepg.br/"
        },
        {
            id: "12",
            imageSource: require('../asset/image/photo3.webp'),
            title: "UTFPR",
            vestibularId: "7",
            body: "UTFPR sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "06 nov",
            url: "https://www.utfpr.edu.br/"
        },
        {
            id: "13",
            imageSource: require('../asset/image/photo3.webp'),
            title: "UTFPR",
            vestibularId: "7",
            body: "UTFPR sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "06 nov",
            url: "https://www.utfpr.edu.br/"
        },
        {
            id: "14",
            imageSource: require('../asset/image/photo1.webp'),
            title: "ENEM",
            vestibularId: "1",
            body: "ENEM ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "04 nov",
            url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem"
        },
        {
            id: "15",
            imageSource: require('../asset/image/photo2.webp'),
            title: "PSS",
            vestibularId: "2",
            body: "Ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "05 nov",
            url: "https://www.uepg.br/"
        },
        {
            id: "16",
            imageSource: require('../asset/image/photo3.webp'),
            title: "UTFPR",
            vestibularId: "7",
            body: "UTFPR sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "06 nov",
            url: "https://www.utfpr.edu.br/"
        },
    ]

    // const array = null

    const [data, setData] = useState(array)

    useEffect(() => {
        if (tabSelected != 0) {
            const newData = array.filter(item => parseInt(item.vestibularId) == tabSelected);
            setData(newData)
        } else {
            setData(array)
        }
    }, [tabSelected])

    return (
        <SafeAreaView style={[Style.container]}>
            <Tabs setSelected={setTabSelected} selected={tabSelected} tabName={setTabSelectedName} />
            <StatusBar />
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <ListItemNews
                        image={item.imageSource}
                        title={item.title}
                        body={item.body}
                        trailing={item.trailing}
                        url={item.url}
                    />
                }
                ItemSeparatorComponent={() => <Divisor />}
                ListEmptyComponent={ //Renderiza caso a lista esteja vazia
                    <EmptyContent text="Adicione um vestibular na sua lista" />
                }
                contentContainerStyle={Style.listContainer} //Define o estilo do container
            />
        </SafeAreaView>
    )
} 