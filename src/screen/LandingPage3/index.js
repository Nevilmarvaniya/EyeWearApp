import React from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar'
import styles from './styles'
import colors from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import { Images } from '../../utils/images'

const LandingPage3 = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <CustomStatusbar
        backgroundColor={colors.white}
        barStyle="dark-content"
      />
      <View style={styles.frameView}>
        <View style={styles.headerTextView}>
          <Text style={styles.frameText}>Enjoy a</Text>
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.frameText}>hassle-free</Text>
        </View>
        <View style={styles.headerTextView}>
        <Text style={styles.frameText}>delivery</Text>
        </View>
      </View>
      <View style={styles.frameView}>
        <View style={styles.headerTextView1}>
          <Text style={styles.frameText1}>Effortless ordering process with a</Text>
        </View>
        <View style={styles.headerTextView1}>
          <Text style={styles.frameText1}>few taps on your phone. Virtual</Text>
        </View>
        <View style={styles.headerTextView1}>
          <Text style={styles.frameText1}>lens fitting ensures the perfect fit</Text>
        </View>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Login")} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate("Login")}
          style={styles.letsGoButton}>
          <Text style={styles.letsGoText}>Let's go</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={Images.leading1Back}
        resizeMode="contain"
        style={styles.bottomImage}>
          <Image source={Images.leading3} style={styles.bottomImage1} />
        </ImageBackground>
    </View>
  )
}

export default LandingPage3