import {View, Text, Modal, FlatList, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import AppButton from './AppButton';
import Colors, { styles } from './AppColors';
import AppIcon from './AppIcon';
import DataManager from './DataManager';
import AppCategoryCard from './AppCategoryCard';
import AppInputField from './AppInputField';

export default function AppPicker({props, icon, children, onPress}){
    const [vis, setVis] = useState(false);
    const [cat, setCat] = useState("");
    return(
        <AppButton 
            style = {styles.inputField}
            onPress={()=>setVis(true)}>
        
            <Modal
                animationType="slide"
                visible={vis}>
                <View style={styles.formRow}>
                    <AppButton onPress={()=>setVis(false)}>
                        <Text>Close</Text>
                    </AppButton>
                </View>
                <View style={styles.formRow}>
                    <AppInputField 
                        icon={'view-grid-plus'}
                        placeholder ={'New category'}
                        onChangeText={(text)=>{setCat(text)}}/>
                    <TouchableOpacity onPress={()=>{
                        setVis(false);
                        onPress(cat);
                        }}>
                        <AppIcon icon="chevron-right"/>
                    </TouchableOpacity>
                </View>
                    <FlatList
                        numColumns={2}
                        data = {DataManager.getInst().getCategories()}
                        keyExtractor = {(item) => {return item.id;}}
                        renderItem = {({item}) => {
                            return (
                                <AppCategoryCard source = {item.image}
                                title = {item.category}
                                onPress={()=>{
                                    setVis(false);
                                    onPress(item.category);
                                }}/>
                            ); 
                    }}/>
                
            </Modal>
            <AppIcon icon = {icon}/>
            {children}
            
        </AppButton>
    );
} 