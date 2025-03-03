import { Animated, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './styles'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar'
import colors from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import { Images } from '../../utils/images'
import { horizontalScale } from '../../utils/responsiveSize'

const FaqScreen = () => {

    const navigation = useNavigation();
    const [expandedSections, setExpandedSections] = useState({});

    const animations = {
        1: useRef(new Animated.Value(0)).current,
        2: useRef(new Animated.Value(0)).current,
        3: useRef(new Animated.Value(0)).current,
    };

    const [contentHeights, setContentHeights] = useState({});

    const toggleExpand = (index) => {
        const isExpanded = expandedSections[index] || false;

        Animated.timing(animations[index], {
            toValue: isExpanded ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
        }).start();

        setExpandedSections(prev => ({ ...prev, [index]: !isExpanded }));
    };

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

                    <Text style={styles.cartText}>FAQs</Text>
                </View>

                <TouchableOpacity activeOpacity={1}>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={styles.knowEyeWearView}>
                    <Text style={styles.headerTitle}>Know Your Eyewear</Text>

                    <TouchableOpacity activeOpacity={1} onPress={() => toggleExpand(1)} style={styles.rightFrameButton}>
                        <Text style={styles.titleText}>Right Frame & Lense</Text>

                        <Animated.View style={{
                            transform: [{
                                rotate: animations[1].interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '180deg']
                                })
                            }]
                        }}>
                            <Image source={Images.downArrow} style={styles.iconView} />
                        </Animated.View>
                    </TouchableOpacity>
                    <Animated.View style={[{
                        height: animations[1].interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, contentHeights[1] || 0]
                        })
                        }, styles.animationView]}>
                        <View style={styles.innerContent}
                            onLayout={(event) => {
                                const height = event.nativeEvent.layout.height;
                                setContentHeights(prev => ({ ...prev, 1: height }));
                            }}
                        >
                            <Text style={styles.detailsText}>
                                Size & Fit :{"\n"}
                                We offer glasses in five sizes: Extra-Narrow, Narrow, Medium, Wide, and Extra-Wide.{"\n"}
                                Most people (about 80-90%) find that a Medium size fits best.{"\n\n"}

                                Frame Components : {"\n"}
                                A great pair of glasses is made up of different parts working together.{"\n"}
                                Each part plays an important role in comfort, style, and durability.
                            </Text>
                            <Image source={Images.frameDetails} style={styles.frameDetailsImage} />
                        </View>
                    </Animated.View>

                    <TouchableOpacity activeOpacity={1} onPress={() => toggleExpand(2)} style={styles.rightFrameButton}>
                        <Text style={styles.titleText}>Types of lense</Text>

                        <Animated.View style={{
                            transform: [{
                                rotate: animations[2].interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '180deg']
                                })
                            }]
                        }}>
                            <Image source={Images.downArrow} style={styles.iconView} />
                        </Animated.View>
                    </TouchableOpacity>
                    <Animated.View style={[{
                        height: animations[2].interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, contentHeights[2] || 0]
                        }),
                        },styles.animationView]}>
                        <View style={styles.innerContent}
                            onLayout={(event) => {
                                const height = event.nativeEvent.layout.height;
                                setContentHeights(prev => ({ ...prev, 2: height }));
                            }}
                        >
                            <View style={styles.lenseDetails}>
                                <View style={styles.typeView}>
                                    <Text>Anti-Glare or Anti-Reflective</Text>
                                </View>

                                <View style={styles.featuresView}>
                                    <Text>
                                        - Also known as AR coating{"\n"}
                                        - Eliminates reflection & glare{"\n"}
                                        - Improves vision
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.divider} />

                            <View style={[styles.lenseDetails, {marginTop: horizontalScale(15)}]}>
                                <View style={styles.typeView}>
                                    <Text>UV Protection</Text>
                                </View>

                                <View style={styles.featuresView}>
                                    <Text>
                                        - Filters out 98% of UVA{"\n"}
                                        - Blocks all light rays{"\n"}
                                        - Protects your eyes
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </Animated.View>

                    <Text style={[styles.headerTitle,{marginVertical: horizontalScale(15)}]}>Questions</Text>

                    <TouchableOpacity activeOpacity={1} onPress={() => toggleExpand(3)} style={styles.rightFrameButton}>
                        <Text style={styles.titleText}>What if the glasses or lenses I bought aren’t right for me? Can I exchange or return my order?</Text>

                        <Animated.View style={{
                            transform: [{
                                rotate: animations[3].interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '180deg']
                                })
                            }]
                        }}>
                            <Image source={Images.downArrow} style={styles.iconView} />
                        </Animated.View>
                    </TouchableOpacity>
                    <Animated.View style={[{
                        height: animations[3].interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, contentHeights[3] || 0]
                        }),
                        },styles.animationView]}>
                        <View style={styles.innerContent}
                            onLayout={(event) => {
                                const height = event.nativeEvent.layout.height;
                                setContentHeights(prev => ({ ...prev, 3: height }));
                            }}
                        >
                            <Text>We are committed to providing you with high-quality eyewear at your convenience. If you’re worried about the fit of the frames you bought online, here’s what you can do: You can collect them from the nearest eye wear store & ask the store staff to fix any fit/alignment issues. Our team will be happy to make any adjustments then & there.{"\n\n"}
                                In the rare event that you do not like a product, you can request a refund/exchange directly from your eye wear app. You can schedule a free pick-up, ship the order back to us or drop it at your nearest eye wear store. We have a “no questions asked” return policy within 14 days of you receiving the order.</Text>
                        </View>
                    </Animated.View>
                </View>
            </ScrollView>
        </View>
    )
}

export default FaqScreen