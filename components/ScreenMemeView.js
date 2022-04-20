import { TouchableOpacity, View, FlatList, Image, Text } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { useState } from "react";
import Colors, { styles } from "./AppColors";
import AppIcon from "./AppIcon";
import DataManager from "./DataManager";
import { useStateIfMounted } from "use-state-if-mounted";


export default function ScreenMemeView({navigation, route}){
    
    const[, refresh] = useStateIfMounted();
    DataManager.getInst().addRefresh(refresh);

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
    let filter = null;
    let cat = null; 
    try {
        cat = route.params.category;
    } catch {}
    if (cat == null){
        console.log('filter null');
        filter= (item) => {return true}
    } else {
        filter = (item) => {return item.category == cat};
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