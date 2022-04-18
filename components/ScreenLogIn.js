import { CommonActions, useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { View, Text, TouchableOpacity } from "react-native";
import AppButton from "./AppButton";
import Colors, {styles} from './AppColors';
import AppIcon from "./AppIcon";
import AppInputField from "./AppInputField";
import * as Yup from 'yup'
import DataManager from "./DataManager";


export default function LogInScreen({navigation, route}){

    const register = () => {
        console.log('pressed');
        navigation.navigate('Register');
    };

    const logIn = () => {
        navigation.navigate('Profile');
    };

    const schema = Yup.object().shape({
        Email: Yup.string(),//.email().required(),
        Password: Yup.string(),// .required().min(4).max(25),
    });

    

    return (
        
        <View style = {styles.container}>
            <Formik 
                initialValues = {{Email: 'Email', Password:'Password'}}
                validationSchema ={schema}
                onSubmit = {
                    values => {
                    console.log(values);
                    let idx = DataManager.getInst().setUser(
                        values.Email, values.Password);
                    
                    if (idx != -1){
                        console.log('user validated');
                        navigation.navigate(
                            "UserTabs", 
                            {
                                screen: "Profile",
                                params: {idx: idx}
                            });
                    } else {
                        console.log('user rejected');
                        // indicate a Email or password is wrong
                    }}
                } 
            >
                {(props) => {return (<>
                    <View style={styles.formRow}>
                        <AppInputField 
                            icon = {'account'} 
                            placeholder = {'Email'}
                            onChangeText ={props.handleChange('Email')}/>
                        <TouchableOpacity style={[styles.icon, {marginLeft:Colors.padding}]}>
                            <AppIcon icon='account'><Text>?</Text></AppIcon>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.formRow}>
                        <AppInputField 
                            icon = {'key'} 
                            placeholder = {'Password'}
                            onChangeText ={props.handleChange('Password')}/>
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
                    <View style={styles.formRow}>
                        <Text>{props.errors.Password}</Text>
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
        
    );
}