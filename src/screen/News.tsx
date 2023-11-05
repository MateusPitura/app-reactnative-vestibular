import React from 'react'
import { View, FlatList, Text } from 'react-native'

//style
import StyleAuxiliar from '../style/ScreenNews'

//component
import ListItem from '../component/ListItem';
import Divisor from '../component/Divisor';

export default function () {

    const Style = StyleAuxiliar();

    const array = [
        {
            id: "1",
            imageSource: require('../asset/image/photo1.webp'),
            headline: "Lorem",
            support: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "04 nov"
        },
        {
            id: "2",
            imageSource: require('../asset/image/photo2.webp'),
            headline: "Ipsum",
            support: "Ipsum dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "05 nov"
        },
        {
            id: "3",
            imageSource: require('../asset/image/photo3.webp'),
            headline: "Dolor",
            support: "Dolor sit amet consectetur adipisicing elit. Adipisci, maxime",
            trailing: "06 nov"
        },
    ]

    return (
        <View style={[Style.container]}>
            <FlatList
                data={array}
                keyExtractor={item=>item.id}
                renderItem={({item})=>
                    <ListItem
                        image={item.imageSource}
                        headline={item.headline}
                        support={item.support}
                        trailing={item.trailing}
                    />
                }
                ItemSeparatorComponent={()=>
                    <Divisor/>
                }
            />
        </View>
    )
} 