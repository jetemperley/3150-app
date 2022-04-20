import { TouchableOpacity, View, Image, ImageBackground, Text} from "react-native";
import AppButton from "./AppButton";
import Colors, { styles } from "./AppColors";
import AppIcon from "./AppIcon";
import AppInputField from "./AppInputField";
import * as ImagePicker from 'expo-image-picker';
import AppPicker from "./AppPicker";
import { useState } from "react";
import DataManager from "./DataManager";


export default function ScreenAddNewMem({navigation}){
    const [cat, setCat] = useState("");
    const [uri, setUri] = useState(null);
    const [date, setDate] = useState("");
    const [desc, setDesc] = useState("");

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          quality: 1,
        });
    
        // console.log(result);
    
        if (!result.cancelled) {
          setUri(result.uri);
        }
    };

    const submit = () =>{
        // console.log(cat);
        // console.log(uri);
        // console.log(date);
        // console.log(desc);
        let meme = {
            id: 0,
            image: uri,
            date: date,
            descrip: desc,
            like: false,
            category: cat,
        };
        DataManager.getInst().addMeme(meme);
        clear();
        navigation.navigate('Memes');
    }

    const clear = () => {
        setCat("");
        setDate("");
        setDesc("");
        setUri(null);
    }

    

    return (
        <View style={styles.altContainer}>
            <View style={styles.comfySpace}>
                <View style={styles.BigInput}>
                    <ImageBackground 
                        style={{flex: 1}}
                        source={{uri: uri}}>
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
                        <Text>Submit</Text>
                    </AppButton>
                </View>
                <View style={styles.formRow}>
                    <AppButton>
                        <Text>Clear</Text>
                    </AppButton>
                </View>
            </View>
        </View>
    );
}