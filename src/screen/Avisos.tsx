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

type avisosType = {
    id: number,
    data: Date,
    title: string,
    descricao: string,
    url: string,
    universidade: number,
    universidadeImage: string
}

export default function () {

    const [tabSelected, setTabSelected] = useState(0)
    const [tabSelectedName, setTabSelectedName] = useState('')

    const Style = StyleAuxiliar();

    const retrieveData = async () => {
        const dataFromServer = await fetch("http://172.17.0.1:3000/avisos")
        const dataJsoned = await dataFromServer.json()
        setStaticData(dataJsoned.content)
    }

    useEffect(() => {
        retrieveData()
    }, [])

    const [staticData, setStaticData] = useState<avisosType[]>()
    const [data, setData] = useState<avisosType[]>()

    useEffect(() => {
        if (tabSelected != 0) {
            const newData = staticData?.filter((item: avisosType) => item.universidade == tabSelected);
            setData(newData)
        } else {
            setData(staticData)
        }
    }, [tabSelected, staticData])

    return (
        <SafeAreaView style={[Style.container]}>
            <Tabs setSelected={setTabSelected} selected={tabSelected} tabName={setTabSelectedName} />
            <StatusBar />
            <FlatList
                data={data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <ListItemNews
                        image={item.universidadeImage}
                        title={item.title}
                        body={item.descricao}
                        trailing={item.data}
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