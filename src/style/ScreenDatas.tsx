import { StyleSheet } from "react-native";
import { useContext } from "react";
import { TabsContext } from "../contexts/tabs";

export default function () {

    const { Color } = useContext<any>(TabsContext)

    return StyleSheet.create({
        container: {
            backgroundColor: Color.surface,
            flex: 1,
            paddingTop: 16,
        },
        listContainer: {
            paddingBottom: 200,
        },
        calendarContainer: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        calendar: {
            width: 328,
            marginBottom: 8,
            marginHorizontal: 16
        },
        headerCalendar: {
            paddingBottom: 16,
        },
        themeCalendar: {
            backgroundColor: Color.surface,
            calendarBackground: Color.surface,
            textSectionTitleColor: Color.onSurface,
            selectedDayBackgroundColor: Color.primary,
            selectedDayTextColor: Color.onPrimary,
            todayTextColor: Color.primary,
            dayTextColor: Color.onSurface,
            textDisabledColor: Color.onSurfaceVariant,
            monthTextColor: Color.onSurface,
            textDayFontFamily: 'Ubuntu',
            textDayFontSize: 16,
            textMonthFontFamily: 'Ubuntu-Bold',
            textMonthFontSize: 14,
            textDayHeaderFontFamily: 'Ubuntu',
            textDayHeaderFontSize: 16,
            dotColor: Color.primary,
        },
        buttonContainerHigh:{
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonContainer:{
            width: 328,
            minHeight: 16,
            alignItems: 'flex-end',
            flex: 1,
            paddingRight: 16,
            paddingBottom: 12
        },
        button: {
            color: Color.primary,
        }
    })
}