import AsyncStorage from '@react-native-async-storage/async-storage';

export const retriveTheme = async () => {
    const chave = "@vestibular:theme";
    const themeSaved = await AsyncStorage.getItem(chave)
    if (themeSaved == null) {
        const standardTheme = "light"
        await AsyncStorage.setItem(chave, standardTheme)
        return standardTheme
    }
    return themeSaved;
}

export const saveThemeOffline = async (theme: string) => {
    const chave = "@vestibular:theme";
    await AsyncStorage.setItem(chave, theme)
}

export default { retriveTheme, saveThemeOffline }
