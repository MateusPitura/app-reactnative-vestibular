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
            paddingTop: 16
        },
        listContainer: {
            paddingBottom: 200,
            paddingTop: 16
        },
        calendarContainer:{
            height: 375,
            minWidth: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Color.surface,
        },
        calendar: {
            height: 375,
            minWidth: '100%',
            backgroundColor: Color.surface,
        },
        themeCalendar:{
            backgroundColor: Color.surface,
            calendarBackground: Color.surface,
            textSectionTitleColor: Color.onSurface,
            selectedDayBackgroundColor: Color.primary,
            selectedDayTextColor: Color.onPrimary,
            todayTextColor: Color.primary,
            dayTextColor: Color.onSurface,
            textDisabledColor: Color.onSurfaceVariant
        }
    })
}