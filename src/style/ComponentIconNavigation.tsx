import { StyleSheet } from "react-native";
import Color from "../asset/theme/Color";

export default function(theme: any){

    const ColorTheme = theme==true?Color["dark"]:Color["light"]; //Define a paleta de cores real a ser usada com base no parâmetro recebido

    return StyleSheet.create({
        activeIndicator: {
            backgroundColor: ColorTheme.secondaryContainer,
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
            color: ColorTheme.onSurface
        },
        inactiveLabel: {
            color: ColorTheme.onSurfaceVariant
        }
    })
}