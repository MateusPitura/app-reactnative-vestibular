import React, { useCallback, useContext, useEffect, useState } from "react";
import { Calendar, LocaleConfig } from 'react-native-calendars';

//style
import StyleAuxiliar from '../style/ScreenDatas'

//icon
import ArrowLeft from '../asset/icon/arrow-left.svg'
import ArrowRight from '../asset/icon/arrow-right.svg'
import { TabsContext } from "../contexts/tabs";

export default function ({ setDaySelected, markedDates, firstDay, setFirstDay }: any) {

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

    const { Color } = useContext<any>(TabsContext)
    const [updateBackgroundCalendar, setUpdateBackgroundCalendar] = useState(0)

    const Style = StyleAuxiliar()

    useEffect(()=>{
        setUpdateBackgroundCalendar(prev => prev + 1)
    }, [Color])

    return (
        <Calendar
            key={updateBackgroundCalendar}
            style={Style.calendar}
            onDayPress={day => {
                setDaySelected(day.dateString);
            }}
            onMonthChange={day => {
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
            markedDates={markedDates}
        />
    )
}