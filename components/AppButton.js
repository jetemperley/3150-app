
import {View, TouchableOpacity, TouchableHighlight} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
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
