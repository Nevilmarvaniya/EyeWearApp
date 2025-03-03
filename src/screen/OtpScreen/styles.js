import { Dimensions, StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../utils/responsiveSize";
import colors from "../../utils/colors";
import { Fonts } from "../../assets/Fonts";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white
    },
    imageBackground:{
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },
    subContainer:{
        flexGrow: 1
    },
    loginImageView:{
        marginVertical: horizontalScale(25),
        height: horizontalScale(220),
        width: "100%",
        resizeMode: "contain"
    },
    loginView: {
        marginHorizontal: horizontalScale(25),
        marginVertical: horizontalScale(15)
    },
    loginText:{
        color: colors.black2,
        fontSize: moderateScale(25),
        fontFamily: Fonts.robotoBold
    },
    otpSentMessage:{
        color:colors.gray2,
        fontFamily:Fonts.robotoRegular,
        fontSize: moderateScale(15),
        textAlign:'left',
        marginTop: horizontalScale(10)
    },
    textInputContainer: {
        marginTop: horizontalScale(10),
    },
    roundedTextInput: {
        borderRadius: moderateScale(10),
        borderWidth: moderateScale(1),
        borderColor: colors.gray,
        color: colors.black2,
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoRegular,
        height: horizontalScale(60),
        width: horizontalScale(60),
    },
    loginButton:{
        width:"100%",
        height: horizontalScale(55),
        borderRadius: horizontalScale(5),
        backgroundColor: colors.blue,
        alignItems: "center",
        justifyContent: "center",
        marginTop: horizontalScale(45)
    },
    loginButtontext:{
        color: colors.white,
        fontFamily: Fonts.robotoBold,
        fontSize: moderateScale(20),
    },
})

export default styles