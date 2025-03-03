import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar';
import colors from '../../utils/colors';
import { Images } from '../../utils/images';
import { useNavigation } from '@react-navigation/native';
import MenExplore from './Mens';
import WomenExplore from './Women';
import KidsExplore from './Kids';

const Explore = () => {

  const navigation = useNavigation();
  const [id, setId] = useState(0)

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={colors.white}
        barStyle="dark-content"
      />

      <View style={styles.header}>
        <Text style={styles.greeting}>Explore</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("WishlistScreen")}>
            <Image source={Images.homeHeart} style={styles.homeCallIcon} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("ProductCart")}>
            <Image source={Images.homeCall} style={styles.homeCallIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.exploreMainView}>
        <TouchableOpacity activeOpacity={1} onPress={() => setId(0)} style={[styles.headerView, {borderColor: id == 0 ? colors.blue : colors.gray3}]}>
          <Text style={[styles.headerText, {color: id == 0 ? colors.blue : colors.gray2}]}>Men</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => setId(1)} style={[styles.headerView, {borderColor: id == 1 ? colors.blue : colors.gray3}]}>
          <Text style={[styles.headerText, {color: id == 1 ? colors.blue : colors.gray2}]}>Women</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => setId(2)} style={[styles.headerView, {borderColor: id == 2 ? colors.blue : colors.gray3}]}>
          <Text style={[styles.headerText, {color: id == 2 ? colors.blue : colors.gray2}]}>Kids</Text>
        </TouchableOpacity>
      </View>

      {
        id == 0 ?
          <MenExplore />
        : id == 1 ?
          <WomenExplore />
        :
          <KidsExplore />
      }
    </View>
  )
}

export default Explore;