import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'

//icone
import TrashIcon from '../asset/icon/delete.svg'

//style
import StyleAuxiliar from '../style/ScreenBookmark'
import Typography from '../asset/design/Typography'
import ColorAuxiliar from '../asset/design/Color'

export default function () {

    const Style = StyleAuxiliar()

    const { dark } = useTheme();
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

    return (
        <View style={Style.container}>
            <View style={Style.card}>
                <View style={Style.header}>
                    <View style={Style.title}>
                        <Text numberOfLines={1} style={[Typography.titleMedium, Style.text]}>ENEM</Text>
                    </View>
                    <View style={Style.icon}>
                        <TrashIcon
                            fill={Color.onTertiary}
                            height={24}
                            width={24}
                        />
                    </View>
                </View>
                <View style={Style.description}>
                    <Text style={[Typography.bodyMedium, Style.text]}>Exame Nacional do Ensino Médio</Text>
                </View>
            </View>
            <View style={Style.card}>
                <View style={Style.header}>
                    <View style={Style.title}>
                        <Text numberOfLines={1} style={[Typography.titleMedium, Style.text]}>ENEM</Text>
                    </View>
                    <View style={Style.icon}>
                        <TrashIcon
                            fill={Color.onTertiary}
                            height={24}
                            width={24}
                        />
                    </View>
                </View>
                <View style={Style.description}>
                    <Text style={[Typography.bodyMedium, Style.text]}>Exame Nacional do Ensino Médio</Text>
                </View>
            </View>
            <View style={Style.card}>
                <View style={Style.header}>
                    <View style={Style.title}>
                        <Text
                            numberOfLines={1}
                            style={[Typography.titleMedium, Style.text]}
                        >ENEM</Text>
                    </View>
                    <View style={Style.icon}>
                        <TrashIcon
                            fill={Color.onTertiary}
                            height={24}
                            width={24}
                        />
                    </View>
                </View>
                <View style={Style.description}>
                    <Text style={[Typography.bodyMedium, Style.text]}>Exame Nacional do Ensino Médio</Text>
                </View>
            </View>
            <View style={Style.card}>
                <View style={Style.header}>
                    <View style={Style.title}>
                        <Text numberOfLines={1} style={[Typography.titleMedium, Style.text]}>ENEM</Text>
                    </View>
                    <View style={Style.icon}>
                        <TrashIcon
                            fill={Color.onTertiary}
                            height={24}
                            width={24}
                        />
                    </View>
                </View>
                <View style={Style.description}>
                    <Text style={[Typography.bodyMedium, Style.text]}>Exame Nacional do Ensino Médio</Text>
                </View>
            </View>
        </View>

    )
} 