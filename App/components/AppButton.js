
/*  
    Author: Jacob Temperley
    Email: jacob.temperley@student.mq.edu.au
    Student num: 44816936
*/

// Standard button used thoroughout app

import {View, TouchableOpacity, TouchableHighlight} from 'react-native';
import Colors, { styles } from './AppColors';

export default function AppButton(props){
    return(
        <TouchableOpacity style={{flex: 1}} onPress = {props.onPress}>
            <View style = {[styles.button, props.style]}>
                {props.children}
            </View>
        </TouchableOpacity>
    );
}
