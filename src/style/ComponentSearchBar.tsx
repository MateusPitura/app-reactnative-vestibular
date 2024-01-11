import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import ColorAuxiliar from "../asset/design/Color";

export default function () {

    const { dark } = useTheme();
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

    return StyleSheet.create({
        box: {
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 16,
        },
        container: {
            backgroundColor: Color.surfaceContainerHigh,
            height: 48,
            width: '100%',
            maxWidth: 720,
            marginVertical: 16,
            borderRadius: 24,
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',
        },
        textContainer:{
            paddingRight: 16
        },
        text: {
            color: Color.onSurfaceVariant
        },
        iconContainer: {
            paddingHorizontal: 16
        },
        modal:{
            flex: 1,
            backgroundColor: Color.surfaceContainerHigh,
        },
        searchArea:{
            alignItems: 'center',
            justifyContent: 'center',
            height: 72,
            backgroundColor: Color.surfaceContainerHigh,
            flexDirection: 'row',
        },
        textSearchContainer:{
            flex: 1,
        },
        textSearch:{
            color: Color.onSurfaceVariant
        },
        divisor:{
            borderBottomWidth: 1,
            borderColor: Color.outline,
        },
        content:{
            marginHorizontal: 16,
        }
    })
}