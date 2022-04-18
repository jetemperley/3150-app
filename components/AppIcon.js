import { View, Text} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Colors, { styles } from "./AppColors";

export default function AppIcon(props){
    return(
        <View style = {[styles.icon ,props.style]}>
            <MaterialCommunityIcons name={props.icon} size={styles.text.fontSize*2} 
                color = {Colors.black}/>
                {props.children}
        </View>
    );

}