import {Dimensions, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar';
import colors from '../../utils/colors';
import styles from './styles';
import { Image } from 'react-native-elements';
import { Images } from '../../utils/images';
import { useNavigation } from '@react-navigation/native';
import { offerData, orderData } from './data';
import { horizontalScale } from '../../utils/responsiveSize';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.90;
const ITEM_MARGIN = 10;

const Order = () => {

  const navigation = useNavigation();
  const [search, setSearch] = useState('');

    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
          autoScrollToNextItem();
      }, 5000);

      return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);

      const autoScrollToNextItem = () => {
        const nextIndex = (currentIndex + 1) % offerData.length;
        setCurrentIndex(nextIndex);
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      };

      const handleScrollEnd = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const newIndex = Math.round(offsetX / (ITEM_WIDTH + ITEM_MARGIN));
        setCurrentIndex(newIndex);
      };

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={colors.white}
        barStyle="dark-content"
      />
      <View style={styles.headerView}>
        <View style={styles.headerbackView}>
          <Text style={styles.cartText}>Order</Text>
        </View>

        <TouchableOpacity activeOpacity={1}>
        </TouchableOpacity>
      </View>

      <View style={styles.orderFilter}>
        <View style={styles.searchView}>
          <Image source={Images.homeSearch} style={styles.searchIcon} />
          <TextInput
            value={search}
            onChange={val => setSearch(val)}
            placeholder='Search order'
            placeholderTextColor={colors.black2}
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity activeOpacity={1} onPress={() => setIsFilterVisible(!isFilterVisible)} style={styles.filterView}>
          <Image source={Images.orderFilter} style={styles.filterIcon} />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {isFilterVisible && (
        <View style={styles.dropdown}>
          <TouchableOpacity style={styles.dropdownItem} onPress={() => console.log("Filter: Newest")}>
            <Text style={styles.dropdownText}>Delivered</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem} onPress={() => console.log("Filter: Oldest")}>
            <Text style={styles.dropdownText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem} onPress={() => console.log("Filter: Pending")}>
            <Text style={styles.dropdownText}>Pending</Text>
          </TouchableOpacity>
        </View>
      )}
      
      <View>
        <FlatList
          ref={flatListRef}
          data={offerData}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
            </View>
          )}
          onScrollToIndexFailed={(error) => {
            flatListRef.current.scrollToIndex({ index: error.index, animated: true });
          }}
          onMomentumScrollEnd={handleScrollEnd}
        />
      </View>

      <View style={styles.dotsContainer}>
        {offerData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === currentIndex ? colors.blue: colors.gray3 }
            ]}
          />
        ))}
      </View>

      <View style={{flex:1, marginTop: horizontalScale(10), marginBottom: horizontalScale(20)}}>
        <FlatList 
          data={orderData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.orderDetailsView}>
              <View style={styles.orderStatus}>
                <View>
                  <Image source={item.delivered == "Delivered" ? Images.orderDeliver : item.delivered == "Cancelled" ? Images.orderCancel : Images.orderPending} style={styles.orderIcon} />
                </View>
                <View style={styles.orderDetails}>
                  <Text style={[styles.deliverStatus,{color: item.delivered == "Delivered" ? colors.green : item.delivered == "Cancelled" ? colors.red : colors.black2}]}>{item.delivered}</Text>
                  <Text style={styles.orderDate}>{item.date}</Text>
                </View>
              </View>

              <View style={styles.orderDetailsData}>
                <View>
                  <Image source={item.image} style={styles.orderImage} />
                </View>

                <View style={styles.detailsView}>
                  <Text style={[styles.deliverStatus,{color:colors.black2}]}>{item.brand}</Text>
                  <Text style={styles.orderDate}>{item.type}</Text>
                  <Text style={styles.orderDate}>{item.price}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  )
}

export default Order;