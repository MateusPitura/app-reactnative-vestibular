import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'

//style
import StyleAuxiliar from '../style/ScreenSetting'
import Typography from '../asset/theme/Typography'
import Material from '../style/Material'

export default function (props: any) {

    const { dark } = useTheme(); //Variável booleano que pega se é dark ou light de acordo com a paleta de cores falsa
    const Style = StyleAuxiliar(dark); //Usa a variável booleana para definir a paleta de cores real

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