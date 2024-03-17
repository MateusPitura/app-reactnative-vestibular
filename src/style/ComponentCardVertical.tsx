import { StyleSheet } from "react-native";
import { useWindowDimensions } from "react-native";
import { TabsContext } from "../contexts/tabs";
import { useContext } from "react";

export default function () {

    const { Color } = useContext<any>(TabsContext)

    const { width } = useWindowDimensions()

    return StyleSheet.create({
        card: {
            backgroundColor: Color.tertiary,
            borderRadius: 12,
            padding: 6,
            // flex: 1,
            width: width/2-20,
            height: 150,
            margin: 4,
            
        },
        header: {
            flexDirection: 'row'
        },
        title: {
            padding: 6,
            flex: 3,
            // backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'flex-start'
        },
        icon: {
            padding: 6,
            flex: 1,
            // backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        description:{
            flex: 1,
            padding: 6,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            //backgroundColor: 'green'
        },
        text: {
            color: Color.onTertiary,
        }
    })
}