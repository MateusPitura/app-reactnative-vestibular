import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'

//style
import StyleAuxiliar from '../style/ScreenAjustes'
import Typography from '../asset/design/Typography'

//model
import { saveThemeLocaly, restoreThemeLocaly } from '../model/ThemeController';

//component
import RadioButton from '../component/RadioButton';

export default function (props: any) {

    const Style = StyleAuxiliar();

    const [userChoice, setUserChoice] = useState("")

    useEffect(() => {
        restoreThemeLocaly(setUserChoice)
    }, [])

    return (
        <SafeAreaView style={Style.container}>
            <Text style={[Typography.bodyMedium, Style.title]}>Aparência</Text>

            <RadioButton text="Modo claro" choice={userChoice} theme={"light"} onPress={() => {
                saveThemeLocaly("light", props.setTheme)
            }} />

            <RadioButton text="Modo escuro" choice={userChoice} theme={"dark"} onPress={() => {
                saveThemeLocaly("dark", props.setTheme)
            }} />

            <RadioButton text="Padrão do sistema" choice={userChoice} theme={"default"} onPress={() => {
                saveThemeLocaly("default", props.setTheme)
            }} />
        </SafeAreaView>
    )
} 