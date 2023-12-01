import React, { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import CheckBox from "react-native-bouncy-checkbox";
import { useTheme } from '@react-navigation/native';

//style
import StyleAuxiliar from '../style/ScreenSetting'
import Typography from '../asset/design/Typography'
import Material from '../asset/design/General'
import ColorAuxiliar from '../asset/design/Color';

//model
import { saveThemeLocaly } from '../model/ThemeController';

export default function (props: any) {

    const [checked, setChecked ] = useState(false)

    const { dark } = useTheme(); //Variável booleana que pega se é dark ou light de acordo com a paleta de cores falsa
    const Color = dark == true ? ColorAuxiliar["dark"] : ColorAuxiliar["light"]; //Define a paleta de cores real a ser usada com base no parâmetro recebido

    const Style = StyleAuxiliar();

    return (
        <View style={Style.container}>
            <Text style={[Typography.bodyMedium, Style.title]}>Aparência</Text>
            <CheckBox
                //Tamanho 
                size={20}

                //Cor após marcar 
                fillColor={Color.primary}

                //Cor antes de marcar 
                unfillColor={Color.surface}

                //Texto ao lado 
                text="Modo claro"

                textStyle={[
                    Typography.bodyLarge,
                    {
                        color: Color.onSurface,
                        textDecorationLine: 'none', //Remove o strikethrough após marcar
                    }
                ]}

                innerIconStyle={{
                    borderWidth: 2,
                    borderColor: checked==true?Color.primary:Color.onSurfaceVariant,
                    padding: 2,
                }}
                style={{
                    borderRadius: 10,
                }}

                //Passa para um state true (marcado) ou false (desmarcado) 
                onPress={(isChecked: boolean) => {
                    saveThemeLocaly("light", props.setTheme)
                    setChecked(isChecked)
                }}
            />

            <CheckBox
                //Tamanho 
                size={20}
                //Cor após marcar 
                fillColor={Color.primary}

                //Cor antes de marcar 
                unfillColor={Color.surface}
                //Texto ao lado 
                text="Modo escuro"
                textStyle={[
                    //Remove o strikethrough após marcar
                    Typography.bodyLarge,
                    {
                        color: Color.onSurface,
                        textDecorationLine: 'none',
                    }
                ]}
                innerIconStyle={{
                    //Borda arredondada antes de clicar 
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: Color.onSurfaceVariant
                }}
                style={{
                    //Borda arredondada após de clicar 
                    borderRadius: 10,
                    borderColor: "red"
                }}
                iconComponent={null}
                //Passa para um state true (marcado) ou false (desmarcado) 
                onPress={() => {
                    saveThemeLocaly("dark", props.setTheme)
                }} //Define o tema como claro
            />

            <CheckBox
                //Tamanho 
                size={20}
                //Cor após marcar 
                fillColor={Color.primary}

                //Cor antes de marcar 
                unfillColor={Color.surface}
                //Texto ao lado 
                text="Padrão do sistema"
                textStyle={[
                    //Remove o strikethrough após marcar
                    Typography.bodyLarge,
                    {
                        color: Color.onSurface,
                        textDecorationLine: 'none',
                    }
                ]}
                innerIconStyle={{
                    //Borda arredondada antes de clicar 
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: Color.onSurfaceVariant
                }}
                style={{
                    //Borda arredondada após de clicar 
                    borderRadius: 10,
                    borderColor: "red"
                }}
                iconComponent={null}
                //Passa para um state true (marcado) ou false (desmarcado) 
                onPress={() => {
                    saveThemeLocaly("default", props.setTheme)
                }} //Define o tema como claro
            />

            {/* <TouchableOpacity
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
            </TouchableOpacity> */}
        </View>
    )
} 