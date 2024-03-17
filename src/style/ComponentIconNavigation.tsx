import { StyleSheet } from "react-native";
import { useContext } from "react";
import { TabsContext } from "../contexts/tabs";

export default function(){

    const { Color } = useContext<any>(TabsContext);

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