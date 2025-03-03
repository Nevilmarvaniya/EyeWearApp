import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import CustomStatusbar from '../../component/CustomStatusbar/CustomStatusbar'
import colors from '../../utils/colors'
import { Images } from '../../utils/images'
import { useNavigation } from '@react-navigation/native'
import LogoutModal from '../../component/LogoutModal/Index'

const Profile = () => {

    const navigation = useNavigation();
    const [logoutModal, setLogoutModal] = useState(false)

    return (
        <View style={styles.container}>
            <CustomStatusbar
                backgroundColor={colors.white}
                barStyle="dark-content"
            />
            <View style={styles.headerView}>
                <Text style={styles.cartText}>Profile</Text>
            </View>

            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.mainView}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("EditProfile")} style={styles.profileDetails}>
                  <View>
                    <Image source={Images.profile} style={styles.profileImage} />
                  </View>

                  <View style={styles.profileDetailsView}>
                    <Text style={styles.profileName}>Vaishnavi vr</Text>
                    <Text>9732456789</Text>
                  </View>
                </TouchableOpacity>

                <View style={styles.subMenuView}>
                  <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Order")} style={styles.orderView}>
                    <Image source={Images.orderBox} style={styles.orderBox} />
                    <Text style={styles.orderText}>Order</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("WishlistScreen")} style={styles.orderView}>
                    <Image source={Images.heartOutline} style={styles.orderBox} />
                    <Text style={styles.orderText}>Wishlist</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("WalletScreen")} style={styles.orderView}>
                    <Image source={Images.wallet} style={styles.orderBox} />
                    <Text style={styles.orderText}>Wallet</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.myEyesView}>
                  <View style={styles.myEyesHeader}>
                    <Text style={styles.myEyesHeaderText}>My Eyes</Text>
                  </View>

                  <View style={styles.myEyesHeaderSubView}>
                    <Text style={styles.myEyesHeaderSubViewText}>My saved Power</Text>
                    <Image source={Images.rightArrow} style={styles.rightArrowIcon} />
                  </View>
                  <View style={styles.myEyesHeaderSubView}>
                    <Text style={styles.myEyesHeaderSubViewText}>My frame size</Text>
                    <Image source={Images.rightArrow} style={styles.rightArrowIcon} />
                  </View>
                  <View style={styles.myEyesHeaderSubView}>
                    <Text style={styles.myEyesHeaderSubViewText}>AR try-on 1000+ frames</Text>
                    <Image source={Images.rightArrow} style={styles.rightArrowIcon} />
                  </View>
                  <View style={styles.myEyesHeaderSubView}>
                    <Text style={styles.myEyesHeaderSubViewText}>My saved 3D models</Text>
                    <Image source={Images.rightArrow} style={styles.rightArrowIcon} />
                  </View>
                </View>

                <View style={styles.myEyesView}>
                  <View style={styles.myEyesHeader}>
                    <Text style={styles.myEyesHeaderText}>My Settings</Text>
                  </View>

                  <View style={styles.myEyesHeaderSubView}>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("MyAddressScreen")} style={styles.settingSubView}>
                      <Image source={Images.settingHome} style={styles.settingMenuIcon} />
                      <Text style={styles.settingTextView}>My address</Text>
                    </TouchableOpacity>
                    <Image source={Images.rightArrow} style={styles.rightArrowIcon} />
                  </View>

                  <View style={styles.myEyesHeaderSubView}>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Notification")} style={styles.settingSubView}>
                      <Image source={Images.settingNotification} style={styles.settingMenuIcon} />
                      <Text style={styles.settingTextView}>My notifications</Text>
                    </TouchableOpacity>
                    <Image source={Images.rightArrow} style={styles.rightArrowIcon} />
                  </View>

                  <View style={styles.myEyesHeaderSubView}>
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("FaqScreen")} style={styles.settingSubView}>
                      <Image source={Images.settingFaq} style={styles.settingMenuIcon} />
                      <Text style={styles.settingTextView}>FAQ</Text>
                    </TouchableOpacity>
                    <Image source={Images.rightArrow} style={styles.rightArrowIcon} />
                  </View>

                  <View style={styles.myEyesHeaderSubView}>
                    <View style={styles.settingSubView}>
                      <Image source={Images.settingAbout} style={styles.settingMenuIcon} />
                      <Text style={styles.settingTextView}>About us</Text>
                    </View>
                    <Image source={Images.rightArrow} style={styles.rightArrowIcon} />
                  </View>

                  <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("HelpScreen")} style={styles.myEyesHeaderSubView}>
                    <View style={styles.settingSubView}>
                      <Image source={Images.settingHelp} style={styles.settingMenuIcon} />
                      <Text style={styles.settingTextView}>Help</Text>
                    </View>
                    <Image source={Images.rightArrow} style={styles.rightArrowIcon} />
                  </TouchableOpacity>
                  
                  <TouchableOpacity activeOpacity={1} onPress={() => setLogoutModal(true)} style={styles.myEyesHeaderSubView}>
                    <View style={styles.settingSubView}>
                      <Image source={Images.settingLogout} style={styles.settingMenuIcon} />
                      <Text style={styles.settingTextView}>Logout</Text>
                    </View>
                    <Image source={Images.rightArrow} style={styles.rightArrowIcon} />
                  </TouchableOpacity>
                </View>
            </ScrollView>

            <LogoutModal 
              visible={logoutModal} 
              onRequestClose={() => setLogoutModal(false)} 
              logoutPress={() =>{
                navigation.replace("Login");
                setLogoutModal(false)}}
              cancelPress={() => setLogoutModal(false)}
              />
        </View>
    )
}

export default Profile