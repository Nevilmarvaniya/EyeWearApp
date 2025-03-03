import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar'
import colors from '../../utils/colors'
import { Images } from '../../utils/images'
import { Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import InputContainer from '../../component/InputContainer'

const EditProfile = () => {

    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setdateOfBirth] = useState('');
    const [gender, setGender] = useState('');

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

                    <Text style={styles.cartText}>Edit Profile</Text>
                </View>

                <TouchableOpacity activeOpacity={1}>
                </TouchableOpacity>
            </View>


            <ScrollView>
                <View style={styles.profileImageView}>
                    <Image source={Images.dummyProfile} style={styles.profileImage} />
                    <TouchableOpacity activeOpacity={1} style={styles.editIconView}>
                        <Image source={Images.editIcon} style={styles.editIcon} />
                    </TouchableOpacity>
                </View>
                <InputContainer title="Name" value={name} onChangeText={(val) => setName(val)} />
                <InputContainer title="Mobile Number" value={number} onChangeText={(val) => setNumber(val)} />
                <InputContainer title="Email" value={email} onChangeText={(val) => setEmail(val)} />
                <InputContainer title="Date of birth" value={dateOfBirth} onChangeText={(val) => setdateOfBirth(val)} />
                <InputContainer title="Gender" value={gender} onChangeText={(val) => setGender(val)} />
            </ScrollView>

            <TouchableOpacity activeOpacity={1} style={styles.updateButton}>
                <Text style={styles.updateText}>Update Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditProfile