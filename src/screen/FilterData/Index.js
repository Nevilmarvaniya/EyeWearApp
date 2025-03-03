import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import colors from '../../utils/colors'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar'
import { Images } from '../../utils/images'
import { useNavigation } from '@react-navigation/native'

const FilterData = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <CustomStatusbar
                backgroundColor={colors.white}
                barStyle="dark-content"
            />
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Filters</Text>

                <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()} style={styles.closeView}>
                    <Image source={Images.redClose} style={styles.headerClose} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FilterData