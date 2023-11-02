import React from "react";
import { View, Text } from 'react-native';
import { useTheme } from "@react-navigation/native";

//style
import Material from "../style/Material";
import StyleAuxiliar from "../style/ComponentIconNavigation";
import Typography from "../asset/theme/Typography";

export default function (props: any) {
    
    const { dark } = useTheme(); //Variável booleano que pega se é dark ou light de acordo com a paleta de cores falsa
    const Style = StyleAuxiliar(dark);  //Usa a variável booleana para definir a paleta de cores real

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
