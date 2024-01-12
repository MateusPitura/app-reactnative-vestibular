import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StatusBar } from 'react-native'
import { useTheme } from "@react-navigation/native";

//component
import StatusBarDefault from "./StatusBar";

//style
import Typography from "../asset/design/Typography";
import StyleAuxiliar from '../style/ComponentSearchBar'
import ColorAuxiliar from "../asset/design/Color";

//icones
import SearchIcon from '../asset/icon/search.svg'
import ArrowBackIcon from '../asset/icon/arrow-back.svg'
import DeleteIcon from '../asset/icon/delete.svg'
import CloseIcon from '../asset/icon/close.svg'

export default function (props: any) {

    const Style = StyleAuxiliar()

    const { dark } = useTheme();
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

    const [isVisible, setIsVisible] = useState(false)

    return (
        <View style={Style.box}>
            <StatusBarDefault />
            <TouchableOpacity
                style={Style.container}
                onPress={() => {
                    setIsVisible(true)
                }}
            >
                <View style={Style.iconContainer}>
                    <SearchIcon
                        width={24}
                        height={24}
                        fill={Color.onSurfaceVariant}
                    />
                </View>
                <View style={Style.textContainer}>
                    <Text style={[Typography.bodyLarge, Style.text]}>{props.text}</Text>
                </View>
            </TouchableOpacity>
            <Modal
                visible={isVisible}
                animationType="none"
            >
                <View style={Style.modal}>
                    <StatusBar
                        backgroundColor={Color.surfaceContainerHigh}
                        barStyle={dark == true ? 'light-content' : 'dark-content'}
                    />
                    <View style={Style.searchArea}>
                        <TouchableOpacity
                            style={[Style.iconContainer]}
                            onPress={() => setIsVisible(false)}
                        >
                            <ArrowBackIcon
                                fill={Color.onSurface}
                                width={24}
                                height={24}
                            />
                        </TouchableOpacity>
                        <View style={Style.textSearchContainer}>
                            <Text 
                                style={[Typography.bodyLarge, Style.text]}
                                numberOfLines={1}
                            >
                                {props.text}
                            </Text>
                        </View>
                        <View style={[Style.iconContainer]}>
                            <CloseIcon
                                fill={Color.onSurfaceVariant}
                                width={24}
                                height={24}
                            />
                        </View>
                    </View>
                    <View style={Style.divisor}></View>
                    <View style={Style.content}>

                    </View>
                </View>
            </Modal>
        </View>
    )
}