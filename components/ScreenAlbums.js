import { FlatList, View } from "react-native";
import { styles } from "./AppColors";

export default function ScreenAlbum(){
    return (
        <View styel={styles.container}>
            <FlatList
                style = {styles.container}
                data = {dat}
                keyExtractor = {(dats) => {return dats.id;}}
                renderItem = {({item}) => {
                  return (
                    <Card source = {item.image}><Text>{item.name}</Text></Card>
                  );
                }}>

            </FlatList>
        </View>
    );
}