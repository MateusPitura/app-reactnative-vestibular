import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import ColorAuxiliar from "../asset/design/Color";

export default function(){

    const { dark } = useTheme();
    const Color = dark==true?ColorAuxiliar['dark']:ColorAuxiliar['light']

    return StyleSheet.create({
        container:{
            backgroundColor: Color.surface,
            flex: 1,
            paddingTop: 16
        },
        listContainer:{
            paddingBottom: 200,
            paddingTop: 16
        },
    })
}