import React from "react";
import { View, Text } from 'react-native';

//theme
import { typography } from "../asset/theme/Typography";

//style
import Material from "../style/Material";
import { style } from "../style/ComponentIconNavigation";

export default function (props: any) {

    const Typography = typography();
    const Style = style();

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
