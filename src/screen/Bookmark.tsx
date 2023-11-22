import React from 'react'
import { View, Text, FlatList } from 'react-native'

//style
import StyleAuxiliar from '../style/ScreenBookmark'

//component
import Card from '../component/Card'

export default function () {

    const Style = StyleAuxiliar()

    const array = [
        {
            id: '1',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
            isBlank: false
        },
        {
            id: '2',
            header: 'PSS',
            body: 'Proceso Seletivo Seriado',
            isBlank: false
        },
        {
            id: '3',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
            isBlank: false
        },
        {
            id: '4',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
            isBlank: false
        },
        {
            id: '5',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
            isBlank: false
        },
        {
            id: '6',
            header: 'PSS',
            body: 'Proceso Seletivo Seriado',
            isBlank: false
        },
        {
            id: '7',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
            isBlank: false
        },
        {
            id: '8',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
            isBlank: false
        },
        {
            id: '9',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
            isBlank: false
        },
        {
            id: '10',
            header: 'PSS',
            body: 'Proceso Seletivo Seriado',
            isBlank: false
        },
        {
            id: '11',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
            isBlank: false
        },
        {
            id: '12',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
            isBlank: true
        },
    ]

    return (
        <View style={{flex: 1}}>
            <FlatList
                data={array}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <Card
                        header={item.header}
                        body={item.body}
                        blank={item.isBlank}
                    />
                }
                contentContainerStyle={Style.container}
                numColumns={2}
            />
        </View>
    )
} 