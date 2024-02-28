import React, { useState, useCallback, useEffect } from 'react'
import { SafeAreaView, FlatList, View, Text } from 'react-native'
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
    const [selected, setSelected] = useState('');
    const [controlCalendarView, setControlCalendarView] = useState(0)

    const { dark } = useTheme();
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

    useEffect(()=>{
        setControlCalendarView(prev => prev + 1)
    }, [dark])

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
            month: "jan"
        },
        {
            id: "2",
            title: "PSS",
            vestibularId: "2",
            body: "Todo o dia",
            day: "05",
            month: "fev"
        },
        {
            id: "3",
            title: "UTFPR",
            vestibularId: "7",
            body: "13h00 às 14h00",
            day: "06",
            month: "mar"
        },
        {
            id: "4",
            title: "ENEM",
            vestibularId: "1",
            body: "Todo o dia",
            day: "04",
            month: "abr"
        },
        {
            id: "5",
            title: "PSS",
            vestibularId: "2",
            body: "13h00 às 14h00",
            day: "05",
            month: "mai"
        },
        {
            id: "6",
            title: "UTFPR",
            vestibularId: "7",
            body: "Todo o dia",
            day: "06",
            month: "jun"
        },
        {
            id: "7",
            title: "ENEM",
            vestibularId: "1",
            body: "13h00 às 14h00",
            day: "04",
            month: "jul"
        },
        {
            id: "8",
            title: "PSS",
            vestibularId: "2",
            body: "Todo o dia",
            day: "05",
            month: "ago"
        },
        {
            id: "9",
            title: "UTFPR",
            vestibularId: "7",
            body: "13h00 às 14h00",
            day: "06",
            month: "set"
        },
        {
            id: "10",
            title: "ENEM",
            vestibularId: "1",
            body: "Todo o dia",
            day: "04",
            month: "out"
        },
        {
            id: "11",
            title: "PSS",
            vestibularId: "2",
            body: "13h00 às 14h00",
            day: "05",
            month: "nov"
        },
        {
            id: "12",
            title: "UTFPR",
            vestibularId: "7",
            body: "Todo o dia",
            day: "06",
            month: "dez"
        },
    ]

    const [data, setData] = useState(array)

    useEffect(() => {
        if (tabSelected != 0) {
            const newData = array.filter(item => parseInt(item.vestibularId) == tabSelected);
            setData(newData)
        } else {
            setData(array)
        }
    }, [tabSelected])

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
            <View style={Style.calendarContainer} key={controlCalendarView}>
                <Calendar
                    style={Style.calendar}
                    onDayPress={day => {
                        setSelected(day.dateString);
                    }}
                    markedDates={{
                        [selected]: { selected: true, disableTouchEvent: true }
                    }}
                    theme={Style.themeCalendar}
                    showSixWeeks={true}
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
                />
            </View>
            <View style={{ flex: 1, }}>
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
                        <EmptyContent text="Adicione um vestibular na sua lista" />
                    }
                    ListHeaderComponent={() => (
                        <Label text="Próximos eventos" />
                    )}
                />
            </View>
        </SafeAreaView>
    )
} 