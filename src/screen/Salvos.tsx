import React, { useContext, useEffect, useState } from 'react'
import { View, FlatList, SafeAreaView, ToastAndroid, ScrollView } from 'react-native'
import { TabsContext } from "../contexts/tabs";

//style
import StyleAuxiliar from '../style/ScreenSalvos'

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

    const { Color } = useContext<any>(TabsContext)

    const { tabs, setTabs } = useContext<any>(TabsContext)

    const retrieveData = async () => {
        const dataFromServer = await fetch("http://172.17.0.1:3000/universidades")
        const dataJsoned = await dataFromServer.json()
        setStaticData(dataJsoned)
    }

    useEffect(() => {
        retrieveData()
    }, [])

    const [staticData, setStaticData] = useState()

    const addNewData = async (item: any) => {
        const newData = [{
            id: item.id,
            title: item.sigla,
            body: item.nome
        }]
        if (await add(newData) == -1) {
            handleCallToast("Universidade já escolhida")
            return -1
        }
        read(setTabs)
        handleCallToast("Universidade adicionada")
        return 0
    }

    const removeData = async (id: any) => {
        await remove(id)
        handleCallToast("Universidade removida")
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
            <SearchBar add={addNewData} text="Pesquise por universidades" data={staticData}/>
            <ScrollView>
                <Label text="Universidades recomendadas" />
                <FlatList
                    data={staticData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <CardHorizontal
                            title={item.sigla}
                            body={item.nome}
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
                        staticData == null ?
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
                <Label text="Universidades salvas" />
                <FlatList
                    scrollEnabled={false}
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
                    ListEmptyComponent={
                        <EmptyContent text="Adicione uma universidade na sua lista" />
                    }
                    columnWrapperStyle={Style.colums}
                />
            </ScrollView>
        </SafeAreaView>
    )
} 