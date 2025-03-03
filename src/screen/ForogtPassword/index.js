import React, { useState } from 'react'
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar'
import colors from '../../utils/colors'
import { Images } from '../../utils/images'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {

    const navigation = useNavigation();
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    
    return (
        <View style={styles.container}>
            <CustomStatusbar
                backgroundColor={colors.white}
                barStyle="dark-content"
            />
                <ScrollView
                    contentContainerStyle={styles.subContainer}
                    bounces={false}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <ImageBackground
                        style={styles.imageBackground}
                        source={Images.signIn}
                    >
                        <Image source={Images.forgotPassword} style={styles.loginImageView} />

                        <View style={styles.loginView}>
                            <Text style={styles.loginText}>Forgot Password</Text>
                            <View style={styles.emailView}>
                                <TextInput
                                    value={password}
                                    onChangeText={val => setPassword(val)}
                                    placeholder='Password'
                                    placeholderTextColor={colors.gray2}
                                    style={styles.emailInput} />
                            </View>

                            <View style={styles.passwordView}>
                                <TextInput
                                    value={newPassword}
                                    onChangeText={val => setNewPassword(val)}
                                    placeholder='New Password'
                                    placeholderTextColor={colors.gray2}
                                    style={styles.passwordInput} />
                            </View>

                            <TouchableOpacity 
                                activeOpacity={1} 
                                onPress={() => navigation.replace("OtpScreen")} 
                                style={styles.loginButton}>
                                <Text style={styles.loginButtontext}>Forgot Password</Text>
                            </TouchableOpacity>

                            <View style={styles.signUpWithView}>
                                <Image source={Images.signupLine} style={styles.lineImage}/>
                                <Text style={styles.signUpText}>Or</Text>
                                <Image source={Images.signupLine1} style={styles.lineImage}/>
                            </View>

                            <TouchableOpacity 
                                activeOpacity={1} 
                                onPress={() => navigation.goBack()} 
                                style={styles.loginButton1}>
                                <Text style={styles.loginButtontext}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </ScrollView>
        </View>
    )
}

export default ForgotPassword;