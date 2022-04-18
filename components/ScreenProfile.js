import { View, Image, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import { styles } from "./AppColors";
import AppIcon from "./AppIcon";
import DataManager from "./DataManager";



export default function ScreenProfile({navigation, route}){
    let x = DataManager.getInst().getUser();
    console.log(x);
    return(
        <View style = {[styles.container, {justifyContent: 'center'}]}>
            
            <View style={styles.profilePic}>
                <Image style = {{resizeMode: 'contain'}} 
                    source={DataManager.getInst().getUser().profilePic}/>
            </View>

            <Text>Username</Text>
            <Text>Email</Text>
            <TouchableOpacity>
                <View style={[styles.formRow, {width: '100%', backgroundColor: '#ff0000'}]}>
                    <Text style={{flex:1}}>Change username</Text>
                    <AppIcon icon='chevron-right' style={{}}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={[styles.formRow, {width: '100%', backgroundColor: '#ff0000'}]}>
                    <Text style={{flex:1}}>Change password</Text>
                    <AppIcon icon='chevron-right' style={{}}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}