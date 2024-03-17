import { StyleSheet } from "react-native";
import { useContext } from "react";
import { TabsContext } from "../contexts/tabs";

export default function () {

    const { Color } = useContext<any>(TabsContext)

    return StyleSheet.create({
        listContainer: {
            flexDirection: 'row',
            height: 72,
            paddingVertical: 8,
            paddingHorizontal: 16,
        },
        iconLabel: {
            marginRight: 16,
            alignSelf: 'center',
            backgroundColor: Color.primaryContainer,
            borderRadius: 20,
            height: 40,
            width: 40,
        },
        dayLabel: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        monthLabel: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        dateLabel: {
            color: Color.onPrimaryContainer,
            lineHeight: 12,
        },
        text: {
            justifyContent: 'center',
            flex: 1,
        },
        headlineText: {
            color: Color.onSurface,
        },
        supportText: {
            color: Color.onSurfaceVariant
        }
    })

}