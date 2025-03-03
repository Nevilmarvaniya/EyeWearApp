import React from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar'
import styles from './styles'
import colors from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import { Images } from '../../utils/images'

const LandingPage1 = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CustomStatusbar
          backgroundColor={colors.white}
          barStyle="dark-content"
        />
      <View style={styles.frameView}>
        <View style={styles.headerTextView}>
          <Text style={styles.frameText}>Frame</Text>
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.frameText}>Accentuate</Text>
        </View>
        <View style={styles.headerTextView}>
        <Text style={styles.frameText}>Your Face</Text>
        </View>
      </View>
      <View style={styles.frameView}>
        <View style={styles.headerTextView1}>
          <Text style={styles.frameText1}>Explore a curated selection of</Text>
        </View>
        <View style={styles.headerTextView1}>
          <Text style={styles.frameText1}>trendy and classic frames from </Text>
        </View>
        <View style={styles.headerTextView1}>
          <Text style={styles.frameText1}>the comfort of your own home</Text>
        </View>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.replace("Login")} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>navigation.navigate("LandingPage2")} activeOpacity={1} style={styles.letsGoButton}>
          <Text style={styles.letsGoText}>Let's go</Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={Images.leading1Back}
        resizeMode="contain"
        style={styles.bottomImage}>
          <Image source={Images.leading1} style={styles.bottomImage1} />
        </ImageBackground>
    </View>
  )
}

export default LandingPage1