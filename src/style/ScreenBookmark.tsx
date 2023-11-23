import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import ColorAuxiliar from "../asset/design/Color";
import { useWindowDimensions } from "react-native";

export default function () {

    const { dark } = useTheme();
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']
    const { width } = useWindowDimensions();

    return StyleSheet.create({
        container: {
            backgroundColor: Color.surface,
            padding: 12,
            paddingBottom: 200,
        },
    })
}