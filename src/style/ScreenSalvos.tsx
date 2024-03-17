import { StyleSheet } from "react-native";
import { useContext } from "react";
import { TabsContext } from "../contexts/tabs";

export default function () {

    const { Color } = useContext<any>(TabsContext)

    return StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: Color.surface,
        },
        containerListHorizontal: {
            paddingHorizontal: 12
        },
        containerListHorizontalIfNull: {
            flex: 1,
            paddingHorizontal: 12
        },
        containerListVertical: {
            paddingBottom: 200,
        },
        colums:{
            paddingHorizontal: 12
        }
    })
}