import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import ColorAuxiliar from "../asset/design/Color";

export default function () {

    const { dark } = useTheme();
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

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
            minWidth: '100%',
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
            dotColor: Color.primary
        },
        buttonContainer:{
            minHeight: 16,
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingRight: 16,
            paddingBottom: 12
        },
        button: {
            color: Color.primary,
        }
    })
}