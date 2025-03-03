import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar'
import colors from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native-elements'
import { Images } from '../../utils/images'
import styles from './styles'
import { addressData } from './data'

const MyAddressScreen = () => {

    const navigation = useNavigation();

    const AddressRender = ({item}) => {
        return (
            <View style={styles.saveAddressView}>
                <Text style={styles.blockNumberText}>{item.blackNumber}, {item.appartmentName}</Text>
                <Text style={styles.addressOneText}>{item.address1},</Text>
                <Text style={styles.addressOneText}>{item.address2},</Text>
                <Text style={styles.addressOneText}>{item.city}, {item.state}, {item.pincode}, {item.country}</Text>

                <View style={styles.userDetails}>
                    <View style={styles.userDetails}>
                        <Image source={Images.addressUser} style={styles.addressUserIcon} />
                        <Text style={styles.addressUserText}>{item.name}</Text>
                    </View>

                    <View style={styles.userDetails}>
                        <Image source={Images.addressCall} style={styles.addressUserIcon} />
                        <Text style={styles.addressUserText}>{item.number}</Text>
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.userDetails}>
                    <View style={styles.addressTypeView}>
                        <Image source={Images.blackHome} style={styles.addressTypeImage} />
                        <Text style={styles.addressTypeText}>{item.addressType}</Text>
                    </View>

                    <View style={styles.headerbackView}>
                        <TouchableOpacity activeOpacity={1} style={styles.deleteButtonView}>
                            <Text style={styles.deleteText}>Delete</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} style={styles.editButtonView}>
                            <Text style={styles.deleteText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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

                    <Text style={styles.cartText}>My addresses</Text>
                </View>

                <TouchableOpacity activeOpacity={1}>
                </TouchableOpacity>
            </View>

            <View style={styles.addAddressView}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("AddAddress")} style={styles.addAddressButton}>
                    <Text style={styles.addAddressText}>Add New Address</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.addressListView}>
                <Text style={styles.saveAddressText}>Save Addresses</Text>
            </View>

            <View style={styles.addressView}>
                <FlatList
                    data={addressData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={AddressRender}
                />
            </View>
        </View>
    )
}

export default MyAddressScreen