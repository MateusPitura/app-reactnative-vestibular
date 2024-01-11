import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import { useTheme } from "@react-navigation/native";

//style
import Typography from "../asset/design/Typography";
import StyleAuxiliar from '../style/ComponentSearchBar'
import ColorAuxiliar from "../asset/design/Color";

//icones
import SearchIcon from '../asset/icon/search.svg'
import ArrowBackIcon from '../asset/icon/arrow-back.svg'
import DeleteIcon from '../asset/icon/delete.svg'

export default function (props: any) {

    const Style = StyleAuxiliar()

    const { dark } = useTheme();
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

    const [isVisible, setIsVisible] = useState(false)

    return (
        <View style={Style.box}>
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
                animationType="slide"
            >
                <View style={Style.modal}>
                    <View style={Style.searchArea}>
                        <TouchableOpacity 
                            style={[Style.iconContainer]}
                            onPress={()=>setIsVisible(false)}
                        >
                            <ArrowBackIcon
                                fill={Color.onSurface}
                                width={24}
                                height={24}
                            />
                        </TouchableOpacity>
                        <View style={Style.textSearchContainer}>
                            <Text style={[Typography.bodyLarge, Style.textSearch]}>
                                Digite para pesquisar
                            </Text>
                        </View>
                        <View style={[Style.iconContainer]}>
                            <DeleteIcon
                                fill={Color.onSurface}
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