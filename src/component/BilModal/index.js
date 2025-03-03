import React from 'react'
import { Modal, View, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import { Text } from 'react-native-elements'
import { Images } from '../../utils/images'

const BilModal = ({onRequestClose, visible, children, onPress, total, coupon, fee, TotalAmount}) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}>
                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <View style={styles.headerView}>
                            <Text style={styles.bilTextHeader}>Bill Details</Text>

                            <TouchableOpacity onPress={onPress} activeOpacity={1}>
                                <Image source={Images.redClose} style={styles.closeIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bilDetailsview}>
                            <View style={styles.subDetailsView}>
                                <Text style={styles.totalText}>Items Total</Text>
                                <Text style={styles.totalText}>{total}</Text>
                            </View>

                            <View style={styles.subDetailsView}>
                                <Text style={styles.totalText}>Coupon</Text>
                                <Text style={styles.totalText}>{coupon}</Text>
                            </View>

                            <View style={styles.subDetailsView}>
                                <Text style={styles.totalText}>Convience fee</Text>
                                <Text style={styles.totalText}>{fee}</Text>
                            </View>

                            <View style={styles.lineView}>
                                <Image source={Images.dottedLine} style={styles.dottedImage} />
                            </View>

                            <View style={styles.subDetailsView}>
                                <Text style={styles.totalAmountText}>Total Amount</Text>
                                <Text style={styles.totalAmountText}>{TotalAmount}</Text>
                            </View>
                        </View>
                    </View>
                </View>
        </Modal>
    )
}

export default BilModal;