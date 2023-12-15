import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import ColorAuxiliar from "../asset/design/Color";

export default function () {

    const { dark } = useTheme();
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

    return StyleSheet.create({
        container: {
            padding: 16,
        },
        text: {
            color: Color.onSurfaceVariant,
        }
    })
}