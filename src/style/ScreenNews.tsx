import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import ColorAuxiliar from "../asset/design/Color";

export default function(){

    const { dark } = useTheme();
    const Color = dark==true?ColorAuxiliar['dark']:ColorAuxiliar['light']

    return StyleSheet.create({
        container:{
            backgroundColor: Color.surface,
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 8,
        },
        listContainer:{
            flexDirection: 'row',
            height: 88,
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderRadius: 5,
        },
        imageContainer:{
            paddingRight: 16,
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        image:{
            width: 56,
            height: 56,
            borderRadius: 5,
        },
        text:{
            flex: 5,
            justifyContent: 'flex-start',
            paddingRight: 16,
        },
        headlineText:{
            color: Color.onSurface,
        },
        supportText:{
            color: Color.onSurfaceVariant,
        },
        date:{
            alignItems: 'flex-end',
            flex: 1,
            
        },
        trailingText:{
            color: Color.onSurfaceVariant,
        }
    })
}