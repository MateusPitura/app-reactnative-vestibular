import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

//style
import StyleAuxiliar from '../style/ScreenSetting'
import Typography from '../asset/design/Typography'
import Material from '../asset/design/General'

export default function (props: any) {

    const Style = StyleAuxiliar();

    return (
        <View style={Style.container}>
            <Text style={[Typography.titleLarge, Style.title]}>Aparência</Text>
            <TouchableOpacity
                onPress={() => { props.setTheme("light")}} //Define o tema como claro
            >
                <View style={[Material.centralizedContainer, Style.button]}>
                    <Text style={[Style.textOnButton, Typography.labelMedium]}>Modo claro</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { props.setTheme("dark") }} //Define o tema como escuro
            >
                <View style={[Material.centralizedContainer, Style.button]}>
                    <Text style={[Style.textOnButton, Typography.labelMedium]}>Modo escuro</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { props.setTheme("default") }} //Define o tema como padrão do sistema
            >
                <View style={[Material.centralizedContainer, Style.button]}>
                    <Text style={[Style.textOnButton, Typography.labelMedium]}>Padrão do sistema</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
} 