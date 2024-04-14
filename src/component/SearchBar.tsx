import React, { useState, useEffect, useContext } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    StatusBar,
    TextInput,
    FlatList,
    Keyboard,
} from 'react-native'
import { TabsContext } from "../contexts/tabs";

//component
import StatusBarDefault from "./StatusBar";
import CardVertical from "./CardVertical";

//style
import Typography from "../asset/design/Typography";
import StyleAuxiliar from '../style/ComponentSearchBar'

//icones
import SearchIcon from '../asset/icon/search.svg'
import ArrowBackIcon from '../asset/icon/arrow-back.svg'
import CloseIcon from '../asset/icon/close.svg'
import Save from '../asset/icon/add-bookmark.svg'

export default function (props: any) {

    const Style = StyleAuxiliar()

    const { Color, dark } = useContext<any>(TabsContext)

    const [isVisible, setIsVisible] = useState(false)
    const [textInput, setTextInput] = useState("")

    const inputRef = React.useRef(null)

    const [data, setData] = useState<any>()

    useEffect(() => {
        if (textInput != "") {
            const newData = props.data.filter((item: any) =>
                item.sigla.toLowerCase().indexOf(textInput.toLowerCase()) > -1
            )
            setData(newData)
        } else {
            setData([])
        }
    }, [textInput])

    const openKeyboard = () => {
        if (inputRef.current) {
            setTimeout(() => {
                (inputRef.current as any).focus()
            }, 100)
        }
    }

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
                    <Text style={[Typography.bodyLarge, Style.text]} numberOfLines={1}>{props.text}</Text>
                </View>
            </TouchableOpacity>
            <Modal
                visible={isVisible}
                animationType="none"
                statusBarTranslucent={true}
                onRequestClose={() => setIsVisible(false)}
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
                            <TextInput
                                value={textInput}
                                onChangeText={a => setTextInput(a)}
                                style={[Typography.bodyLarge, Style.textSelected]}
                                placeholder={props.text}
                                placeholderTextColor={Color.onSurfaceVariant}
                                cursorColor={Color.primary}
                                inputMode={'search'}
                                returnKeyType="search"
                                onLayout={() => openKeyboard()}
                                ref={inputRef}
                                blurOnSubmit={false}
                                onSubmitEditing={()=> Keyboard.dismiss() }
                            />
                        </View>
                        <TouchableOpacity
                            style={[Style.iconContainer]}
                            onPress={() => setTextInput("")}
                        >
                            <CloseIcon
                                fill={Color.onSurfaceVariant}
                                width={24}
                                height={24}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={Style.divisor}></View>
                    <View style={Style.content}>
                        <FlatList
                            data={data}
                            keyExtractor={item => item.id}
                            keyboardShouldPersistTaps='handled'
                            renderItem={({ item }: any) =>
                                <CardVertical
                                    title={item.sigla}
                                    body={item.nome}
                                    onPress={async () => {
                                        if(await props.add(item) != -1){
                                            Keyboard.dismiss()
                                            setTimeout(()=>{
                                                setIsVisible(false)
                                            }, 50)
                                        }
                                    }}
                                >
                                    <Save
                                        height={24}
                                        width={24}
                                        fill={Color.onTertiary}
                                    />
                                </CardVertical>
                            }
                            numColumns={2}
                            contentContainerStyle={Style.containerListVertical}
                            columnWrapperStyle={Style.colums}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}