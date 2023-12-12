import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

//style
import StyleAuxiliar from '../style/ScreenSetting'
import Typography from '../asset/design/Typography'

//model
import { saveThemeLocaly, getThemeLocaly } from '../model/ThemeController';

//component
import RadioButton from '../component/RadioButton';

export default function (props: any) {

    const Style = StyleAuxiliar();

    const [userChoice, setUserChoice] = useState("")
    const options = ["light", "dark", "default"]

    const getThemeLocalyAuxiliar = async () => {
        const theme = await getThemeLocaly()
        setUserChoice(theme ?? "light")
    }

    useEffect(() => {
        getThemeLocalyAuxiliar()
    }, [])

    return (
        <View style={Style.container}>
            <Text style={[Typography.bodyMedium, Style.title]}>Aparência</Text>

            <RadioButton text="Modo claro" choice={userChoice} theme={options[0]} onPress={() => {
                saveThemeLocaly(options[0], props.setTheme)
            }} />

            <RadioButton text="Modo escuro" choice={userChoice} theme={options[1]} onPress={() => {
                saveThemeLocaly(options[1], props.setTheme)
            }} />

            <RadioButton text="Padrão do sistema" choice={userChoice} theme={options[2]} onPress={() => {
                saveThemeLocaly(options[2], props.setTheme)
            }} />
        </View>
    )
} 