import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import ColorAuxiliar from "../asset/design/Color";

export default function () {

    const { dark } = useTheme();
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

    return StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: Color.surface,
        },
        containerListHorizontal: {
            backgroundColor: Color.surface,
            paddingHorizontal: 12
        },
        containerListVertical: {
            backgroundColor: Color.surface,
            paddingBottom: 200,
        },
        colums:{
            paddingHorizontal: 12
        }
    })
}