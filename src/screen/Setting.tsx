import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'

//style
import StyleAuxiliar from '../style/ScreenSetting'
import Typography from '../asset/theme/Typography'
import Material from '../style/Material'

export default function (props: any) {

    const { dark } = useTheme();
    const Style = StyleAuxiliar(dark);

    return (
        <View style={Style.container}>
            <Text style={[Typography.titleLarge, Style.title]}>Aparência</Text>
            <TouchableOpacity
                onPress={() => { props.setTheme("light")}}
            >
                <View style={[Material.centralizedContainer, Style.button]}>
                    <Text style={[Style.textOnButton, Typography.labelMedium]}>Modo claro</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { props.setTheme("dark") }}
            >
                <View style={[Material.centralizedContainer, Style.button]}>
                    <Text style={[Style.textOnButton, Typography.labelMedium]}>Modo escuro</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { props.setTheme("default") }}
            >
                <View style={[Material.centralizedContainer, Style.button]}>
                    <Text style={[Style.textOnButton, Typography.labelMedium]}>Padrão do sistema</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
} 