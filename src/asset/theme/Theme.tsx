/*Essa paleta de cores é usado apenas para "enganar" o Raact Navigation, de fato a única coisa que
importa é o booleano dark. Assim as cores definidas não são relevantes*/

const light = {
    dark: false,
    colors: {
        primary: '#fff',
        background: '#fff',
        card: '#fff',
        text: '#fff',
        border: '#fff',
        notification: '#fff',
    }
}

const dark = {
    dark: true,
    colors: {
        primary: '#fff',
        background: '#fff',
        card: '#fff',
        text: '#fff',
        border: '#fff',
        notification: '#fff',
    }
}

export default { light, dark }