import { Text, Touchable, TouchableOpacity, View, Animated, PanResponder, Dimensions } from 'react-native';
import React, {useRef} from 'react';
import styles from './styles';
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar';
import colors from '../../utils/colors';
import { Image } from 'react-native-elements';
import { Images } from '../../utils/images';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('screen');

const WalletScreen = () => {

    const navigation = useNavigation();

    const translateY = useRef(new Animated.Value(height)).current;

    const openBottomSheet = () => {
        Animated.timing(translateY, {
            toValue: height * 0.4,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const closeBottomSheet = () => {
        Animated.timing(translateY, {
            toValue: height, // Move it back down
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, gestureState) => {
                return gestureState.dy > 5; // Detect downward swipe
            },
            onPanResponderMove: (_, gestureState) => {
                translateY.setValue(height * 0.4 + gestureState.dy);
            },
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dy > 50) {
                    closeBottomSheet();
                } else {
                    openBottomSheet();
                }
            },
        })
    ).current;

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

                    <Text style={styles.cartText}>Wallet</Text>
                </View>

                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("ProductCart")}>
                    <Image source={Images.homeCall} style={styles.homeCallIcon} />
                </TouchableOpacity>
            </View>

            <View style={styles.walletView}>
                <View style={styles.headerbackView}>
                    <Text style={styles.headerText1}>Eyewear{" "}</Text>
                    <Text style={styles.headerText2}>wallet</Text>
                </View>

                <View style={styles.balanceView}>
                    <Text style={styles.totalText}>Total Balance</Text>

                    <Text style={styles.balanceText}>₹0</Text>
                </View>

                <TouchableOpacity activeOpacity={1} onPress={openBottomSheet} style={styles.howUseView}>
                    <Text style={styles.howUseQue}>How to use wallet balance ?</Text>
                    <View style={styles.dottedBorder} />
                </TouchableOpacity>
            </View>

            <Animated.View
                style={[styles.bottomSheet, { transform: [{ translateY }] }]}
                {...panResponder.panHandlers}
            >
                <View style={styles.dragIndicator} />

                <Text style={styles.sheetText}>This is your wallet balance information.</Text>
            </Animated.View>
        </View>
    );
};

export default WalletScreen;