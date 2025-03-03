import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar';
import colors from '../../utils/colors';
import styles from './styles';
import { Images } from '../../utils/images';
import InputContainer from '../../component/InputContainer';
import Toast from 'react-native-toast-message';

const HelpScreen = () => {

    const navigation = useNavigation();
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');

    const SubmitHelp = () => {
        if(subject == "" && description == ""){
            Toast.show({
                type: 'error',
                text1: 'Please enter your subject and description'
            });
        }
        else if(subject == ""){
            Toast.show({
                type: 'error',
                text1: 'Please enter your subject'
            });
        }
        else if (description == ""){
            Toast.show({
                type: 'error',
                text1: 'Please enter your description'
            });
        }
        else {

        }
    }

    return (
        <View style={styles.container}>
            <CustomStatusbar
                backgroundColor={colors.white}
                barStyle="dark-content"
            />
            <View style={styles.headerView}>
                <View style={styles.headerbackView}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.backButtonView}
                        onPress={() => navigation.goBack()}>
                            <Image source={Images.backIcon} style={styles.headerBack} />
                    </TouchableOpacity>

                    <Text style={styles.cartText}>Help</Text>
                </View>

                <TouchableOpacity activeOpacity={1}>
                </TouchableOpacity>
            </View>

            <View style={styles.helpView}>
                <Text style={styles.headerText}>The Eyewear app has an app support section that can help with issues related to the app.</Text>
                <View style={styles.inputView}>
                    <InputContainer title="Subject" value={subject} onChangeText={(val) => setSubject(val)} />
                    <InputContainer title="Description" value={description} onChangeText={(val) => setDescription(val)} />
                </View>
            </View>

            <TouchableOpacity activeOpacity={1} onPress={SubmitHelp} style={styles.submitButton}>
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HelpScreen