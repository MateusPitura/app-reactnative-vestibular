import { StyleSheet } from "react-native";
import { useContext } from "react";
import { TabsContext } from "../contexts/tabs";

export default function(){

    const { Color } = useContext<any>(TabsContext);
    
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