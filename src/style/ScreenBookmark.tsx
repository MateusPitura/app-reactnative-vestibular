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
        containerList: {
            backgroundColor: Color.surface,
            paddingTop: 16,
            paddingBottom: 200,
        },
        colums:{
            paddingHorizontal: 12
        }
    })
}