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
            height: 56,
            width: '100%',
            maxWidth: 720,
            marginVertical: 16,
            borderRadius: 24,
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',
        },
        textContainer: {
            paddingRight: 16,
            flex: 1,
        },
        text: {
            color: Color.onSurfaceVariant
        },
        textSelected:{
            color: Color.onSurface
        },
        iconContainer: {
            marginHorizontal: 16
        },
        modal: {
            flex: 1,
            backgroundColor: Color.surfaceContainerHigh,
        },
        searchArea: {
            alignItems: 'center',
            marginTop: 24,
            height: 72,
            paddingTop: 16,
            flexDirection: 'row',
        },
        textSearchContainer: {
            flex: 1,
        },
        divisor: {
            borderBottomWidth: 1,
            borderColor: Color.outline,
        },
        content: {
            flex: 1,
        },
        containerListVertical: {
            paddingTop: 12,
            paddingBottom: 300
        },
        colums: {
            paddingHorizontal: 12
        }
    })
}