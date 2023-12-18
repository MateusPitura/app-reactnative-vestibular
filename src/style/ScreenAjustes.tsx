import { StyleSheet } from "react-native";
import ColorAuxiliar from "../asset/design/Color";
import { useTheme } from "@react-navigation/native";

export default function(){

    const { dark } = useTheme(); //Variável booleana que pega se é dark ou light de acordo com a paleta de cores falsa
    const Color = dark==true?ColorAuxiliar["dark"]:ColorAuxiliar["light"]; //Define a paleta de cores real a ser usada com base no parâmetro recebido
    
    return StyleSheet.create({
        container: {
            backgroundColor: Color.surface,
            flex: 1,
            padding: 16,
        },
        title: {
            color: Color.onSurface,
            paddingBottom: 8
        },
    })
}