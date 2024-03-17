import React, { useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { TabsContext } from "../contexts/tabs";

//style
import StyleAuxiliar from '../style/ComponentsRadioButton'
import Typography from '../asset/design/Typography'

//icon
import RadioButtonCheckedIcon from '../asset/icon/radio-button-checked.svg'
import RadioButtonUncheckedIcon from '../asset/icon/radio-button-unchecked.svg'

export default function (props: any) {

    const { Color } = useContext<any>(TabsContext)
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
                        <RadioButtonCheckedIcon width={20} height={20} fill={Color.primary} />
                        :
                        <RadioButtonUncheckedIcon width={20} height={20} fill={Color.onSurfaceVariant} />
                    }
                </View>
                <View style={Style.text}>
                    <Text style={[Style.label, Typography.labelMedium]}>{props.text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}