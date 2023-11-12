import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

//style
import StyleAuxiliar from '../style/ScreenSetting'
import Typography from '../asset/design/Typography'
import Material from '../asset/design/General'

//model
import { saveThemeLocaly } from '../model/ThemeController';

export default function (props: any) {

    const Style = StyleAuxiliar();

    return (
        <View style={Style.container}>
            <Text style={[Typography.titleLarge, Style.title]}>Aparência</Text>
            <TouchableOpacity
                onPress={() => { 
                    saveThemeLocaly("light", props.setTheme)
                }} //Define o tema como claro
            >
                <View style={[Material.centralizedContainer, Style.button]}>
                    <Text style={[Style.textOnButton, Typography.labelMedium]}>Modo claro</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { 
                    saveThemeLocaly("dark", props.setTheme)
                }} //Define o tema como escuro
            >
                <View style={[Material.centralizedContainer, Style.button]}>
                    <Text style={[Style.textOnButton, Typography.labelMedium]}>Modo escuro</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { 
                    saveThemeLocaly("default", props.setTheme)
                }} //Define o tema como padrão do sistema
            >
                <View style={[Material.centralizedContainer, Style.button]}>
                    <Text style={[Style.textOnButton, Typography.labelMedium]}>Padrão do sistema</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
} 