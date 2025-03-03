import React from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar'
import styles from './styles'
import colors from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import { Images } from '../../utils/images'

const LandingPage2 = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <CustomStatusbar
        backgroundColor={colors.white}
        barStyle="dark-content"
      />
      <View style={styles.frameView}>
        <View style={styles.headerTextView}>
          <Text style={styles.frameText}>Define your</Text>
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.frameText}>look and your</Text>
        </View>
        <View style={styles.headerTextView}>
        <Text style={styles.frameText}>vission</Text>
        </View>
      </View>
      <View style={styles.frameView}>
        <View style={styles.headerTextView1}>
          <Text style={styles.frameText1}>Explore a curated collection of</Text>
        </View>
        <View style={styles.headerTextView1}>
          <Text style={styles.frameText1}>frame from timeless classics to</Text>
        </View>
        <View style={styles.headerTextView1}>
          <Text style={styles.frameText1}>bold statement pieces</Text>
        </View>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.replace("Login")} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>navigation.navigate("LandingPage3")} activeOpacity={1} style={styles.letsGoButton}>
          <Text style={styles.letsGoText}>Let's go</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={Images.leading1Back}
        resizeMode="contain"
        style={styles.bottomImage}>
          <Image source={Images.leading2} style={styles.bottomImage1} />
        </ImageBackground>
    </View>
  )
}

export default LandingPage2