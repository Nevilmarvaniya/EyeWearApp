import React, { useState } from 'react'
import { Text, Modal, View, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Images } from '../../utils/images'

const LogoutModal = ({visible, onRequestClose, cancelPress, logoutPress}) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}>
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Image source={Images.shutDown} style={styles.logoutIcon} />
                    <Text style={styles.logoutText}>Logout</Text>
                    <Text style={styles.sureLogout}>Are you sure want to logout ?</Text>

                    <View style={styles.bottomButton}>
                        <TouchableOpacity activeOpacity={1} onPress={cancelPress} style={styles.cancelButton}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={1} onPress={logoutPress} style={styles.logoutButton}>
                            <Text style={styles.cancelText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default LogoutModal