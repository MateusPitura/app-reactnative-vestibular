import AsyncStorage from '@react-native-async-storage/async-storage';

const chave = "@vestibular:theme" //Chave para identificar o tema

export const restoreThemeLocaly = async (setTheme: any) => {
    let themeSaved = await AsyncStorage.getItem(chave) //Recupera o tema salvo
    if (themeSaved == null) { //Se for nulo, o que vai ocorrer após instalar o app...
        themeSaved = "default"
        await AsyncStorage.setItem(chave, "default") //...salva o tema "default" por padrão localmente
    }
    setTheme(themeSaved) //Define o tema em um state para mudar rapidamente
    return themeSaved
}

export const saveThemeLocaly = async (theme: string, setTheme: any) => {
    setTheme(theme) //Define o tema em um state para mudar rapidamente
    await AsyncStorage.setItem(chave, theme) //Salva o tema localmente
}

export default { restoreThemeLocaly, saveThemeLocaly }
