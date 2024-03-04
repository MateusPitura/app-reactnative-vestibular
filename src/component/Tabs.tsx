import React, { useContext, useRef,  } from "react";
import { View, Text, FlatList, TouchableWithoutFeedback } from "react-native";

//style
import StyleAuxiliar from '../style/ComponentTabs'
import Typography from "../asset/design/Typography";
import { TabsContext } from "../contexts/tabs";


export default function (props: any) {

    const Style = StyleAuxiliar();

    const ref = useRef<FlatList>(null)

    const { tabs, setTabs } = useContext<any>(TabsContext)

    const newData = [
        {
            id: '0',
            title: 'All',
            body: '',
        },
        ...tabs
    ]

    return (
        <View>
            <View style={Style.container}>
                <FlatList
                    ref={ref}
                    data={newData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableWithoutFeedback
                            style={Style.touchable}
                            onPress={() => {
                                ref.current?.scrollToIndex({
                                    index: tabs.indexOf(item) + 1
                                })
                                props.setSelected(item.id)
                            }}>
                            <View>
                                <View style={Style.box}>
                                    <Text style={
                                        props.selected == item.id ?
                                            [Typography.titleSmall, Style.textSelected]
                                            :
                                            [Typography.titleSmall, Style.textUnselected]
                                    }>
                                        {item.title}
                                    </Text>
                                </View>
                                <View style={Style.indicatorContainer}>
                                    {props.selected == item.id ?
                                        <View style={Style.indicator}></View>
                                        :
                                        <View></View>
                                    }
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    }
                    contentContainerStyle={Style.listContainer}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={Style.divisor}></View>
        </View >
    )
}