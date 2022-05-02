
/*  
    Author: Jacob Temperley
    Email: jacob.temperley@student.mq.edu.au
    Student num: 44816936
*/

// styles and colors throughout the app

import { StyleSheet, StatusBar, Dimensions } from 'react-native';

const Colors = {


  primary: '#63adf2', // blue jeans
  secondary: '#A425A86',
  background: '#a7cced', // baby blue eyes
  red: '#ff0000',
  black: '#000000',
  white: '#ffffff',
  inputBGColor: '#82a0bc', // air superiority blue
  iconColor: '#92b0cc',
  inputTextColor: '#333333',
  dontPressMe: '#bbbbbb',
  // some extra constants
  padding: 10,
  iconSize: 50,

};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight,
    },

    altContainer: {
        flex:1, 
        backgroundColor: Colors.background,
        marginTop: StatusBar.currentHeight,
    },

    comfySpace: {
        margin: "5%",
    },  

    button: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1000, // absurdly high so edges are always round
        backgroundColor: Colors.red,
        
    }, 

    inputField: {
        flexDirection: 'row',
        
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 1000, // absurdly high so edges are always round
        height: Colors.iconSize,
        backgroundColor: Colors.inputBGColor,
        flex: 1,
    }, 

    icon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.iconColor,
        color: Colors.black,
        borderRadius: 10000, // absurdly high so edges are always round
        width: Colors.iconSize,
        height: Colors.iconSize,
        maxWidth: Colors.iconSize,
        maxHeight: Colors.iconSize,
        aspectRatio: 1,
        
    },
    loginLogo: {
        width: Dimensions.get('window').width/2,
        height: Dimensions.get('window').width/2,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    padding: {
        paddingLeft: Colors.padding,
    },

    text: {
        fontSize: 12,
        padding: Colors.padding,
        flex: 1,
    },
    inputText: {
        paddingLeft: Colors.padding, 
        flex: 1,
        color: Colors.inputTextColor
    },

    formRow: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        height: Colors.iconSize,
        width: '100%',
        marginBottom: Colors.padding,
        
    },
    profilePic: {
        overflow: 'hidden', 
        alignItems: 'center', 
        width: '50%', 
        aspectRatio: 1, 
        borderRadius: 1000,
    },
    CatImage: {
        width: '80%',
        height: "80%",
        resizeMode: 'cover',

        
        borderRadius: Colors.padding*2,
        
    },
    CatCard:{
        width:"100%",
        height:'100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        aspectRatio: 1,
        
        overflow: 'hidden',
        
        
    },
    FlatListCard: {
        width: '50%',
        aspectRatio: 1,
        padding: Colors.padding,
    },
    Underlay: {
        flex:1,
        position: 'absolute',
        left: 0,
        top: 0,
        width:'100%',
        height: '100%',
    },
    BigInput: {
        borderRadius: Colors.iconSize,
        marginBottom: '5%',
        width: '100%',
        height: '50%',
        overflow: 'hidden',
        backgroundColor: Colors.inputBGColor
    },
    MemeCard: {
        width: '100%',
        alignItems:'center',
    },
    MemeImg: {
        width: Dimensions.get('window').width - Colors.iconSize,
        minHeight: Dimensions.get('window').width/1.5,
        marginBottom: Colors.padding,
        resizeMode: 'cover',
        
    },
    MemeRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderRadius: 1000,
        height: Colors.iconSize,
        width: '100%',
        marginBottom: Colors.padding,
    },


});

export default Colors;