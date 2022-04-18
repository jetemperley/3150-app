
import * as React from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';
import Colors from './AppColors';

export default function SplashScreen({navigation}) {

  

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // the next screen function is calles after 3000 ms
      let id = setInterval(nextScreen, 3000);
      function nextScreen(){
        clearInterval(id);
        navigation.navigate("LogIn");
      }
        
    
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

    
  return (
    <View style = {styles.container}>
        <Image style = {styles.logo} source = {require('../images/icon.png')}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
      width: '50%',
      resizeMode: 'contain',
  }
});
