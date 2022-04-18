import { View, Text } from "react-native";
import AppButton from "./AppButton";
import Colors, { styles } from "./AppColors";
import AppInputField from "./AppInputField";


export default function ScreenRegister({navigation}){

    const submit = () => {
        console.log('submitted');
    };

    const cancel = () => {
        navigation.goBack();
        console.log('canceled');
    };

    return (
        <View style = {styles.container}>
            <View style={styles.formRow}>
                <AppInputField icon = {'account'} placeholder = {'Username'}/>
            </View>

            <View style={styles.formRow}>
                <AppInputField icon = {'email'} placeholder = {'Email'}/>
            </View>

            <View style={styles.formRow}>
                <AppInputField icon = {'key'} placeholder = {'Password'}/>
            </View>

            <View style={styles.formRow}>
                <AppInputField icon = {'key'} placeholder = {'Confirm passward'}/>
            </View>

            <View style={styles.formRow}>
                <AppButton 
                    style={{backgroundColor: Colors.primary}} 
                    onPress={submit}>
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
    );
}