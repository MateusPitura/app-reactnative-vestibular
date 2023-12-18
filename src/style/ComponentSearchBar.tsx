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
            borderRadius: 28,
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
        }
    })
}