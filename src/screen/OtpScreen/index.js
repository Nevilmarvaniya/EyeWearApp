import React, { useEffect, useRef, useState } from 'react'
import { Image, ImageBackground, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar'
import colors from '../../utils/colors'
import { Images } from '../../utils/images'
import { useNavigation } from '@react-navigation/native'
import OTPTextView from "react-native-otp-textinput";

const OtpScreen = () => {

    const navigation = useNavigation();
    const otpInputRef = useRef(null);
    const [otpInput, setOtpInput] = useState("");
    const [timer, setTimer] = useState(120); // 120 seconds (2 minutes)
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        if (timer > 0) {
        const interval = setInterval(() => {
            setTimer((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(interval);
        } else {
        setCanResend(true);
        }
    }, [timer]);

    const handleTextChange = (text) => {
        setOtpInput(text);

        if (text.length === 4) {
            Keyboard.dismiss();
        }
    };

    const handleCellTextChange = async (text, i) => {
        if (i == 0) {
          if (text) {
            i.current?.setValue(text);
          }
        }
    };
    
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
                        <Image source={Images.otpImage} style={styles.loginImageView} />

                        <View style={styles.loginView}>
                            <Text style={styles.loginText}>OTP Screen</Text>

                            <Text style={styles.otpSentMessage}>OTP is Successfully Send. Please check your email. We've sent a verification code to below email address.</Text>

                            <OTPTextView
                                ref={otpInputRef}
                                containerStyle={styles.textInputContainer}
                                textInputStyle={styles.roundedTextInput}
                                autoFocus={true}
                                handleTextChange={handleTextChange}
                                handleCellTextChange={handleCellTextChange}
                                inputCount={4}
                                keyboardType="numeric"
                                tintColor={colors.gray}
                                offTintColor={colors.gray}
                            />

                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => navigation.replace("Login")}
                                style={styles.loginButton}>
                                <Text style={styles.loginButtontext}>Verify OTP</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </ScrollView>
        </View>
    )
}

export default OtpScreen;