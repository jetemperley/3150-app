import { View, Image, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import Colors, { styles } from "./AppColors";
import AppIcon from "./AppIcon";
import DataManager from "./DataManager";



export default function ScreenProfile({navigation, route}){
    // let x = DataManager.getInst().getUser();
    // console.log(x);
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