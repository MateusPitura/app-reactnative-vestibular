import { useContext } from "react";
import { StyleSheet } from "react-native";
import { TabsContext } from "../contexts/tabs";

export default function(){

    const { Color } = useContext<any>(TabsContext);

    return StyleSheet.create({
        divisor:{
            borderBottomWidth: 1,
            borderColor: Color.outlineVariant,
            marginHorizontal: 16
        }
    })
}