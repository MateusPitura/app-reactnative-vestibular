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

    const { staticData } = useContext<any>(TabsContext)

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
            const dia = new Date(item.data).toISOString()
            const isSelected = daySelected ? dia.includes(daySelected) : false
            days[dia.split("T")[0]] = {
                selected: isSelected, //Se o dia do evento for igual a data selecionada ele irá selecionar o dia
                marked: tabSelected == 0 ? true : item.universidade == tabSelected, //Propriedade da bolinha
                disableTouchEvent: isSelected
            }
        })
        setMarkedDates(days)
    }

    useEffect(() => {
        if (tabSelected != 0 && daySelected != '') { //Se não for a tab 'all' e se algum dia estiver selecionado
            const newData = staticData?.filter((item: any) =>
                parseInt(item.universidade) == tabSelected &&
                daySelected ? new Date(item.data).toISOString().includes(daySelected) : false &&
                (new Date(item.data).getTime() > (Date.now() - (1000 * 60 * 60 * 24 * 7)))
            );
            setData(newData)
        } else if (tabSelected != 0) { //Se não for a tab 'all'
            const newData = staticData?.filter((item: any) =>
                parseInt(item.universidade) == tabSelected &&
                (new Date(item.data).getTime() > (Date.now() - (1000 * 60 * 60 * 24 * 7)))
            );
            setData(newData)
        } else if (daySelected != '') { // Se um dia estiver selecionado
            const newData = staticData?.filter((item: any) => 
                daySelected ? new Date(item.data).toISOString().includes(daySelected) : false &&
                (new Date(item.data).getTime() > (Date.now() - (1000 * 60 * 60 * 24 * 7)))
            );
            setData(newData)
        } else { //No caso quando nenhum filtro é aplicado
            const newData = staticData?.filter((item: any) => 
                (new Date(item.data).getTime() > (Date.now() - (1000 * 60 * 60 * 24 * 7)))
            );
            setData(newData)
        }
        markData()
    }, [tabSelected, daySelected, staticData])

    return (
        <SafeAreaView style={Style.container}>
            <Tabs setSelected={setTabSelected} selected={tabSelected} />
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