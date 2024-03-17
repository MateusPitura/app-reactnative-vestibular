import { useContext } from "react";
import { StyleSheet } from "react-native";
import { TabsContext } from "../contexts/tabs";

export default function () {

    const { Color } = useContext<any>(TabsContext)

    return StyleSheet.create({
        container: {
            flexDirection: 'row'
        },
        label: {
            color: Color.onSurface,
        },
        radioButton: {
            height: 48,
            paddingRight: 12,
            alignItems: 'center',
            justifyContent: 'center'
        },
        text: {
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
}