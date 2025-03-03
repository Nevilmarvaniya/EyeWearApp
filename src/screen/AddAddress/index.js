import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar';
import styles from './styles';
import colors from '../../utils/colors';
import { Images } from '../../utils/images';
import { Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { address } from './data';

const AddAddress = () => {

    const navigation = useNavigation();
    const [select, setSelect] = useState(null);
    const [name, setName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [flat, setFlat] = useState('');
    const [addressOne, setAddressOne] = useState('');
    const [addressTwo, setAddressTwo] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    const [country, setCountry] = useState('');


    const userSelect = (id) => {
        setSelect(id)
    }

    const InputContainer = ({title, value, onChangeText, keyboardType}) => {
        return (
            <View style={styles.inputView}>
                <Text style={styles.titleText}>{title}{" "}<Text style={styles.compulsoryStar}>*</Text></Text>
                <TextInput
                    value={value} 
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    style={styles.inputValueContainer} />
            </View>
        )
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

                    <Text style={styles.cartText}>Add Delivery Address</Text>
                </View>

                <TouchableOpacity activeOpacity={1}>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.addAddress}>
                <Text>Save As:</Text>
                <FlatList
                    data={address}
                    horizontal
                    nestedScrollEnabled
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => userSelect(item.id)}
                            style={[styles.itemContainer, select == item.id && {backgroundColor: colors.blue}]}>
                            <Image
                                source={select == item.id ? item.image1 : item.image}
                                style={styles.image} />
                            <Text style={[styles.title,{color : select == item.id ? colors.white : colors.black2}]}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                    showsHorizontalScrollIndicator={false}
                />

                <InputContainer title="Name" keyboardType="default" value={name} onChangeText={(val) => setName(val)} />
                <InputContainer title="Number" keyboardType="number-pad" value={contactNumber} onChangeText={(val) => setContactNumber(val)} />
                <InputContainer title="Flat Number & Appartment" keyboardType="default" value={flat} onChangeText={(val) => setFlat(val)} />
                <InputContainer title="Address Line 1" keyboardType="default" value={addressOne} onChangeText={(val) => setAddressOne(val)} />
                <InputContainer title="Address Line 2" keyboardType="default" value={addressTwo} onChangeText={(val) => setAddressTwo(val)} />
                <InputContainer title="City" keyboardType="default" value={city} onChangeText={(val) => setCity(val)} />
                <InputContainer title="Pincode" keyboardType="number-pad" value={pincode} onChangeText={(val) => setPincode(val)} />
                <InputContainer title="State" keyboardType="default" value={state} onChangeText={(val) => setState(val)} />
                <InputContainer title="Country" keyboardType="default" value={country} onChangeText={(val) => setCountry(val)} />
            </ScrollView>

            <TouchableOpacity style={styles.bottomButtonView}>
                <Text style={styles.saveAddressText}>Save Address</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddAddress;