import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'

//style
import StyleAuxiliar from '../style/ComponentListItemNews'
import Typography from "../asset/design/Typography";

export default function (props: any) {

    const Style = StyleAuxiliar()

    const openURL = async (url: string) => {
        Linking.openURL(url)
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <View style={Style.listContainer}>
            <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row' }}
                onPress={() => openURL(props.url)}
            >
                <View style={Style.imageContainer}>
                    <Image
                        source={props.image}
                        style={Style.image}
                    />
                </View>
                <View style={Style.text}>
                    <Text
                        numberOfLines={1}
                        style={[Typography.titleMedium, Style.headlineText]}
                    >
                        {props.title}
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={[Typography.bodyMedium, Style.supportText]}
                    >
                        {props.body}
                    </Text>
                </View>
                <View style={Style.date}>
                    <Text
                        numberOfLines={2}
                        style={[Typography.labelSmall, Style.trailingText]}
                    >
                        {props.trailing}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}