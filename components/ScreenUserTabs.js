import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Colors, { styles } from "./AppColors";
import AppIcon from "./AppIcon";
import ScreenAddNewMem from "./ScreenAddNewMem";
import ScreenAlbum from "./ScreenAlbum";
import ScreenMemeEdit from "./ScreenEditMeme";
import ScreenMemeView from "./ScreenMemeView";
import ScreenProfile from "./ScreenProfile";
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function ScreenUserTabs(){
    
    const TabNav = createBottomTabNavigator();

    return(
        <TabNav.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor: Colors.primary,
                tabBarInactiveBackgroundColor: Colors.background}}>
            <TabNav.Screen 
                name='Profile' 
                component ={ScreenProfile}
                options ={{
                    tabBarIcon: 
                        ()=>{return (<MaterialCommunityIcons
                            name={'account'}
                            size={styles.text.fontSize*2}/>)},
                    
                    
                }}/>
            <TabNav.Screen 
                name='Albums' 
                component ={ScreenAlbum}
                options ={{
                    tabBarIcon: 
                        ()=>{return (<MaterialCommunityIcons
                            name={'view-grid'}
                            size={styles.text.fontSize*2}/>)}
                    
                }}/>
            <TabNav.Screen 
                name='NewMeme' 
                component ={ScreenAddNewMem}
                options ={{
                    tabBarIcon: 
                        ()=>{return (<MaterialCommunityIcons
                            name={'plus-thick'}
                            size={styles.text.fontSize*2}/>)}
                    
                }}/>
            <TabNav.Screen 
                name='Memes' 
                component ={ScreenMemeView}
                options ={{
                    tabBarIcon: 
                        ()=>{return (<MaterialCommunityIcons
                            name={'view-sequential'}
                            size={styles.text.fontSize*2}/>)}
                    
                }}/>

        </TabNav.Navigator>
    );
}