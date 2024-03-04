import React, { useContext } from 'react'
import { View, FlatList, SafeAreaView, ToastAndroid } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { TabsContext } from "../contexts/tabs";

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

export default () => {

    const Style = StyleAuxiliar()

    const { dark } = useTheme()
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

    const { tabs, setTabs } = useContext<any>(TabsContext)

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

    const addNewData = async (item: any) => {
        const newData = [{
            id: item.id,
            title: item.title,
            body: item.body
        }]
        if (await add(newData) == -1) {
            handleCallToast("Vestibular já escolhido")
            return -1
        }
        handleCallToast("Vestibular adicionado")
        read(setTabs)
        return 0
    }

    const removeData = async (id: any) => {
        await remove(id)
        handleCallToast("Vestibular removido")
        read(setTabs)
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
            <SearchBar add={addNewData} text="Pesquise por vestibulares" />
            <FlatList
                data={tabs}
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