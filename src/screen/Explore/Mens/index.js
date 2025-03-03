import { Text, View, FlatList, Image, TouchableOpacity, ScrollView, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import { exploreData, newDataTitle, trendyData } from '../data'
import colors from '../../../utils/colors'
import { Images } from '../../../utils/images'
import { HomeVision } from '../../Home/data'
import { horizontalScale } from '../../../utils/responsiveSize'


const ITEM_WIDTH = horizontalScale(320);

const MenExplore = () => {

  const [id, setId] = useState(0);
  const [newDataId, setNewDataId] = useState(0);
  const flatListRef = useRef(null);
  const imageListRef = useRef(null);
  const animatedValue = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    const interval = setInterval(() => {
      setNewDataId((prevId) => {
        let nextIndex = (prevId + 1) % newDataTitle.length;

        // Smoothly animate the color transition
        Animated.timing(animatedValue, {
          toValue: nextIndex,
          duration: 500, // Smooth transition duration
          useNativeDriver: false,
        }).start();

        // Scroll to new index
        imageListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });

        return nextIndex;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [newDataTitle]);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / ITEM_WIDTH);
    setNewDataId(index);
    flatListRef.current?.scrollToIndex({ index, animated: true });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        <FlatList 
          data={exploreData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => ( 
            <TouchableOpacity 
              activeOpacity={1} 
              onPress={() => setId(index)} 
              style={[
                styles.headerScroll, 
                  { borderColor: id === index ? colors.blue : colors.gray4, backgroundColor: id == index ? colors.blue : colors.white }
                ]}
            > 
                    <View style={styles.imageContainer}>
                      <Image source={item.image} style={styles.imageIcon} />
                    </View>
                    <Text style={[
                      styles.title, 
                      { color: id === index ? colors.white : colors.black2 }
                    ]}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}>
        <Image source={Images.exploreImage} style={styles.mainImage} />

        <View style={styles.exploreDetails}>
          <View style={styles.headerView}>
            <Text style={styles.shopText}>Shop by Look</Text>
            <Text style={styles.shopText1}>Eyeglasses for every aesthetic</Text>
          </View>
          
          <View style={styles.headerView1}>
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

          <View style={styles.headerView}>
            <Text style={styles.shopText}>Trending frame shapes🔥</Text>
            <Text style={styles.shopText1}>Discover the hottest eyewear styles</Text>
          </View>
          
          <View>
            <FlatList 
              data={trendyData}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              nestedScrollEnabled
              columnWrapperStyle={styles.columnWrapper}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                  <View style={styles.trendydataView}>
                    <Image source={item.image} style={styles.image1} />
                    <View style={styles.titleView}>
                      <Text style={styles.titleText}>{item.title}</Text>
                    </View>
                  </View>
              )}
            />
          </View>

          <View style={styles.headerView2}>
            <Text style={styles.shopText}>New at eyewear</Text>
            <Text style={styles.shopText1}>Fresh collection by eyewears</Text>
          </View>

          <View style={styles.newDataView}>
            <View style={styles.headerNewDataView}>
            <FlatList 
              data={newDataTitle}
              ref={flatListRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item, index }) => {
                const isActive = newDataId === index; 
                const backgroundColor = animatedValue.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [colors.white, colors.blue, colors.white],
                  extrapolate: 'clamp',
                });

                const textColor = animatedValue.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [colors.black2, colors.white, colors.black2],
                  extrapolate: 'clamp',
                });

                return (
                  <Animated.View
                    style={[
                      styles.headerScroll1,
                      {
                        borderColor: isActive ? colors.blue : colors.gray4,
                        backgroundColor: backgroundColor,
                      },
                    ]}
                  >
                    <TouchableOpacity
                      activeOpacity={1} 
                      onPress={() => {
                        setNewDataId(index);
                        imageListRef.current?.scrollToIndex({ index, animated: true });
                        flatListRef.current?.scrollToIndex({ index, animated: true });

                        // Trigger smooth animation when manually selected
                        Animated.timing(animatedValue, {
                          toValue: index,
                          duration: 500,
                          useNativeDriver: false,
                        }).start();
                      }}
                    >
                      <Animated.Text style={[styles.title, { color: textColor }]}>
                        {item.title}
                      </Animated.Text>
                    </TouchableOpacity>
                  </Animated.View>
                );
              }}
            />
            </View>

            <FlatList
              ref={imageListRef}
              data={newDataTitle}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              onScroll={handleScroll}
              scrollEventThrottle={16}
              renderItem={({ item, index }) => (
                <View style={styles.imageContainer1}>
                  <Image source={item.image} style={styles.image} />
                </View>
              )}
            />
          </View>

          <View style={styles.bottomView}>
            <Text style={styles.shopText2}>Eyewear Fact</Text>
            <View style={styles.blackDivider} />
            <View style={styles.zeroView}>
              <Text style={styles.zeroOne}>01</Text>
            </View>

            <View style={styles.zeroView}>
              <Text style={styles.bottomText}>Opticians suggest wearing eyeglasses when{"\n"} you have power prevents the power from{"\n"} increasing</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  )
}

export default MenExplore
