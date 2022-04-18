import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Colors = {


  primary: '#84B4FD',
  secondary: '#425A86',
  background: '#aaaaaa',
  red: '#ff0000',
  black: '#000000',
  white: '#ffffff',
  inputBGColor: '#444444',
  inputTextColor: '#333333',
  dontPressMe: '#bbbbbb',
  padding: 10,

};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1000,
        backgroundColor: Colors.red,
        
    }, 

    inputField: {
        flexDirection: 'row',
        
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 1000,
        backgroundColor: Colors.primary,
        flex: 1,
    }, 

    icon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.inputBGColor,
        color: Colors.black,
        borderRadius: 1000,
        
        // alignSelf: 'stretch',
        // flexGrow: 1,
        height: '100%',
        aspectRatio: 1,
        
    },

    text: {
        fontSize: 12,
        padding: Colors.padding,
        flex: 1,
    },

    formRow: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        width: '75%',
        paddingLeft: '5%',
        marginBottom: Colors.padding,
        
    },
    profilePic: {
        overflow: 'hidden', 
        alignItems: 'center', 
        width: '50%', 
        aspectRatio: 1, 
        borderRadius: 1000,
    }
});

export default Colors;