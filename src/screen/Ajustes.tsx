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

            <RadioButton text="Modo claro" choice={userChoice} theme={"light"} onPress={(value: any) => {
                saveThemeLocaly(value, props.setTheme)
            }} />

            <RadioButton text="Modo escuro" choice={userChoice} theme={"dark"} onPress={(value: any) => {
                saveThemeLocaly(value, props.setTheme)
            }} />

            <RadioButton text="Padrão do sistema" choice={userChoice} theme={"default"} onPress={(value: any) => {
                saveThemeLocaly(value, props.setTheme)
            }} />
        </View>
    )
} 