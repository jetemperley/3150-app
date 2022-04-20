
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import ScreenMemeEdit from './ScreenEditMeme';
import LogInScreen from './ScreenLogIn';
import ScreenMemeView from './ScreenMemeView';
import ScreenProfile from './ScreenProfile';
import ScreenRegister from './ScreenRegister';
import SplashScreen from './ScreenSplash';
import ScreenUserTabs from './ScreenUserTabs';

const AppStack = createStackNavigator();

export default function ScreenEntryStack() {
  return (
    <NavigationContainer>
        <AppStack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <AppStack.Screen 
                name='Splash' 
                component ={SplashScreen}/>
            <AppStack.Screen 
                name='LogIn' 
                component ={LogInScreen}/>
            <AppStack.Screen 
                name='Register' 
                component ={ScreenRegister}/>
            <AppStack.Screen 
                name='UserTabs' 
                component ={ScreenUserTabs}/>
            <AppStack.Screen 
                name='Edit' 
                component ={ScreenMemeEdit}/>
			<AppStack.Screen 
                name='CatMemes' 
                component ={ScreenMemeView}/>
            
        </AppStack.Navigator>
    </NavigationContainer>
  );
}

