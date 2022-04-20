import { Image } from "react-native";
import { styles } from "./AppColors";



export default function AppCard(props){
    return (
        <Image
            style = {{flex: 1, height: 200}} 
            source = {props.source}/>
    );
}