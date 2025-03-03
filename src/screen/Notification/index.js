import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar'
import colors from '../../utils/colors'
import { Images } from '../../utils/images'
import { Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { notificationData } from './data'

const Notification = () => {

    const navigation = useNavigation();

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

                    <Text style={styles.cartText}>Notification</Text>
                </View>

                <TouchableOpacity activeOpacity={1}>
                </TouchableOpacity>
            </View>

            <FlatList 
                data={notificationData}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View style={styles.notificationView}>
                        <View style={styles.colorView} />
                        <View style={styles.notificationDetails}>
                            <Text style={styles.notificationTitle}>{item.title}</Text>
                            <Text style={styles.notificationDescription}>{item.description}</Text>
                        </View>
                        <View style={styles.newView}>
                            <Text style={styles.newText}>NEW</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default Notification

// import React, { useEffect, useRef, useState } from 'react';
// import { View, FlatList, Image, Text, StyleSheet, Dimensions } from 'react-native';
// import { eyeGlass } from '../productList/data';

// const { width } = Dimensions.get('window');

// const AutoScrollHorizontalList = () => {
//   const flatListRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//         autoScrollToNextItem();
//     }, 10000); // 30 seconds interval

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const autoScrollToNextItem = () => {
//     const nextIndex = (currentIndex + 1) % eyeGlass.length;
//     setCurrentIndex(nextIndex);
//     flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
//   };

//   const handleScrollEnd = (event) => {
//     const offsetX = event.nativeEvent.contentOffset.x;
//     const newIndex = Math.round(offsetX / (width * 0.8 + 20)); // account for item width + margin
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <FlatList
//       ref={flatListRef}
//       data={eyeGlass}
//       keyExtractor={(item) => item.id.toString()}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       renderItem={({ item }) => (
//         <View style={styles.card}>
//           <Image source={item.image} style={styles.image} />
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.price}>Price: {item.price}</Text>
//           <Text style={styles.finalPrice}>Discounted: {item.finalPrice}</Text>
//         </View>
//       )}
//       onScrollToIndexFailed={(error) => {
//         flatListRef.current.scrollToIndex({ index: error.index, animated: true });
//       }}
//       onMomentumScrollEnd={handleScrollEnd}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     width: width * 0.8,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 10,
//     padding: 10,
//     marginHorizontal: 10,
//     alignItems: 'center',
//   },
//   image: {
//     width: 150,
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   price: {
//     fontSize: 14,
//     color: 'red',
//   },
//   finalPrice: {
//     fontSize: 14,
//     color: 'green',
//   },
// });

// export default AutoScrollHorizontalList;
