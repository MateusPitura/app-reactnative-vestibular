import React from "react";
import { View, Text, FlatList, TouchableWithoutFeedback } from "react-native";

//style
import StyleAuxiliar from '../style/ComponentTabs'
import Typography from "../asset/design/Typography";

export default function (props: any) {

    const Style = StyleAuxiliar();

    return (
        <View>
            <View style={Style.container}>
                <FlatList
                    data={props.data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableWithoutFeedback
                            style={Style.touchable}
                            onPress={() => {
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
                                        {item.header}
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