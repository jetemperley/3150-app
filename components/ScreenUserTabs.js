import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ScreenProfile from "./ScreenProfile";



export default function ScreenUserTabs(){
    
    const TabNav = createBottomTabNavigator();

    return(
        <TabNav.Navigator>
            <TabNav.Screen 
                name='Profile' 
                component ={ScreenProfile}/>
            <TabNav.Screen 
                name='Profile2' 
                component ={ScreenProfile}/>
        </TabNav.Navigator>
    );
}