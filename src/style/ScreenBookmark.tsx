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
            padding: 16,
            gap: 8,
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
        card: {
            backgroundColor: Color.tertiary,
            borderRadius: 12,
            padding: 6,
            minWidth: '30%',
            maxWidth: '50%',
            flex: 1,
            height: 150
            
        },
        header: {
            flexDirection: 'row'
        },
        title: {
            padding: 6,
            flex: 3,
            // backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'flex-start'
        },
        icon: {
            padding: 6,
            flex: 1,
            // backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        description:{
            flex: 1,
            padding: 6,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            // backgroundColor: 'green'
        },
        text: {
            color: Color.onTertiary,
        }
    })
}