import { StyleSheet } from "react-native";
import Color from "../asset/design/Color";

export default function(){
    return StyleSheet.create({
        container:{
            backgroundColor: Color['light'].surface //Aqui não é necessário se adaptar ao tema, pois essa tela será sempre no modo claro
        }
    })
}