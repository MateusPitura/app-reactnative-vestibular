import React, { useEffect, useState, useContext } from 'react'
import { SafeAreaView, FlatList, View, TouchableOpacity, Text, ScrollView } from 'react-native'
import { TabsContext } from "../contexts/tabs";

//style
import StyleAuxiliar from '../style/ScreenDatas'
import Typography from '../asset/design/Typography';

//component
import ListItemCalendar from '../component/ListItemCalendar'
import EmptyContent from '../component/EmptyContent'
import Label from '../component/Label'
import Tabs from '../component/Tabs'
import Calendar from '../component/Calendar';

export default function () {

    const Style = StyleAuxiliar()

    // const array = [
    //     {
    //         id: "1",
    //         title: "ENEM",
    //         vestibularId: "1",
    //         body: "13h00 às 14h00",
    //         day: "30",
    //         month: "jan",
    //         date: '2024-03-26'
    //     },
    //     {
    //         id: "2",
    //         title: "PSS",
    //         vestibularId: "2",
    //         body: "Todo o dia",
    //         day: "05",
    //         month: "fev",
    //         date: '2024-02-05'
    //     },
    //     {
    //         id: "3",
    //         title: "UTFPR",
    //         vestibularId: "7",
    //         body: "13h00 às 14h00",
    //         day: "06",
    //         month: "mar",
    //         date: '2024-03-06'
    //     },
    //     {
    //         id: "4",
    //         title: "ENEM",
    //         vestibularId: "1",
    //         body: "Todo o dia",
    //         day: "04",
    //         month: "abr",
    //         date: '2024-04-04'
    //     },
    //     {
    //         id: "5",
    //         title: "PSS",
    //         vestibularId: "2",
    //         body: "13h00 às 14h00",
    //         day: "05",
    //         month: "mai",
    //         date: '2024-05-05'
    //     },
    //     {
    //         id: "6",
    //         title: "UTFPR",
    //         vestibularId: "7",
    //         body: "Todo o dia",
    //         day: "06",
    //         month: "jun",
    //         date: '2024-06-06'
    //     },
    //     {
    //         id: "7",
    //         title: "ENEM",
    //         vestibularId: "1",
    //         body: "13h00 às 14h00",
    //         day: "04",
    //         month: "jul",
    //         date: '2024-07-04'
    //     },
    //     {
    //         id: "8",
    //         title: "PSS",
    //         vestibularId: "2",
    //         body: "Todo o dia",
    //         day: "05",
    //         month: "ago",
    //         date: '2024-08-05'
    //     },
    //     {
    //         id: "9",
    //         title: "UTFPR",
    //         vestibularId: "7",
    //         body: "13h00 às 14h00",
    //         day: "06",
    //         month: "set",
    //         date: '2024-09-06'
    //     },
    //     {
    //         id: "10",
    //         title: "ENEM",
    //         vestibularId: "1",
    //         body: "Todo o dia",
    //         day: "04",
    //         month: "out",
    //         date: '2024-10-04'
    //     },
    //     {
    //         id: "11",
    //         title: "PSS",
    //         vestibularId: "2",
    //         body: "13h00 às 14h00",
    //         day: "05",
    //         month: "nov",
    //         date: '2024-11-05'
    //     },
    //     {
    //         id: "12",
    //         title: "UTFPR",
    //         vestibularId: "7",
    //         body: "Todo o dia",
    //         day: "06",
    //         month: "dez",
    //         date: '2024-12-06'
    //     },
    // ]

    // const array = null

    const { tabs } = useContext<any>(TabsContext)

    const retrieveData = async () => {
        if(tabs[0]!=undefined){
            const listUniversidadeId = tabs?.map((item: any) => item.id)
            const dataFromServer = await fetch(`http://172.17.0.1:3000/eventos?universidade=${listUniversidadeId}`)
            const dataJsoned = await dataFromServer.json()
            setStaticData(dataJsoned)
        }
    }

    useEffect(() => {
        retrieveData()
    }, [tabs])

    const [staticData, setStaticData] = useState<any>()
    const [tabSelected, setTabSelected] = useState(0)
    const [data, setData] = useState()
    const [daySelected, setDaySelected] = useState('');
    const [markedDates, setMarkedDates] = useState({})
    const [firstDay, setFirstDay] = useState('');

    const markData = () => {
        const days = { //Cria um array com um dia por default que será responsável por marcar os dias selecionados
            [daySelected]: {
                selected: true,
                marked: false,
                disableTouchEvent: true
            },
        }
        staticData?.map((item: any) => { //Itera a lista de vestibulares adicionando ao array a data de cada evento para aparecer um bolinha no dia de cada evento
            const isSelected = daySelected?item.data.includes(daySelected):false
            days[item.data.split("T")[0]] = {
                selected: isSelected, //Se o dia do evento for igual a data selecionada ele irá selecionar o dia
                marked: tabSelected == 0 ? true : item.universidade == tabSelected, //Propriedade da bolinha
                disableTouchEvent: isSelected
            }
        })
        setMarkedDates(days)
    }

    useEffect(() => {
        if (tabSelected != 0 && daySelected != '') { //Se não for a tab 'all' e se algum dia estiver selecionado
            const newData = staticData?.filter((item: any) => parseInt(item.universidade) == tabSelected && daySelected?item.data.includes(daySelected):false);
            setData(newData)
        } else if (tabSelected != 0) { //Se não for a tab 'all'
            const newData = staticData?.filter((item: any) => parseInt(item.universidade) == tabSelected);
            setData(newData)
        } else if (daySelected != '') { // Se um dia estiver selecionado
            const newData = staticData?.filter((item: any) => daySelected?item.data.includes(daySelected):false);
            setData(newData)
        } else { //No caso quando nenhum filtro é aplicado
            setData(staticData)
        }
        markData()
    }, [tabSelected, daySelected, staticData])

    return (
        <SafeAreaView style={Style.container}>
            <Tabs setSelected={setTabSelected} selected={tabSelected}/>
            <ScrollView>
                <View style={Style.calendarContainer}>
                    <Calendar
                        setDaySelected={setDaySelected}
                        markedDates={markedDates}
                        firstDay={firstDay}
                        setFirstDay={setFirstDay}
                    />
                </View>
                <View style={Style.buttonContainerHigh}>
                    <TouchableOpacity
                        style={Style.buttonContainer}
                        onPress={() => {
                            setDaySelected('')
                        }}
                    >
                        <Text style={[Style.button, Typography.labelLarge]}>Limpar</Text>
                    </TouchableOpacity>
                </View>
                <Label text="Próximos eventos" />
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <ListItemCalendar
                            date={item.data}
                            title={item.universidadeSigla}
                            body={item.descricao}
                        />
                    }
                    contentContainerStyle={Style.listContainer}
                    scrollEnabled={false}
                    ListEmptyComponent={
                        <EmptyContent text="Nenhum evento encontrado" />
                    }
                />
            </ScrollView>
        </SafeAreaView>
    )
} 