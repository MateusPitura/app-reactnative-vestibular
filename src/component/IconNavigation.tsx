import React from "react";
import { View, Text } from 'react-native';

//style
import Material from "../asset/design/General";
import StyleAuxiliar from "../style/ComponentIconNavigation";
import Typography from "../asset/design/Typography";

export default function (props: any) {
    
    const Style = StyleAuxiliar(); 

    return (
        <View>
            <View style={[
                Material.centralizedContainer,
                props.focused ? Style.activeIndicator : Style.inactiveIndicator //Caso o ícone esteja selecionado exibe ou não o indicador de qual tela foi escolhida
            ]}>
                {props.children} 
            </View>
            <View style={Material.centralizedContainer}>
                <Text style={[
                    Typography.labelMedium,
                    props.focused ? Style.activeLabel : Style.inactiveLabel //Caso o ícone esteja selecionado muda a aparência da label
                ]}>{props.label}</Text>
            </View>
        </View>
    )
}
