import { StyleSheet } from "react-native";
import { TabsContext } from "../contexts/tabs";
import { useContext } from "react";

export default function () {

    const { Color } = useContext<any>(TabsContext)

    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 16
        },
        text: {
            color: Color.onSurfaceVariant,
        }
    })
}