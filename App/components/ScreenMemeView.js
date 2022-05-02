/*  
    Author: Jacob Temperley
    Email: jacob.temperley@student.mq.edu.au
    Student num: 44816936
*/

// the main view that displays a list of memories

import { TouchableOpacity, View, FlatList, Image, Text } from "react-native";
import Colors, { styles } from "./AppColors";
import AppIcon from "./AppIcon";
import DataManager from "./DataManager";
import { useStateIfMounted } from "use-state-if-mounted";


export default function ScreenMemeView({navigation, route}){
    
    // this refreshes the screen on datamanager update
    const[, refresh] = useStateIfMounted();
    DataManager.getInst().addRefresh(refresh);

    // the only component that can display a meme is this one
    const Meme = ({meme}) => {
        console.log(meme.image);
        return ( <>
            
            <View style={styles.MemeCard}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Edit', {meme: meme});
                    }}>
                <Image 
                    source={typeof(meme.image) === "number" ? meme.image : {uri: meme.image}}
                    style={styles.MemeImg}/>
                </TouchableOpacity>
                <View style={styles.MemeRow}>
                    <View style={styles.inputField}>
                        <Text style={styles.text}>{meme.descrip}</Text>
                    </View>
                    <View style={{width: Colors.padding}}/>
                    <AppIcon icon = {'heart'}/>
                
                </View>
            </View>
            
            </>
        );
    };

    // set up the filter that may have been sent by another screen
    let filter = null;
    // cat is the category
    let cat = null; 
    try {
        cat = route.params.category;
    } catch {}
    if (cat == null){
        // if there is no category, return all memes
        filter= (item) => {return true}
    } else {
        // else base the filter on the category
        filter = (item) => {return item.category === cat};
    }

    return (
        <View style={styles.container}>
            <View style={[styles.comfySpace, {
                marginTop: 0,
                marginBottom: 0,
            }]}>
                <FlatList
                data={DataManager.getInst().getMemes(filter)}
                renderItem={({item})=>{
                    return(
                        <Meme meme = {item}/>
                    );}}
                keyExtractor={item => item.id}/>
            </View>
        </View>
    );
}