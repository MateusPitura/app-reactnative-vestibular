import React, { useState, useCallback, useEffect } from 'react'
import { SafeAreaView, FlatList, View, TouchableOpacity, Text } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useTheme } from "@react-navigation/native";
import ColorAuxiliar from "../asset/design/Color";

//style
import StyleAuxiliar from '../style/ScreenDatas'
import Typography from '../asset/design/Typography';

//component
import ListItemCalendar from '../component/ListItemCalendar'
import EmptyContent from '../component/EmptyContent'
import Label from '../component/Label'
import Tabs from '../component/Tabs'

//controller
import { read } from '../model/SalvosController'

//icon
import ArrowLeft from '../asset/icon/arrow-left.svg'
import ArrowRight from '../asset/icon/arrow-right.svg'

export default function () {

    const [tabSelected, setTabSelected] = useState(0)
    const [tabs, setTabs] = useState([])
    const [daySelected, setDaySelected] = useState('');
    const [firstDay, setFirstDay] = useState('');

    const { dark } = useTheme();
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

    useFocusEffect(
        useCallback(() => {
            read(setTabs)
        }, [])
    )

    const Style = StyleAuxiliar()

    const array = [
        {
            id: "1",
            title: "ENEM",
            vestibularId: "1",
            body: "13h00 às 14h00",
            day: "30",
            month: "jan",
            date: '2024-02-05'
        },
        {
            id: "2",
            title: "PSS",
            vestibularId: "2",
            body: "Todo o dia",
            day: "05",
            month: "fev",
            date: '2024-02-05'
        },
        {
            id: "3",
            title: "UTFPR",
            vestibularId: "7",
            body: "13h00 às 14h00",
            day: "06",
            month: "mar",
            date: '2024-03-06'
        },
        {
            id: "4",
            title: "ENEM",
            vestibularId: "1",
            body: "Todo o dia",
            day: "04",
            month: "abr",
            date: '2024-04-04'
        },
        {
            id: "5",
            title: "PSS",
            vestibularId: "2",
            body: "13h00 às 14h00",
            day: "05",
            month: "mai",
            date: '2024-05-05'
        },
        {
            id: "6",
            title: "UTFPR",
            vestibularId: "7",
            body: "Todo o dia",
            day: "06",
            month: "jun",
            date: '2024-06-06'
        },
        {
            id: "7",
            title: "ENEM",
            vestibularId: "1",
            body: "13h00 às 14h00",
            day: "04",
            month: "jul",
            date: '2024-07-04'
        },
        {
            id: "8",
            title: "PSS",
            vestibularId: "2",
            body: "Todo o dia",
            day: "05",
            month: "ago",
            date: '2024-08-05'
        },
        {
            id: "9",
            title: "UTFPR",
            vestibularId: "7",
            body: "13h00 às 14h00",
            day: "06",
            month: "set",
            date: '2024-09-06'
        },
        {
            id: "10",
            title: "ENEM",
            vestibularId: "1",
            body: "Todo o dia",
            day: "04",
            month: "out",
            date: '2024-10-04'
        },
        {
            id: "11",
            title: "PSS",
            vestibularId: "2",
            body: "13h00 às 14h00",
            day: "05",
            month: "nov",
            date: '2024-11-05'
        },
        {
            id: "12",
            title: "UTFPR",
            vestibularId: "7",
            body: "Todo o dia",
            day: "06",
            month: "dez",
            date: '2024-12-06'
        },
    ]

    const markedDays = () => {
        const days = { //Cria um array com um dia por default que será responsável por marcar os dias selecionados
            [daySelected]: {
                selected: true,
                marked: false,
                disableTouchEvent: true
            },
        }
        array.map(item => { //Itera a lista de vestibulares adicionando ao array a data de cada evento para aparecer um bolinha no dia de cada evento
            const isSelected = item.date == daySelected
            days[item.date] = {
                selected: isSelected, //Se o dia do evento for igual a data selecionada ele irá selecionar o dia
                marked: true, //Propriedade da bolinha
                disableTouchEvent: isSelected
            }
        })
        return days
    }

    const [data, setData] = useState(array)

    useEffect(() => {
        if (tabSelected != 0 && daySelected != '') { //Se não for a tab 'all' e se um dia estiver selecionado
            const newData = array.filter(item => parseInt(item.vestibularId) == tabSelected && item.date == daySelected);
            setData(newData)
        } else if (tabSelected != 0) { //Se não for a tab 'all'
            const newData = array.filter(item => parseInt(item.vestibularId) == tabSelected);
            setData(newData)
        } else if (daySelected != '') { // Se um dia estiver selecionado
            const newData = array.filter(item => item.date == daySelected);
            setData(newData)
        } else { //No caso quando nenhum filtro é aplicado
            setData(array)
        }
    }, [tabSelected, daySelected])

    // const array = null

    LocaleConfig.locales['br'] = {
        monthNames: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro'
        ],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'],
        dayNames: ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'],
        dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        today: "Hoje"
    };

    LocaleConfig.defaultLocale = 'br';

    return (
        <SafeAreaView style={Style.container}>
            <Tabs data={tabs} setSelected={setTabSelected} selected={tabSelected} />
            <View>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <ListItemCalendar
                            day={item.day}
                            month={item.month}
                            title={item.title}
                            body={item.body}
                        />
                    }
                    contentContainerStyle={Style.listContainer}
                    ListEmptyComponent={
                        <EmptyContent text="Nenhum evento encontrado" />
                    }
                    ListHeaderComponent={() => (
                        <View>
                            <View style={Style.calendarContainer}>
                                <Calendar
                                    style={Style.calendar}
                                    onDayPress={day => {
                                        setDaySelected(day.dateString);
                                        setFirstDay(day.dateString)
                                    }}
                                    theme={Style.themeCalendar}
                                    showSixWeeks={true}
                                    initialDate={firstDay} //Caso seja '' usa a data atual, quando é selecionado uma data ao renderizar o componente voltaria para a data atual caso não tivesse esse argumento
                                    hideExtraDays={false}
                                    renderArrow={direction =>
                                        direction == "left" ?
                                            <ArrowLeft
                                                height={24}
                                                width={24}
                                                fill={Color.onSurfaceVariant}
                                            />
                                            :
                                            <ArrowRight
                                                height={24}
                                                width={24}
                                                fill={Color.onSurfaceVariant}
                                            />
                                    }
                                    headerStyle={Style.headerCalendar}
                                    markedDates={markedDays()}
                                />
                            </View>
                            <View style={Style.buttonContainer}>
                                <TouchableOpacity
                                    onPress={() => setDaySelected('')}
                                >
                                    <Text style={[Style.button, Typography.labelLarge]}>Limpar</Text>
                                </TouchableOpacity>
                            </View>
                            <Label text="Próximos eventos" />
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    )
} 