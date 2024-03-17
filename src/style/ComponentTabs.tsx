import { StyleSheet } from "react-native";
import { useContext } from "react";
import { TabsContext } from "../contexts/tabs";

export default function () {

    const { Color } = useContext<any>(TabsContext)

    return StyleSheet.create({
        container: {
            height: 47,
            alignItems: 'flex-start',
        },
        touchable:{
            flex: 1,
        },
        box:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 4,
            marginRight: 16,
        },
        textSelected: {
            color: Color.primary
        },
        textUnselected: {
            color: Color.onSurfaceVariant
        },
        indicatorContainer: {
            height: 5,
            marginRight: 16,
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        indicator: {
            borderBottomWidth: 3,
            borderColor: Color.primary,
            width: '80%',
            borderTopEndRadius: 3,
            borderTopStartRadius: 3,
        },
        listContainer: {
            paddingLeft: 52,
        },
        divisor: {
            borderBottomWidth: 1,
            borderColor: Color.outlineVariant,
        }
    })
}