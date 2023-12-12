import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import ColorAuxiliar from "../asset/design/Color";

export default function () {

    const { dark } = useTheme();
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

    return StyleSheet.create({
        container:{
            flexDirection: 'row'
        },
        label: {
            color: Color.onSurface,
        },
        radioButton: {
            height: 48,
            paddingRight: 12,
            alignItems: 'center',
            justifyContent: 'center'
        },
        text:{
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
}