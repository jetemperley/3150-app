/*  
    Author: Jacob Temperley
    Email: jacob.temperley@student.mq.edu.au
    Student num: 44816936
*/

import { View, Image, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import Colors, { styles } from "./AppColors";
import AppIcon from "./AppIcon";
import DataManager from "./DataManager";



export default function ScreenProfile({navigation, route}){
    
    return(
        <View style = {[styles.container, {justifyContent: 'center'}]}>
            
            <View style={styles.profilePic}>
                <Image style = {{resizeMode: 'contain'}} 
                    source={DataManager.getInst().getUser().profilePic}/>
            </View>
            <Text></Text>
            <Text style={{fontSize: 20}}>{DataManager.getInst().getUser().username}</Text>
            
            <Text  style={{fontSize: 20}}>{DataManager.getInst().getUser().email}</Text>
            <Text></Text>
            <TouchableOpacity>
                <View style={[styles.formRow, {width: '100%', backgroundColor: Colors.inputBGColor}]}>
                    <Text style={{flex:1, paddingLeft: Colors.padding}}>Change username</Text>
                    <AppIcon icon='chevron-right' style={{backgroundColor: Colors.inputBGColor}}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={[styles.formRow, {width: '100%', backgroundColor: Colors.inputBGColor}]}>
                    <Text style={{flex:1, paddingLeft: Colors.padding}}>Change password</Text>
                    <AppIcon icon='chevron-right' style={{backgroundColor: Colors.inputBGColor}}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}