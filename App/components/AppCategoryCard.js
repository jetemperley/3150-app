
/*  
    Author: Jacob Temperley
    Email: jacob.temperley@student.mq.edu.au
    Student num: 44816936
*/

// card specificly used for the category flatlist

import { View, Image, Text, TouchableOpacity} from "react-native";
import { styles } from "./AppColors";

export default function AppCategoryCard({source, title, onPress}){
    return (
        
        
        <View style={[styles.FlatListCard]}>
            <TouchableOpacity onPress = {onPress}>
            <View style={styles.CatCard}>
                <Image style={styles.CatImage} 
                    source={typeof(source) === "number" ? source : {uri: source}} />
                <Text>{title}</Text>
            </View>
            
        </TouchableOpacity>
            
        </View>
        
    );
}