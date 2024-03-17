import { StyleSheet } from "react-native";
import { TabsContext } from "../contexts/tabs";
import { useContext } from "react";

export default function () {

    const { Color } = useContext<any>(TabsContext)

    return StyleSheet.create({
        container: {
            padding: 16,
        },
        text: {
            color: Color.onSurfaceVariant,
        }
    })
}