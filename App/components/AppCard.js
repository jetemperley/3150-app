
/*  
    Author: Jacob Temperley
    Email: jacob.temperley@student.mq.edu.au
    Student num: 44816936
*/

// Card used for a flatlist

import { Image } from "react-native";

export default function AppCard(props){
    return (
        <Image
            style = {{flex: 1, height: 200}} 
            source = {props.source}/>
    );
}