/*  
    Author: Jacob Temperley
    Email: jacob.temperley@student.mq.edu.au
    Student num: 44816936
*/

// The main login screen

import { Formik } from "formik";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AppButton from "./AppButton";
import Colors, {styles} from './AppColors';
import AppIcon from "./AppIcon";
import AppInputField from "./AppInputField";
import * as Yup from 'yup';
import DataManager from "./DataManager";


export default function LogInScreen({navigation, route}){

    const register = () => {
        console.log('pressed');
        navigation.navigate('Register');
    };

    const schema = Yup.object().shape({
        Email: Yup.string().trim().email().required(),
        Password: Yup.string(),// .required().min(4).max(25),
    });

    

    return (
        
        <View style = {styles.altContainer}>
            <View style = {styles.comfySpace}>
                <Image 
                    source={require('../images/icon.png')}
                    style={styles.loginLogo}/>
            <Formik 
                initialValues = {{Email: 'Email', Password:'Password'}}
                validationSchema ={schema}
                onSubmit = {
                    values => {
                        
                    // tries to log in via datamanager
                    let idx = DataManager.getInst().setUser(
                        values.Email, values.Password);
                    
                    // -1 indicates log in failed
                    if (idx != -1){
                        console.log('user validated');
                        navigation.navigate(
                            "UserTabs", 
                            {
                                screen: "Profile",
                                params: {idx: idx}
                            });
                    }}
                } 
            >
                {(props) => {return (<>
                    <View style={styles.formRow}>
                        <AppInputField 
                            icon = {'account'} 
                            placeholder = {'Email'}
                            onChangeText ={props.handleChange('Email')}
                            keyboardType={'email-address'}/>
                        <TouchableOpacity style={[styles.icon, {marginLeft:Colors.padding}]}>
                            <AppIcon icon='account'><Text>?</Text></AppIcon>
                        </TouchableOpacity>
                    </View>
                    {
                        props.values.Email.length > 0 && props.errors.Email ?
                        <View style={styles.formRow}>
                            <Text style={{color: Colors.red}}>{props.errors.Email}</Text>
                        </View> 
                        : 
                        <View style={{height:0}}/>
                    }
                    <View style={styles.formRow}>
                        <AppInputField 
                            icon = {'key'} 
                            placeholder = {'Password'}
                            onChangeText ={props.handleChange('Password')}
                            secure={true}/>
                        <TouchableOpacity style={[styles.icon, {marginLeft:Colors.padding}]}>
                            <AppIcon icon='key'><Text>?</Text></AppIcon>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.formRow}>
                        <AppButton 
                            style = {{backgroundColor: Colors.primary}} 
                            onPress = {props.handleSubmit}
                            >
                            <Text>Log in</Text>
                        </AppButton>
                    </View>
                    
                    
                        
                    
                </>);}}
                
            </Formik>
            
            <View style={[styles.formRow, {justifyContent: 'center', alignItems: 'center'}]}>
                <Text style = {{color: Colors.inputTextColor}}>-OR-</Text>
            </View>
            <View style={styles.formRow}>
                    <AppButton 
                        style={{backgroundColor: Colors.primary}} 
                        onPress={register}>
                        <Text>Create account</Text></AppButton>
            </View>
            </View>
        </View>
        
    );
}