import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles';
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar';
import colors from '../../utils/colors';
import { Images } from '../../utils/images';
import { CeleImage, ComGlass, EyeGlass, HomeVision, PremiumWear, SunGlass } from './data';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();

  const seeAll = (name) => {
    navigation.navigate("ProductList",{data: name});
  }

  return (
    <View style={styles.container}>
        <CustomStatusbar
          backgroundColor={colors.white}
          barStyle="dark-content"
        />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainerStyle}>

          <View style={styles.header}>
              <Text style={styles.greeting}>Hello John</Text>
              <View style={styles.headerIcons}>
                <TouchableOpacity>
                  <Image source={Images.homeCart} style={styles.homeCallIcon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("WishlistScreen")}>
                  <Image source={Images.homeHeart} style={styles.homeCallIcon} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("ProductCart")}>
                  <Image source={Images.homeCall} style={styles.homeCallIcon} />
                </TouchableOpacity>
              </View>
          </View>

          <View style={styles.searchContainer}>
            <Text style={styles.title}>Explore the best range of glasses!</Text>
            <View style={styles.searchSection}>
               <Image source={Images.homeSearch} style={styles.homeCallIcon} />
              <TextInput
                style={styles.searchInput}
              />
              <View style={styles.scanView}>
                <Image source={Images.homeScan} style={styles.homeCallIcon} />
              </View>
              <View style={styles.scanView}>
                <Image source={Images.homeCamera} style={styles.homeCallIcon} />
              </View>
            </View>
          </View>

          <View style={styles.buyView}>
            <View style={styles.subBuyView}>
              <Image source={Images.homeCalender} style={styles.buyIcon} />
              <View style={{paddingHorizontal:10}}>
                <Text style={styles.buyText}>Buy at</Text>
                <Text style={styles.buyText1}>Store</Text>
              </View>
            </View>
            <View style={styles.subBuyView}>
              <Image source={Images.home} style={styles.buyIcon} />
              <View style={{paddingHorizontal:10}}>
                <Text style={styles.buyText}>Buy at</Text>
                <Text style={styles.buyText1}>Home</Text>
              </View>
            </View>
            <View style={styles.subBuyView}>
              <Image source={Images.homeChat} style={styles.buyIcon} />
              <View style={{paddingHorizontal:10}}>
                <Text style={styles.buyText}>Buy at</Text>
                <Text style={styles.buyText1}>Chat</Text>
              </View>
            </View>
          </View>

          <View style={styles.eyeGlassContainer}>
            <View style={styles.headerSubView}>
              <Text style={styles.title}>Eye Glasses</Text>
              <Text onPress={() => seeAll("Eye Glass")} style={styles.seeAllText}>See all</Text>
            </View>

            <FlatList 
              data={EyeGlass} 
              keyExtractor={(item, index) => index.toString()}
              nestedScrollEnabled
              horizontal 
              renderItem={({item}) => (
                <View style={styles.eyeGlassView}>
                  <View style={styles.eyeGlassImage}>
                    <Image source={item.image} style={styles.eyeGlassImage1} />
                  </View>
                  <Text style={styles.eyeGlassText}>{item.title}</Text>
                </View>
              )} />
          </View>

          <View style={styles.eyeGlassContainer}>
            <View style={styles.headerSubView}>
              <Text style={styles.title}>Sun Glasses</Text>
              <Text onPress={() => seeAll("Sun Glasses")} style={styles.seeAllText}>See all</Text>
            </View>

            <FlatList 
              data={SunGlass} 
              keyExtractor={(item, index) => index.toString()} 
              horizontal
              nestedScrollEnabled
              renderItem={({item}) => (
                <View style={styles.eyeGlassView}>
                  <View style={styles.eyeGlassImage}>
                    <Image source={item.image} style={styles.eyeGlassImage1} />
                  </View>
                  <Text style={styles.eyeGlassText}>{item.title}</Text>
                </View>
              )} />
          </View>

          <View style={styles.eyeGlassContainer}>
            <Text style={styles.title}>Computer Glasses</Text>

            <FlatList
              data={ComGlass}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              nestedScrollEnabled
              renderItem={({item}) => (
                <View style={styles.eyeGlassView}>
                  <View style={styles.eyeGlassImage}>
                    <Image source={item.image} style={styles.eyeGlassImage1} />
                  </View>
                  <Text style={styles.eyeGlassText}>{item.title}</Text>
                </View>
              )} />
          </View>

          <View style={styles.homeBannerView}>
              <Image source={Images.homeBanner} style={styles.homeBannerImage} />
          </View>

          <View style={styles.eyeGlassContainer}>
            <View style={styles.headerSubView}>
              <Text style={styles.title}>Lens</Text>
              <Text onPress={() =>seeAll("Lens")} style={styles.seeAllText}>See all</Text>
            </View>

            <FlatList
              data={EyeGlass}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              nestedScrollEnabled
              renderItem={({item}) => (
                <View style={styles.eyeGlassView}>
                  <View style={styles.eyeGlassImage}>
                    <Image source={item.image} style={styles.eyeGlassImage1} />
                  </View>
                  <Text style={styles.eyeGlassText}>{item.title}</Text>
                </View>
              )} />
          </View>

          <View style={styles.eyeGlassContainer}>
            <Text style={styles.title}>Vision Vogue Special</Text>
            <FlatList
              data={HomeVision}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              nestedScrollEnabled
              columnWrapperStyle={styles.columnWrapper}
              renderItem={({item}) => (
                <View style={styles.homeVisionView}>
                  <Image source={item.image} style={styles.homeVisionImage} />
                </View>
              )}
            />
          </View>

          <View style={styles.eyeGlassContainer}>
            <Text style={styles.title}>As seen on celebrities</Text>
            <FlatList
              data={CeleImage}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              nestedScrollEnabled
              renderItem={({item}) => (
                <View style={styles.celeView}>
                  <View style={styles.celeImage}>
                    <Image source={item.image} style={styles.celeImage1} />
                  </View>
                </View>
              )} />
          </View>

          <View style={styles.eyeGlassContainer}>
            <Text style={styles.title}>Premium Eyewear</Text>
            <FlatList 
              data={PremiumWear}
              nestedScrollEnabled
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={styles.PremiumWearView}>
                  <Image source={item.image} style={styles.PremiumImage} />

                  <View style={styles.preTitle}>
                    <Text style={styles.preTitle1}>{item.title}</Text>
                    <Text style={styles.preTitle1}>{item.title1}</Text>
                  </View>
                </View>
              )} 
            />
          </View>

          <View style={styles.eyeGlassContainer}>
            <Text style={styles.title}>Holiday Specials</Text>
            <Image source={Images.homeHoliday} style={styles.homeHolidayImage} />
          </View>

          <View style={styles.eyeGlassContainer}>
            <Text style={styles.title1}>Vision Vogue Home Services</Text>
            <Text style={styles.title2}>Free eye test and frame to try-on</Text>

            <View style={styles.visionImageView}>
              <View style={styles.homeBottomImage}>
                <View style={styles.homeView1}>
                  <Text style={styles.bringStore}>Bringing The</Text>
                  <Text style={styles.bringStore}>Store To Your</Text>
                  <Text style={styles.bringStore}>Door</Text>
                </View>
                <View style={styles.homeView2}>
                  <TouchableOpacity style={styles.homeBookNow}>
                    <Text style={styles.bookNowText}>Book Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.homeBottomImage}>
                <Image source={Images.eyeTest} style={styles.eyeTextImage}/>
              </View>
            </View>
          </View>
        </ScrollView>
    </View>
  )
}

export default Home;