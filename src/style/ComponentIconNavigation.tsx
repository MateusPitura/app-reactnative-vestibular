import { StyleSheet } from "react-native";
import ColorAuxiliar from "../asset/design/Color";
import { useTheme } from "@react-navigation/native";

export default function(){

    const { dark } = useTheme(); //Variável booleana que pega se é dark ou light de acordo com a paleta de cores falsa
    const Color = dark==true?ColorAuxiliar["dark"]:ColorAuxiliar["light"]; //Define a paleta de cores real a ser usada com base no parâmetro recebido

    return StyleSheet.create({
        activeIndicator: {
            backgroundColor: Color.secondaryContainer,
            width: 64,
            height: 32,
            borderRadius: 32,
        },
        inactiveIndicator: {
            backgroundColor: 'transparent', //Caso o ícone não esteja selecionado define a cor dele como transparente
            width: 64,
            height: 32,
            borderRadius: 32,
        },
        activeLabel: {
            color: Color.onSurface
        },
        inactiveLabel: {
            color: Color.onSurfaceVariant
        }
    })
}