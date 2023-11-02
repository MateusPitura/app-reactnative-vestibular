import { StyleSheet } from "react-native";
import Color from "../asset/theme/Color";

export default function(theme: any){

    const ColorTheme = theme==true?Color["dark"]:Color["light"]; //Define a paleta de cores real a ser usada com base no parâmetro recebido
    
    return StyleSheet.create({
        container: {
            backgroundColor: ColorTheme.surface,
            flex: 1,
            padding: 10,
        },
        title: {
            color: ColorTheme.onSurface,
        },
        button: {
            backgroundColor: ColorTheme.primary,
            margin: 10,
            padding: 10,
            borderRadius: 10,
        },
        textOnButton: {
            color: ColorTheme.onPrimary,
        }
    })
}