import React from 'react'
import { Image, Text, TouchableOpacity, View, Modal, FlatList } from 'react-native'
import styles from './styles'
import colors from '../../utils/colors'
import { Images } from '../../utils/images'
import { filterMenu } from './data'

const FilterModal = ({closeButton, visible, data, RenderItem, children, resetFilter, applyFilter}) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={closeButton}>
                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <View style={styles.headerView}>
                            <Text style={styles.headerText}>Filters</Text>

                            <TouchableOpacity activeOpacity={1} onPress={closeButton} style={styles.closeView}>
                                <Image source={Images.redClose} style={styles.headerClose} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.filterMainView}>
                            <View style={styles.menuView}>
                                <FlatList
                                    data={data}
                                    keyExtractor={item => item.id}
                                    renderItem={RenderItem}
                                />
                            </View>
                            <View style={styles.menuDetails}>
                                {children}
                            </View>
                        </View>

                        <View style={styles.bottomFilterButton}>
                            <View style={styles.resetButtonView}>
                                <TouchableOpacity activeOpacity={1} onPress={resetFilter} style={styles.resetButtonView}>
                                    <Text>Reset</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.resetButtonView}>
                                <TouchableOpacity activeOpacity={1} onPress={applyFilter} style={styles.applyFilterButton}>
                                    <Text style={styles.applyFilterText}>Apply Filter</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
        </Modal>
    )
}

export default FilterModal