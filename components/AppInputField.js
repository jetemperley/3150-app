import {View, TextInput} from 'react-native';
import Colors, { styles } from './AppColors';
import AppIcon from './AppIcon';

export default function AppInputField({props, placeholder, icon, onChangeText}){
    return(
        <View style = {[styles.inputField, {backgroundColor: '#555555'}]}>
            <AppIcon icon = {icon}/>
            <TextInput 
                placeholder={placeholder || 'default text'} 
                style ={{padding: Colors.padding, flex: 1}}
                onChangeText = {onChangeText}/>
        </View>
    );
} 