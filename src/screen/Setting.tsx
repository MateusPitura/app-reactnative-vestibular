import React, { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

//style
import Estilo from '../style/ScreenSetting'
import Typography from '../asset/theme/Typography'
import Material from '../style/Material'

export default function() {

    const [theme, setTheme] = useState("light")

    const Style = Estilo(theme);

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