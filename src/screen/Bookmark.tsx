import React from 'react'
import { View, FlatList } from 'react-native'
import { useTheme } from '@react-navigation/native'

//style
import StyleAuxiliar from '../style/ScreenBookmark'
import ColorAuxiliar from '../asset/design/Color'

//component
import Card from '../component/Card'
import HeaderList from '../component/HeaderList'
import EmptyContent from '../component/EmptyContent'

//icon
import Trash from '../asset/icon/delete.svg'
import Save from '../asset/icon/add-bookmark.svg'

export default function () {

    const Style = StyleAuxiliar()

    const { dark } = useTheme()
    const Color = dark == true ? ColorAuxiliar['dark'] : ColorAuxiliar['light']

    const array = [
        {
            id: '1',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
        },
        {
            id: '2',
            header: 'PSS',
            body: 'Proceso Seletivo Seriado',
        },
        {
            id: '3',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
        },
        {
            id: '4',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
        },
        {
            id: '5',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
        },
        {
            id: '6',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
        },
        {
            id: '7',
            header: 'PSS',
            body: 'Proceso Seletivo Seriado',
        },
        {
            id: '8',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
        },
        {
            id: '9',
            header: 'ENEM',
            body: 'Exame Nacional do Ensino Médio',
        },
    ]

    // const array = null

    return (
        <View style={Style.container}>
            <FlatList
                data={array}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <Card
                        header={item.header}
                        body={item.body}
                    >
                        <Trash
                            height={24}
                            width={24}
                            fill={Color.onTertiary}
                        />
                    </Card>
                }
                contentContainerStyle={Style.containerList}
                numColumns={2}
                ListHeaderComponent={() => (
                    <HeaderList text="Vestibulares salvos" />
                )}
                ListEmptyComponent={
                    <EmptyContent text="Adicione um vestibular ao seus favoritos" />
                }
                columnWrapperStyle={Style.colums}
            />
        </View>
    )
} 