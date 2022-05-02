/*  
    Author: Jacob Temperley
    Email: jacob.temperley@student.mq.edu.au
    Student num: 44816936
*/

// the screen that appears when the user presses on a memory image

import { TouchableOpacity, View, Image, ImageBackground, Text} from "react-native";
import AppButton from "./AppButton";
import Colors, { styles } from "./AppColors";
import AppIcon from "./AppIcon";
import AppInputField from "./AppInputField";
import * as ImagePicker from 'expo-image-picker';
import AppPicker from "./AppPicker";
import { useState } from "react";
import DataManager from "./DataManager";


export default function ScreenMemeEdit({navigation, route}){

    let meme = route.params.meme;
    const [cat, setCat] = useState(meme.category);
    const [uri, setUri] = useState(meme.image);
    const [date, setDate] = useState(meme.date);
    const [desc, setDesc] = useState(meme.descrip);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setUri(result.uri);
        }
    };

    const submit = () =>{
        let meme = {
            id: 0,
            image: uri,
            date: date,
            descrip: desc,
            like: false,
            category: cat,
        };
        DataManager.getInst().setMeme(meme);
        navigation.goBack();
    } 

    const deleteMeme = () => {
        DataManager.getInst().deleteMeme(meme);
        navigation.goBack();
    }
    return (
        <View style={styles.altContainer}>
            <View style={styles.comfySpace}>
                <View style={styles.BigInput}>
                    <ImageBackground 
                        style={{flex: 1}}
                        source={typeof(uri) === "number" ? uri : {uri: uri}}>
                        <TouchableOpacity onPress={pickImage}>
                            <AppIcon 
                            style={{
                                margin: Colors.padding*2}} 
                                icon='image'></AppIcon>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>  
                <View style={styles.formRow}>
                    <AppPicker
                        icon={'view-grid-plus'}
                        onPress={(str)=>setCat(str)}>
                        <Text style={styles.inputText}>{cat || 'Category'}</Text>
                    </AppPicker>
                    <View style={styles.padding}/>
                    <AppIcon icon={'heart'}/>
                </View>        
                <View style={styles.formRow}>
                    <AppInputField
                        icon={'calendar-range'}
                        placeholder={'Date'}
                        onChangeText={(text)=>setDate(text)}
                        value = {date}/>
                </View>
                <View style={styles.formRow}>
                    <AppInputField
                        icon={'message-text-outline'}
                        placeholder={'Description'}
                        onChangeText={(text)=>setDesc(text)}
                        value = {desc}/>
                </View>
                <View style={styles.formRow}>
                    <AppButton 
                        style = {{backgroundColor: Colors.primary}}
                        onPress = {submit}>
                        <Text>Apply changes</Text>
                    </AppButton>
                </View>
                <View style={styles.formRow}>
                    <AppButton onPress={deleteMeme}>
                        <Text>Delete</Text>
                    </AppButton>
                </View>
            </View>
        </View>
    );
}