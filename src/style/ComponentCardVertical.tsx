import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import ColorAuxiliar from "../asset/design/Color";
import { useWindowDimensions } from "react-native";

export default function () {

    const { dark } = useTheme();
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

    const { width } = useWindowDimensions()

    return StyleSheet.create({
        card: {
            backgroundColor: Color.tertiary,
            borderRadius: 12,
            padding: 6,
            // flex: 1,
            width: width/2-20,
            height: 150,
            margin: 4,
            
        },
        header: {
            flexDirection: 'row'
        },
        title: {
            padding: 6,
            flex: 3,
            // backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'flex-start'
        },
        icon: {
            padding: 6,
            flex: 1,
            // backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        description:{
            flex: 1,
            padding: 6,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            //backgroundColor: 'green'
        },
        text: {
            color: Color.onTertiary,
        }
    })
}