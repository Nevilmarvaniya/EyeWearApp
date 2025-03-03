import React, { useState } from 'react'
import { Button, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import colors from '../../utils/colors'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar'
import { Images } from '../../utils/images'
import { useNavigation } from '@react-navigation/native'
import { Rating } from 'react-native-elements';
import ProgressBar from 'react-native-progress/Bar';
import { horizontalScale } from '../../utils/responsiveSize'
import { RatingData } from './data'

const ProductDetails = () => {

    const navigation = useNavigation();
    const [visibleData, setVisibleData] = useState(RatingData.slice(0, 2));
    const [showAll, setShowAll] = useState(false);

    const handleShowMore = () => {
        setVisibleData(RatingData);
        setShowAll(true);
    };

    const RenderView = ({item}) => {
        return (
            <View style={styles.ratingReview}>
                <View style={styles.locationView1}>
                    <View style={styles.locationView}>
                        <Image source={item.url} style={styles.previewProfileImage} />
                        <Text style={styles.reviewUserName}>{item.name}</Text>
                    </View>
                    <Rating
                        readonly
                        defaultRating={5}
                        startingValue={item.rating}
                        fractions={1}
                        imageSize={20}
                    />
                </View>

                <Text style={styles.ratingReviewDetails}>{item.details}</Text>
            </View>
        )
    }
  return (
    <View style={styles.container}>
        <CustomStatusbar
          backgroundColor={colors.white}
          barStyle="dark-content"
        />
        <ScrollView>
        <ImageBackground source={Images.jacobs1} style={styles.productImage}>
            <View style={styles.headerView}>
                <TouchableOpacity 
                    activeOpacity={1} 
                    onPress={() => navigation.goBack()}>
                        <Image source={Images.backIcon} style={styles.headerBack} />
                </TouchableOpacity>

                <View style={styles.headerSubView}>
                    <Image source={Images.shareIcon} style={styles.shareIcon} />
                    <Image source={Images.blackHeart} style={styles.blackHeart} />
                </View>
            </View>
        </ImageBackground>
        <View style={styles.detailsView}>
            <View style={styles.productView}>
                <View>
                    <Text style={styles.productName1}>Vision Vogue AIR</Text>
                </View>

                <View>
                    <View style={styles.ratingView}>
                        <Text style={styles.ratingText}>4.4</Text>
                        <Image source={Images.whiteStar} style={styles.whiteStar} />
                    </View>
                </View>
            </View>

            <View style={styles.productView}>
                <Text style={styles.productName2}>Black Transparent Full Rim Rectangle Frame</Text>
                <Text style={styles.productName1}>Rs. 3000</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.frameDeatilsView}>
                <View style={styles.detailsSubView}>
                    <Image source={Images.detailWidth} style={styles.detailWidthImage} />
                    <Text style={styles.detailText}>138 mm</Text>
                    <Text style={styles.detailText1}>Frame width</Text>
                </View>

                <View style={styles.detailsSubView}>
                    <Image source={Images.frameWeight} style={styles.detailWidthImage} />
                    <Text style={styles.detailText}>38 gm</Text>
                    <Text style={styles.detailText1}>Frame weight</Text>
                </View>

                <View style={styles.detailsSubView}>
                    <Image source={Images.frameWarrenty} style={styles.detailWidthImage} />
                    <Text style={styles.detailText}>1 year</Text>
                    <Text style={styles.detailText1}>Frame warrenty</Text>
                </View>

                <View style={styles.detailsSubView}>
                    <Image source={Images.frameReturn} style={styles.detailWidthImage} />
                    <Text style={styles.detailText}>14 days</Text>
                    <Text style={styles.detailText1}>Return Policy</Text>
                </View>

                <View style={styles.detailsSubView}>
                    <Image source={Images.frameSpecification} style={styles.detailWidthImage} />
                    <Text style={styles.detailText}>+10 more</Text>
                    <Text style={styles.detailText1}>Specification</Text>
                </View>
            </View>

            <View style={styles.divider1} />

            <View style={styles.storeView}>
                <Text style={styles.productName1}>Buy At Store</Text>

                <View style={styles.addressView}>
                    <Image source={Images.address} style={styles.addressImage} />

                    <View style={styles.address}>
                        <Text style={styles.addressName}>Rajajinagar 19th main road</Text>
                        <Text numberOfLines={3} style={styles.addressText1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    </View>
                </View>
            </View>

            <View style={styles.divider1} />

            <View style={styles.storeView}>
                <Text style={styles.productName1}>Delivery Options<Text style={styles.productName3}>{"  "}{"  "}2 Business Day</Text></Text>

                <View style={styles.addressView1}>
                    <View style={styles.locationView}>
                        <Image source={Images.locationBlue} style={styles.locationImage} />
                        <Text style={styles.locationCity}>Banglore - 560010</Text>
                    </View>
                    <TouchableOpacity activeOpacity={1}>
                        <Text style={styles.changeText}>CHANGE</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.divider1} />

            <View style={styles.storeView}>
                <Image source={Images.spectDetailsBen} style={styles.spectDetailImage} />

                <View style={styles.reviewView}>
                    <Text style={styles.addressName}>Rating & Review</Text>

                    <TouchableOpacity style={styles.writeReviewButton} activeOpacity={1}>
                        <Text style={styles.addressName}>Write Review</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.totalReviewView}>
                    <View>
                        <View style={styles.blueBox}>
                            <Text style={styles.reviewText1}>4.5</Text>
                            <Text style={styles.reviewText2}>Out Of 5</Text>
                        </View>
                        {/*  */}
                    </View>
                    <View style={styles.reviewView1}>
                        <View style={styles.locationView1}>
                            <Text style={styles.excellentText}>Excellent</Text>
                            <ProgressBar progress={0.8} width={horizontalScale(145)} height={5} />
                        </View>

                        <View style={styles.locationView1}>
                            <Text style={styles.excellentText}>Very Good</Text>
                            <ProgressBar progress={0.8} width={horizontalScale(145)} height={5} />
                        </View>

                        <View style={styles.locationView1}>
                            <Text style={styles.excellentText}>Average</Text>
                            <ProgressBar progress={0.8} width={horizontalScale(145)} height={5} />
                        </View>

                        <View style={styles.locationView1}>
                            <Text style={styles.excellentText}>Poor</Text>
                            <ProgressBar progress={0.8} width={horizontalScale(145)} height={5} />
                        </View>
                    </View>
                </View>
                <View style={styles.starRatingView}>
                    <Rating
                        readonly
                        defaultRating={5}
                        startingValue={4.5}
                        fractions={1}
                        imageSize={20}
                    />
                </View>

                <View style={styles.starRatingView}>
                    <FlatList 
                        data={visibleData}
                        keyExtractor={item => item.id}
                        renderItem={RenderView}
                        style={{width:'100%'}}
                    />
                {!showAll && (
                    <TouchableOpacity activeOpacity={1} style={styles.allReviewButton} onPress={handleShowMore}>
                        <Text style={styles.readReviewButton}>Read All Review</Text>
                    </TouchableOpacity>
                )}

            </View>
        </View>
        
        {/* <View style={styles.contactUs}>
            <Text style={styles.reviewText3}>Can we Help?</Text>

            <View style={{marginTop: horizontalScale(20)}}>
                <Text style={styles.reviewText3}>Contact us</Text>
                <Text style={styles.reviewText3}>8763547489</Text>
            </View>

            <View style={{marginTop: horizontalScale(20)}}>
                <Text style={styles.reviewText3}>Email</Text>
                <Text style={styles.reviewText3}>support@visionvogue.com</Text>
            </View>
        </View> */}

        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("ProductCart")} style={styles.cartButton}>
            <Text style={styles.addCartText}>Add to cart</Text>
        </TouchableOpacity>

        </View>
        </ScrollView>
    </View>
  )
}

export default ProductDetails