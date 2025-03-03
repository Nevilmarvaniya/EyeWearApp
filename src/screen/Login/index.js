import React, { useState } from 'react'
import { Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar'
import colors from '../../utils/colors'
import { Images } from '../../utils/images'
import { useNavigation } from '@react-navigation/native'

const Login = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
                        <Image source={require("../../assets/Login.png")} style={styles.loginImageView} />

                        <View style={styles.loginView}>
                            <Text style={styles.loginText}>Login Details</Text>
                            <View style={styles.emailView}>
                                <TextInput
                                    value={email}
                                    onChangeText={val => setEmail(val)}
                                    placeholder='Username, email or phone number'
                                    placeholderTextColor={colors.gray2}
                                    style={styles.emailInput} />
                            </View>

                            <View style={styles.passwordView}>
                                <TextInput
                                    value={password}
                                    onChangeText={val => setPassword(val)}
                                    placeholder='Password'
                                    placeholderTextColor={colors.gray2}
                                    style={styles.passwordInput} />
                            </View>

                            <Text onPress={() => navigation.navigate("ForgotPassword")} style={styles.forgotText}>Forgot password ?</Text>

                            <TouchableOpacity activeOpacity={1} onPress={() => navigation.replace("BottomTabs")} style={styles.loginButton}>
                                <Text style={styles.loginButtontext}>Login</Text>
                            </TouchableOpacity>

                            <View style={styles.signUpWithView}>
                                <Image source={Images.signupLine} style={styles.lineImage}/>
                                <Text style={styles.signUpText}>Or Sign up with</Text>
                                <Image source={Images.signupLine1} style={styles.lineImage}/>
                            </View>

                            <View style={styles.bottomButton}>
                                <TouchableOpacity activeOpacity={1} style={styles.googleView}>
                                    <Image source={Images.googleLogo} style={styles.loginButtonView} />
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={1} style={styles.googleView}>
                                    <Image source={Images.facebookLogo} style={styles.loginButtonView} />
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={1} style={styles.googleView}>
                                    <Image source={Images.apple} style={styles.loginButtonView} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </ScrollView>
        </View>
    )
}

export default Login