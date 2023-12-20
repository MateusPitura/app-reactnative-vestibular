import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import ColorAuxiliar from "../asset/design/Color";

export default function () {

    const { dark } = useTheme();
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

    return StyleSheet.create({
        container: {
            height: 47,
            alignItems: 'center'
        },
        containerTouchable:{
            flex: 1,
        },
        touchable:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 4,
            marginRight: 16,
        },
        textSelected: {
            color: Color.primary
        },
        textUnselected: {
            color: Color.onSurfaceVariant
        },
        indicatorContainer: {
            height: 5,
            marginRight: 16,
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        indicator: {
            borderBottomWidth: 3,
            borderColor: Color.primary,
            width: '80%',
            borderTopEndRadius: 3,
            borderTopStartRadius: 3,
        },
        listContainer: {
            paddingLeft: 52,
        },
        divisor: {
            borderBottomWidth: 1,
            borderColor: Color.outlineVariant,
        }
    })
}