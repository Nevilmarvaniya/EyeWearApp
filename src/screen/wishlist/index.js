import {FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar'
import colors from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import { Images } from '../../utils/images'
import { recentViewData, WishlistData } from './data'

const WishlistScreen = () => {

    const navigation = useNavigation();
    const [selectedHeader, setSelectedHeader] = useState(0);

    const WishlistRender = ({item}) => {
        return (
            <View style={styles.wishlistdataView}>
                <View style={styles.headerbackView}>
                    <Image source={item.image} style={styles.wishlistImage} />
                    <View style={styles.wishlistDetailview}>
                        <Text style={styles.wishlistText}>{item.title}</Text>
                        <Text style={styles.wishlistPrice}>{item.price}</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image source={Images.wishlistDelete} style={styles.deleteIcon} />
                </TouchableOpacity>
            </View>
        )
    }

    const RecentViewRender = ({item}) => {
        return (
            <View style={styles.recentView}>
                <Image source={item.image} style={styles.recentViewImage} />
                <View style={styles.recentDetailsView}>
                    <View>
                        <Text style={styles.productName1}>{item.title}</Text>
                        <Text style={styles.productName2}>{item.description}</Text>
                    </View>
                    <View>
                        <View style={styles.ratingView}>
                            <Text style={styles.ratingText}>{item.rating}</Text>
                            <Image source={Images.whiteStar} style={styles.whiteStar} />
                        </View>
                        <Text style={styles.productName1}>{item.price}</Text>
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

                    <Text style={styles.cartText}>Wishlist</Text>
                </View>

                <View style={styles.headerbackView}>
                    <TouchableOpacity activeOpacity={1}>
                        <Image source={Images.wishlistSearch} style={styles.homeCallIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("ProductCart")}>
                        <Image source={Images.homeCall} style={styles.homeCallIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.selectHeaderView}>
                <TouchableOpacity 
                    activeOpacity={1} 
                    style={[styles.selectedHeaderView,{borderBottomColor: selectedHeader == 0 ? colors.blue : colors.gray3}]} 
                    onPress={() => setSelectedHeader(0)}>
                    <Text style={styles.selectedHeaderText}>Wishlist</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    activeOpacity={1} 
                    style={[styles.selectedHeaderView,{borderBottomColor: selectedHeader == 1 ? colors.blue : colors.gray3}]} 
                    onPress={() => setSelectedHeader(1)}>
                    <Text style={styles.selectedHeaderText}>Recently Viewed</Text>
                </TouchableOpacity>
            </View>

            <View>
                {
                    selectedHeader == 0 ? 
                        <View style={styles.wishlistView}>
                            <FlatList 
                                data={WishlistData}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={WishlistRender}
                                showsVerticalScrollIndicator={false}
                                style={styles.flatListStyle}
                            />
                        </View>
                        :
                        <View style={styles.wishlistView}>
                            <FlatList 
                                data={recentViewData}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={RecentViewRender}
                                showsVerticalScrollIndicator={false}
                                style={styles.flatListStyle}
                            />
                        </View>
                }
            </View>
        </View>
    )
}

export default WishlistScreen
