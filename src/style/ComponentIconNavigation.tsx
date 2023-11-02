import { StyleSheet } from "react-native";
import Color from "../asset/theme/Color";

export default function(theme: any){

    const ColorTheme = theme=="dark"?Color["dark"]:Color["light"];

    return StyleSheet.create({
        activeIndicator: {
            backgroundColor: ColorTheme.secondaryContainer,
            width: 64,
            height: 32,
            borderRadius: 32,
        },
        inactiveIndicator: {
            backgroundColor: 'transparent',
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