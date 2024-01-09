import React, { useState, useEffect } from 'react'
import { View, FlatList, SafeAreaView, ToastAndroid } from 'react-native'
import { useTheme } from '@react-navigation/native'

//style
import StyleAuxiliar from '../style/ScreenSalvos'
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

//controller
import { add, remove, read } from '../model/SalvosController'

export default function () {

    const Style = StyleAuxiliar()

    const { dark } = useTheme()
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

    const array = [
        {
            id: '1',
            title: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
        },
        {
            id: '2',
            title: 'PSS',
            body: 'Processo Seletivo Seriado',
        },
        {
            id: '3',
            title: 'UFPR',
            body: 'Universidade Federal do Paraná',
        },
        {
            id: '4',
            title: 'UEL',
            body: 'Universidade Estadual de Londrina',
        },
        {
            id: '5',
            title: 'UEM',
            body: 'Universidade Estadual de Maringá',
        },
        {
            id: '6',
            title: 'PUCPR',
            body: 'Pontifícia Universidade Católica do Paraná',
        },
        {
            id: '7',
            title: 'UTFPR',
            body: 'Universidade Tecnológica Federal do Paraná',
        },
        {
            id: '8',
            title: 'UP',
            body: 'Universidade Positivo',
        },
        {
            id: '9',
            title: 'UNOPAR',
            body: 'Universidade Norte do Paraná',
        },
    ]

    // const array = null

    const [data, setData] = useState([])

    useEffect(() => {
        read(setData) 
    }, [])

    const addNewData = async (item: any) => {
        const newData = [{
            id: item.id,
            title: item.title,
            body: item.body
        }]
        if (await add(newData) == -1) {
            return
        }
        handleCallToast("Vestibular adicionado")
        read(setData)
    }

    const removeData = async (id: any) => {
        await remove(id)
        handleCallToast("Vestibular removido")
        read(setData)
    }

    const handleCallToast = (message: string) => {
        ToastAndroid.showWithGravityAndOffset(
            message,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            0,
            200
        )
    }

    return (
        <SafeAreaView style={Style.container}>
            <SearchBar text="Pesquise por vestibulares" />
            <FlatList
                data={data}
                // @ts-ignore
                keyExtractor={item => item.id}
                renderItem={({ item }: any) =>
                    <CardVertical
                        title={item.title}
                        body={item.body}
                        onPress={() => { removeData(item.id) }}
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
                                    title={item.title}
                                    body={item.body}
                                    onPress={() => { addNewData(item) }}
                                >
                                    <Save
                                        height={24}
                                        width={24}
                                        fill={Color.onTertiary}
                                    />
                                </CardHorizontal>
                            }
                            contentContainerStyle={
                                array == null ?
                                    Style.containerListHorizontalIfNull
                                    :
                                    Style.containerListHorizontal
                            }
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            ListEmptyComponent={
                                <EmptyContent text="No momento não há recomendações" />
                            }
                        />
                        <Label text="Vestibulares salvos" />
                    </View>
                }
                ListEmptyComponent={
                    <EmptyContent text="Adicione um vestibular na sua lista" />
                }
                columnWrapperStyle={Style.colums}
            />
        </SafeAreaView>
    )
} 