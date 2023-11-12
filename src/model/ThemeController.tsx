import AsyncStorage from '@react-native-async-storage/async-storage';

export const restoreThemeLocaly = async (setLoading: any, setTheme: any) => {
    const chave = "@vestibular:theme"; //Chave para identificar o tema
    var themeSaved = await AsyncStorage.getItem(chave) //Recupera o tema salvo
    if (themeSaved == null) { //Se for nulo, o que vai ocorrer após instalar o app
        themeSaved = "light" //Por padrão é light
        await AsyncStorage.setItem(chave, themeSaved) //Salva o tema localmente
    }
    setTheme(themeSaved) //Define o tema em um state para mudar rapidamente
    setLoading(false) //Desativa a tela de loading
}

export const saveThemeLocaly = async (theme: string, setTheme: any) => {
    const chave = "@vestibular:theme"; //Chave para identificar o tema
    setTheme(theme) //Define o tema em um state para mudar rapidamente
    await AsyncStorage.setItem(chave, theme) //Salva o tema localmente
}

export default { restoreThemeLocaly, saveThemeLocaly }
