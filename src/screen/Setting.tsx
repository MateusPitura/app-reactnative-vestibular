import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { style } from '../style/ScreenSetting'
import { TouchableOpacity } from 'react-native'
import { typography } from '../asset/theme/Typography'
import Material from '../style/Material'

export default function() {

    const [theme, setTheme] = useState("light")

    const Typography = typography();
    const Style = style(theme);

    return (
        <View style={Style.container}>
            <Text style={[Typography.titleLarge, Style.title]}>Aparência</Text>
            <TouchableOpacity
                onPress={()=>{setTheme("light")}}
            >
                <View style={[Material.centralizedContainer, Style.button]}>
                    <Text style={[Style.textOnButton, Typography.labelMedium]}>Modo claro</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{setTheme("dark")}}
            >
                <View style={[Material.centralizedContainer, Style.button]}>
                    <Text style={[Style.textOnButton, Typography.labelMedium]}>Modo escuro</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{}}
            >
                <View style={[Material.centralizedContainer, Style.button]}>
                    <Text style={[Style.textOnButton, Typography.labelMedium]}>Padrão do sistema</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
} 