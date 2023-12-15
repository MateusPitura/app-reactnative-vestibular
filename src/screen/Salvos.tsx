import React from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import { useTheme } from '@react-navigation/native'

//style
import StyleAuxiliar from '../style/ScreenBookmark'
import ColorAuxiliar from '../asset/design/Color'

//component
import CardVertical from '../component/CardVertical'
import CardHorizontal from '../component/CardHorizontal'
import Label from '../component/Label'
import EmptyContent from '../component/EmptyContent'
import SearchBar from '../component/SearchBar'

//icon
import Trash from '../asset/icon/delete.svg'
import Save from '../asset/icon/add-bookmark.svg'

export default function () {

    const Style = StyleAuxiliar()

    const { dark } = useTheme()
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

    const array = [
        {
            id: '1',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
        },
        {
            id: '2',
            header: 'PSS',
            body: 'Proceso Seletivo Seriado',
        },
        {
            id: '3',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
        },
        {
            id: '4',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
        },
        {
            id: '5',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
        },
        {
            id: '6',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
        },
        {
            id: '7',
            header: 'PSS',
            body: 'Proceso Seletivo Seriado',
        },
        {
            id: '8',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
        },
        {
            id: '9',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
        },
    ]

    // const array = null

    return (
        <View style={Style.container}>
            <SearchBar text="Pesquise por vestibulares" />
            <FlatList
                data={array}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <CardVertical
                        header={item.header}
                        body={item.body}
                    >
                        <Trash
                            height={24}
                            width={24}
                            fill={Color.onTertiary}
                        />
                    </CardVertical>
                }
                contentContainerStyle={Style.containerListVertical}
                numColumns={2}
                ListHeaderComponent={
                    <View>
                        <Label text="Vestibulares recomendados" />
                        <FlatList
                            data={array}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <CardHorizontal
                                    header={item.header}
                                    body={item.body}
                                >
                                    <Save
                                        height={24}
                                        width={24}
                                        fill={Color.onTertiary}
                                    />
                                </CardHorizontal>
                            }
                            contentContainerStyle={Style.containerListHorizontal}
                            horizontal={true}

                            showsHorizontalScrollIndicator={false}
                            ListEmptyComponent={
                                <EmptyContent text="Adicione um vestibular ao seus favoritos" />
                            }
                        />
                        <Label text="Vestibulares salvos" />
                    </View>
                }
                ListEmptyComponent={
                    <EmptyContent text="Adicione um vestibular ao seus favoritos" />
                }
                columnWrapperStyle={Style.colums}
            />
        </View>
    )
} 