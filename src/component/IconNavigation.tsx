import React from "react";
import { View, Text } from 'react-native';

//theme
import { typography } from "../asset/theme/Typography";

//style
import Material from "../style/Material";
import ComponentIconNavigation from "../style/ComponentIconNavigation";

export default function (props: any) {

    const Typography = typography();

    return (
        <View>
            <View style={[
                Material.centralizedContainer,
                props.focused ? ComponentIconNavigation.activeIndicator : ComponentIconNavigation.inactiveIndicator
            ]}>
                {props.children}
            </View>
            <View style={Material.centralizedContainer}>
                <Text style={[
                    Typography.labelMedium,
                    props.focused ? ComponentIconNavigation.activeLabel : ComponentIconNavigation.inactiveLabel
                ]}>{props.label}</Text>
            </View>
        </View>
    )
}
