import AsyncStorage from "@react-native-async-storage/async-storage";

const chave = "@vestibular:salvos"

export const add = async (newData: any) => {
    const response = await AsyncStorage.getItem(chave)
    const parsed = response ? JSON.parse(response) : []
    if (parsed.find((item: any) => item.id == newData[0].id) != undefined) {
        return -1
    }
    const data = [...parsed, ...newData]
    await AsyncStorage.setItem(chave, JSON.stringify(data))
}

export const read = async (setter: any) => {
    const response = await AsyncStorage.getItem(chave)
    const parsed = response ? JSON.parse(response) : []
    setter(parsed)
}

export const remove = async (id: string) => {
    const response = await AsyncStorage.getItem(chave)
    const parsed = response ? JSON.parse(response) : []
    const data = parsed.filter((item: any) => item.id != id)
    await AsyncStorage.setItem(chave, JSON.stringify(data))
}

export const removeAll = async () => {
    await AsyncStorage.removeItem(chave)
}