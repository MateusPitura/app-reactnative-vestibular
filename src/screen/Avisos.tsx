import React, { useState, useEffect, useContext } from 'react'
import { SafeAreaView, FlatList } from 'react-native'

//style
import StyleAuxiliar from '../style/ScreenAvisos'

//component
import ListItemNews from '../component/ListItemNews';
import Divisor from '../component/Divisor';
import EmptyContent from '../component/EmptyContent';
import StatusBar from '../component/StatusBar';
import Tabs from '../component/Tabs';
import { TabsContext } from '../contexts/tabs';

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

    const { tabs } = useContext<any>(TabsContext)

    const Style = StyleAuxiliar();

    const retrieveData = async () => {
        if(tabs[0]!=undefined){
            const listUniversidadeId = tabs?.map((item: any) => item.id)
            const dataFromServer = await fetch(`http://172.17.0.1:3000/avisos?universidade=${listUniversidadeId}`)
            const dataJsoned = await dataFromServer.json()
            setStaticData(dataJsoned)
        }
    }

    useEffect(() => {
        retrieveData()
    }, [tabs])

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
            <Tabs setSelected={setTabSelected} selected={tabSelected}/>
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
                    <EmptyContent text="Adicione uma universidade na sua lista" />
                }
                contentContainerStyle={Style.listContainer} //Define o estilo do container
            />
        </SafeAreaView>
    )
} 