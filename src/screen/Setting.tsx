import React, { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { useTheme } from '@react-navigation/native';

//style
import StyleAuxiliar from '../style/ScreenSetting'
import Typography from '../asset/design/Typography'
import Material from '../asset/design/General'
import ColorAuxiliar from '../asset/design/Color';

//model
import { saveThemeLocaly, getThemeLocaly } from '../model/ThemeController';

//icon
import RadioButtonCheckedIcon from '../asset/icon/radio-button-checked.svg'
import RadioButtonUncheckedIcon from '../asset/icon/radio-button-unchecked.svg'

export default function (props: any) {

    const [checked, setChecked] = useState(false)
    const [userChoice, setUserChoice] = useState(getThemeLocaly)

    const { dark } = useTheme(); //Variável booleana que pega se é dark ou light de acordo com a paleta de cores falsa
    const Color = dark == true ? ColorAuxiliar["dark"] : ColorAuxiliar["light"]; //Define a paleta de cores real a ser usada com base no parâmetro recebido

    const Style = StyleAuxiliar();

    return (
        <View style={Style.container}>
            <Text style={[Typography.bodyMedium, Style.title]}>Aparência</Text>

            <TouchableOpacity
                onPress={() => {
                    saveThemeLocaly("light", props.setTheme)
                    setUserChoice("light")
                }} //Define o tema como claro
            >
                {/* <View style={[Material.centralizedContainer, Style.button]}> */}
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        {userChoice == "light" ?
                            <RadioButtonCheckedIcon width={20} fill={Color.primary} />
                            :
                            <RadioButtonUncheckedIcon width={20} fill={Color.onSurfaceVariant} />
                        }
                    </View>
                    <Text style={[Style.textOnButton, Typography.labelMedium]}>Modo claro</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    saveThemeLocaly("dark", props.setTheme)
                    setUserChoice("dark")
                }} //Define o tema como escuro
            >
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        {userChoice == "dark" ?
                            <RadioButtonCheckedIcon width={20} fill={Color.primary} />
                            :
                            <RadioButtonUncheckedIcon width={20} fill={Color.onSurfaceVariant} />
                        }
                    </View>
                    <Text style={[Style.textOnButton, Typography.labelMedium]}>Modo escuro</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    saveThemeLocaly("default", props.setTheme)
                    setUserChoice("default")
                }} //Define o tema como padrão do sistema
            >
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        {userChoice == "default" ?
                            <RadioButtonCheckedIcon width={20} fill={Color.primary} />
                            :
                            <RadioButtonUncheckedIcon width={20} fill={Color.onSurfaceVariant} />
                        }
                    </View>
                    <Text style={[Style.textOnButton, Typography.labelMedium]}>Padrão do sistema</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
} 