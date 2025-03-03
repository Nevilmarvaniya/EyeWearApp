import React, { useState } from 'react'
import { Image, Text, ScrollView, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar'
import colors from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import { Images } from '../../utils/images'
import Toast from 'react-native-toast-message';
import InputContainer from '../../component/InputContainer'

const CheckOutPage = () => {

    const navigation = useNavigation();
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')
    const [pincode, setPincode] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')

    const ProceedItem = () => {
        if(name == ""){
            Toast.show({
                type: 'error',
                text1: 'Please enter your name'
            });
        }
        else if(number == ""){
            Toast.show({
                type: 'error',
                text1: 'Please enter your number'
            });
        }
        else if(address == ""){
            Toast.show({
                type: "error",
                text1: "Please enter your address"
            })
        }
        else if(pincode == ""){
            Toast.show({
                type: "error",
                text1: "Please enter your pincode"
            })
        }
        else if(city == ""){
            Toast.show({
                type: "error",
                text1: "Please enter your city"
            })
        }
        else if(state == ""){
            Toast.show({
                type: "error",
                text1: "Please enter your state"
            })
        }
        else if(country == ""){
            Toast.show({
                type: "error",
                text1: "Please enter your country"
            })
        }
        else{
            navigation.navigate("PaymentScreen")
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

                    <Text style={styles.cartText}>Contact Details</Text>
                </View>

                <TouchableOpacity activeOpacity={1}>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <InputContainer title="Name" value={name} onChangeText={(val) => setName(val)} />
                <InputContainer title="Mobile Number" value={number} onChangeText={(val) => setNumber(val)} />
                <InputContainer title="Street Address" value={address} onChangeText={(val) => setAddress(val)} />
                <InputContainer title="Pincode" value={pincode} onChangeText={(val) => setPincode(val)} />
                <InputContainer title="City" value={city} onChangeText={(val) => setCity(val)} />
                <InputContainer title="State" value={state} onChangeText={(val) => setState(val)} />
                <InputContainer title="Country" value={country} onChangeText={(val) => setCountry(val)} />

                <TouchableOpacity activeOpacity={1} onPress={() => ProceedItem()} style={styles.cartButton}>
                    <Text style={styles.addCartText}>Proceed</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default CheckOutPage