import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import colors from '../../utils/colors';
import { Images } from '../../utils/images';
import { FlatList } from 'react-native';
import { cartData } from './data';

const ProductCart = () => {

    const navigation = useNavigation();
    const [data, setData] = useState(cartData)
    const [couponValue, setCouponValue] = useState(700)

    const removeItem = (id) => {
        let filterData = cartData.filter((item) => item.id !== id);
        setData(filterData);
    }

    const RenderItem = ({item}) => {
        return (
            <View style={styles.cartItemView}>
                <View style={styles.headerbackView}>
                    <Image source={item.image} style={styles.productImage} />
                    <View style={styles.productDetailsView}>
                        <Text style={styles.productName1}>{item.title}</Text>
                        <Text style={styles.productName}>{item.finalPrice}</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => removeItem(item.id)} activeOpacity={1}>
                    <Image source={Images.redClose} style={styles.closeIcon} />
                </TouchableOpacity>
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

                    <Text style={styles.cartText}>Cart</Text>
                </View>

                <TouchableOpacity>
                  <Image source={Images.homeCall} style={styles.homeCallIcon} />
                </TouchableOpacity>
            </View>

            <ScrollView>

            <Text style={styles.productCartLengthData}>{data?.length} Item(s)</Text>

            <View>
                <FlatList 
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    nestedScrollEnabled
                    renderItem={RenderItem}
                />
            </View>

            <Text style={styles.productCartLengthData}>Coupons & Offers</Text>

            <View style={styles.couponView}>
                <View style={styles.couponSubView}>
                    <Text style={styles.couponApplyText}>You Saved Rs {couponValue}</Text>
                    <TouchableOpacity onPress={() => setCouponValue(0)} activeOpacity={1}>
                        <Image source={Images.redClose} style={styles.closeIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.appliedView}>
                    <View style={styles.rightView}>
                        <Image source={Images.whiteRight} style={styles.closeIcon} />
                    </View>

                    <Text style={styles.appliedCouponText}>Applied coupon</Text>
                </View>

                <View style={styles.lineView}>
                    <Image source={Images.dottedLine} style={styles.dottedImage} />
                </View>

                <TouchableOpacity activeOpacity={1}>
                    <Text style={styles.viewAllCouponText}>View all Coupons</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.productCartLengthData}>Bill Details</Text>

            <View style={styles.couponView}>
                <View style={styles.couponSubView}>
                    <Text style={styles.couponApplyText}>Items Total</Text>
                    <Text style={styles.couponApplyText}>Rs 1700</Text>
                </View>

                <View style={styles.couponSubView1}>
                    <Text style={styles.couponApplyText}>Coupon</Text>
                    <Text style={styles.couponApplyText}>- Rs 700</Text>
                </View>

                <View style={styles.couponSubView}>
                    <Text style={styles.couponApplyText}>Convience fee</Text>
                    <Text style={styles.couponApplyText}>Free</Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.couponSubView2}>
                    <Text style={styles.couponApplyText1}>Total Amount</Text>
                    <Text style={styles.couponApplyText1}>Rs 1200</Text>
                </View>
            </View>

            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("CheckOutPage")} style={styles.cartButton}>
                <Text style={styles.addCartText}>Pay Rs 1200</Text>
            </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

export default ProductCart