import React from "react";
import { View, Text } from 'react-native';
import { useTheme } from "@react-navigation/native";

//style
import Material from "../style/Material";
import StyleAuxiliar from "../style/ComponentIconNavigation";
import Typography from "../asset/theme/Typography";

export default function (props: any) {
    
    const { dark } = useTheme();
    const Style = StyleAuxiliar(dark);

    return (
        <View>
            <View style={[
                Material.centralizedContainer,
                props.focused ? Style.activeIndicator : Style.inactiveIndicator
            ]}>
                {props.children}
            </View>
            <View style={Material.centralizedContainer}>
                <Text style={[
                    Typography.labelMedium,
                    props.focused ? Style.activeLabel : Style.inactiveLabel
                ]}>{props.label}</Text>
            </View>
        </View>
    )
}
