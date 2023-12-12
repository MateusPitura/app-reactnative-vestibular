import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

//style
import StyleAuxiliar from '../style/ComponentsRadioButton'
import Typography from '../asset/design/Typography'
import ColorAuxiliar from '../asset/design/Color';

//icon
import RadioButtonCheckedIcon from '../asset/icon/radio-button-checked.svg'
import RadioButtonUncheckedIcon from '../asset/icon/radio-button-unchecked.svg'

export default function (props: any) {

    const { dark } = useTheme(); //Variável booleana que pega se é dark ou light de acordo com a paleta de cores falsa
    const Color = dark == true ? ColorAuxiliar["dark"] : ColorAuxiliar["light"]; //Define a paleta de cores real a ser usada com base no parâmetro recebido
    const Style = StyleAuxiliar();

    return (
        <TouchableOpacity
            onPress={() => {
                props.onPress()
            }}
        >
            <View style={Style.container}>
                <View style={Style.radioButton}>
                    {props.choice == props.theme ?
                        <RadioButtonCheckedIcon width={20} fill={Color.primary} />
                        :
                        <RadioButtonUncheckedIcon width={20} fill={Color.onSurfaceVariant} />
                    }
                </View>
                <View style={Style.text}>
                    <Text style={[Style.label, Typography.labelMedium]}>{props.text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}