import { View, Image, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import AppButton from "./AppButton";
import { styles } from "./AppColors";
import AppIcon from "./AppIcon";



export default function ScreenChangePassword(){
    return(
        <View style = {[styles.container]}>
            <View style={styles.formRow}>
                <AppInputField icon = {'key'} placeholder = {'Old password'}/>
            </View>
            <View style={styles.formRow}>
                <AppInputField icon = {'key'} placeholder = {'New password'}/>
            </View>
            <View style={styles.formRow}>
                <AppInputField icon = {'key'} placeholder = {'Confirm new password'}/>
            </View>
            <View style={styles.formRow}>
                <AppButton style={{backgroundColor: Colors.primary}}><Text>Confirm</Text></AppButton>
            </View>
            <View style={styles.formRow}>
                <AppButton style={{backgroundColor: Colors.red}}><Text>Cancel</Text></AppButton>
            </View>
        </View>
    );
}