/*  
    Author: Jacob Temperley
    Email: jacob.temperley@student.mq.edu.au
    Student num: 44816936
*/

// the screen to create a new user

import { Formik } from "formik";
import { View, Text } from "react-native";
import AppButton from "./AppButton";
import Colors, { styles } from "./AppColors";
import AppInputField from "./AppInputField";
import * as Yup from 'yup';
import DataManager from "./DataManager";

export default function ScreenRegister({navigation}){

    const cancel = () => {
        navigation.goBack();
        console.log('canceled');
    };

    const schema = Yup.object().shape({
        Email: Yup.string().trim().email().required(),
        Password: Yup.string(),// .required().min(4).max(25),
    });

    return (
        <Formik 
                initialValues = {{Username: 'User', Email: 'Email', Password:'Password', Password2: 'Password'}}
                validationSchema ={schema}
                onSubmit = {
                    values => {

                    // check that the passwords match
                    if (!(values.Password === values.Password2)){
                        console.log('bad password');
                        return;
                    }

                    // add a user
                    DataManager.getInst().addUser(
                        {
                            id: 0,
                            username: values.Username,
                            email: values.Email,
                            password: values. Password,
                            profilePic: "",

                        }
                    );

                    // log in to the user
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
                    }}
                } 
            >
                {(props) => {return (
        <View style = {styles.container}>
            <View style={styles.formRow}>
                <AppInputField icon = {'account'} placeholder = {'Username'}
                onChangeText ={props.handleChange('Username')}/>
            </View>

            <View style={styles.formRow}>
                <AppInputField icon = {'email'} placeholder = {'Email'}
                    onChangeText ={props.handleChange('Email')}
                    keyboardType={'email-address'}/>
            </View>

            <View style={styles.formRow}>
                <AppInputField icon = {'key'} placeholder = {'Password'}
                onChangeText ={props.handleChange('Password')}
                secure={true}/>
            </View>

            <View style={styles.formRow}>
                <AppInputField icon = {'key'} placeholder = {'Confirm passward'}
                onChangeText ={props.handleChange('Password2')}
                secure={true}/>
            </View>
            {
                !(props.values.Password  === props.values.Password2) ?
                <View style={styles.formRow}>
                    <Text style={{color: Colors.red}}>Passwords do not match</Text>
                </View> 
                : 
                <View style={{height:0}}/>
            }
            {
                        props.values.Email.length > 0 && props.errors.Email ?
                        <View style={styles.formRow}>
                            <Text style={{color: Colors.red}}>{props.errors.Email}</Text>
                        </View> 
                        : 
                        <View style={{height:0}}/>
                    }
            <View style={styles.formRow}>
                <AppButton 
                    style={{backgroundColor: Colors.primary}} 
                    onPress={props.handleSubmit}>
                        <Text>Create account</Text></AppButton>
            </View>

            <View style={styles.formRow}>
                <AppButton 
                    style={{backgroundColor: Colors.red}} 
                    onPress={cancel}>
                        <Text>Cancel</Text>
                </AppButton>
            </View>
        </View>
        );}}
        </Formik>
    );
}