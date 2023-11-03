import React from 'react'
import { View, Text, Image } from 'react-native'

//style
import StyleAuxiliar from '../style/ScreenNews'
import Typography from '../asset/design/Typography';

export default function () {

    const Style = StyleAuxiliar();

    return (
        <View style={[Style.container]}>
            <View style={Style.listContainer}>
                <View style={Style.imageContainer}>
                    <Image
                        source={require("../asset/image/image.webp")}
                        style={Style.image}
                    />
                </View>
                <View style={Style.text}>
                    <Text
                        numberOfLines={1}
                        style={[Typography.titleMedium, Style.headlineText]}
                    >
                        Lorem ipsum dolor sit amet.
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={[Typography.bodyMedium, Style.supportText]}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia ratione quibusdam dolores sint quasi ab, pariatur veritatis eum cumque.
                    </Text>
                </View>
                <View style={Style.date}>
                    <Text
                        numberOfLines={2}
                        style={[Typography.labelSmall, Style.trailingText]}
                    >
                        10+
                    </Text>
                </View>
            </View>
            <View style={Style.listContainer}>
                <View style={Style.imageContainer}>
                    <Image
                        source={require("../asset/image/image.webp")}
                        style={Style.image}
                    />
                </View>
                <View style={Style.text}>
                    <Text
                        numberOfLines={1}
                        style={[Typography.titleMedium, Style.headlineText]}
                    >
                        Lorem ipsum dolor sit amet.
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={[Typography.bodyMedium, Style.supportText]}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia ratione quibusdam dolores sint quasi ab, pariatur veritatis eum cumque.
                    </Text>
                </View>
                <View style={Style.date}>
                    <Text
                        numberOfLines={2}
                        style={[Typography.labelSmall, Style.trailingText]}
                    >
                        10+
                    </Text>
                </View>
            </View>
            <View style={Style.listContainer}>
                <View style={Style.imageContainer}>
                    <Image
                        source={require("../asset/image/image.webp")}
                        style={Style.image}
                    />
                </View>
                <View style={Style.text}>
                    <Text
                        numberOfLines={1}
                        style={[Typography.titleMedium, Style.headlineText]}
                    >
                        Lorem ipsum dolor sit amet.
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={[Typography.bodyMedium, Style.supportText]}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia ratione quibusdam dolores sint quasi ab, pariatur veritatis eum cumque.
                    </Text>
                </View>
                <View style={Style.date}>
                    <Text
                        numberOfLines={2}
                        style={[Typography.labelSmall, Style.trailingText]}
                    >
                        8 May
                    </Text>
                </View>
            </View>
        </View>

    )
} 