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
            paddingHorizontal: 12
        },
        containerListHorizontalIfNull: {
            flex: 1,
            paddingHorizontal: 12
        },
        containerListVertical: {
            paddingBottom: 200,
        },
        colums:{
            paddingHorizontal: 12
        }
    })
}