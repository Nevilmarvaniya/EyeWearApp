import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar'
import colors from '../../utils/colors'
import { Images } from '../../utils/images'
import { useNavigation } from '@react-navigation/native'
import BilModal from '../../component/BilModal'
import { horizontalScale } from '../../utils/responsiveSize'

const PaymentScreen = () => {

    const navigation = useNavigation();
    const [bilModal, setBilModal] = useState(false);

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

                    <Text style={styles.cartText}>Payment Method</Text>
                </View>

                <TouchableOpacity activeOpacity={1} onPress={() => setBilModal(true)}>
                    <Text style={styles.bilText}>View Bill</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.paymentView}>
                <View>
                    <Text style={styles.headerText}>UPI</Text>
                    <View style={styles.googlePay}>
                        <View style={styles.headerbackView}>
                            <Image source={Images.googlePay} style={styles.googlePayIcon} />
                            <Text style={styles.gpayText}>Gpay</Text>
                        </View>

                        <View style={styles.selectedGpay} />
                    </View>

                    <View style={styles.upiView}>
                        <View style={styles.headerbackView}>
                            <Image source={Images.upiLogo} style={styles.upiIcon} />
                            <Text style={styles.upiText}>Add new UPI ID</Text>
                        </View>
                        <TouchableOpacity activeOpacity={1} style={styles.buttonView}>
                            <Image source={Images.downArrow} style={styles.downArrow} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.cardView}>
                    <Text style={styles.headerText}>Cards</Text>
                    <View style={styles.googlePay}>
                        <View style={styles.headerbackView}>
                            <Image source={Images.debitCard} style={styles.upiIcon} />
                            <Text style={styles.upiText}>Add Cards/Debit/ATM Cards</Text>
                        </View>
                        <TouchableOpacity activeOpacity={1} style={styles.buttonView}>
                            <Image source={Images.downArrow} style={styles.downArrow} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.cardView}>
                    <Text style={styles.headerText}>Net Banking</Text>

                    <View style={styles.bankingView}>
                        <View style={styles.bankDetailsView}>
                            <Image source={Images.hdfcbank} style={styles.bankicon} />
                            <Text style={styles.upiText}>HDFC Bank</Text>
                        </View>
                        <Image source={Images.dottedLine} style={styles.dottedImage} />
                        <View style={styles.bankDetailsView}>
                            <Image source={Images.sbiBank} style={styles.bankicon} />
                            <Text style={styles.upiText}>State Bank of India</Text>
                        </View>
                        <Image source={Images.dottedLine} style={styles.dottedImage} />
                        <View style={styles.bankDetailsView}>
                            <Image source={Images.icicibank} style={styles.bankicon} />
                            <Text style={styles.upiText}>ICICI Bank</Text>
                        </View>
                        <Image source={Images.dottedLine} style={styles.dottedImage} />
                        <View style={styles.otherBankView}>
                            <Text style={styles.upiText}>Other Banks</Text>
                            <Image source={Images.downArrow} style={[styles.downArrow,{marginStart: horizontalScale(10)}]} />
                        </View>
                    </View>

                    <TouchableOpacity activeOpacity={1} style={styles.cartButton}>
                        <Text style={styles.addCartText}>Pay Now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <BilModal 
                visible={bilModal} 
                total={'Rs 1700'}
                coupon={'- Rs 500'}
                TotalAmount={'Rs 1200'}
                fee={'Free'}
                onRequestClose={() => setBilModal(false)} 
                onPress={() => setBilModal(false)} />
        </View>
    )
}

export default PaymentScreen