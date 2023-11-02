import React from "react";
import { View, Text } from 'react-native';

//style
import Material from "../style/Material";
import Estilo from "../style/ComponentIconNavigation";
import Typography from "../asset/theme/Typography";

export default function (props: any) {
    
    const Style = Estilo("dark");

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
