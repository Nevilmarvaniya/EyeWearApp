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
    emailView:{
        width:"100%",
        height: horizontalScale(55),
        borderRadius: horizontalScale(5),
        borderWidth: 0.8,
        borderColor: colors.gray1,
        marginVertical: horizontalScale(15),
        alignItems:"center",
        justifyContent:"center"
    },
    emailInput:{
        height:"100%",
        width: "95%",
        color: colors.gray2,
        fontSize: moderateScale(14),
        fontFamily: Fonts.robotoRegular
    },
    passwordView:{
        width:"100%",
        height: horizontalScale(55),
        borderRadius: horizontalScale(5),
        borderWidth: 0.8,
        borderColor: colors.gray1,
        alignItems:"center",
        justifyContent:"center"
    },
    passwordInput:{
        height:"100%",
        width: "95%",
        color: colors.gray2,
        fontSize: moderateScale(14),
        fontFamily: Fonts.robotoRegular
    },
    forgotText:{
        textAlign:"right",
        color: colors.gray2,
        fontSize: moderateScale(14),
        marginTop: horizontalScale(10),
        fontFamily: Fonts.robotoMedium
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
    loginButton1:{
        width:"100%",
        height: horizontalScale(55),
        borderRadius: horizontalScale(5),
        backgroundColor: colors.blue,
        alignItems: "center",
        justifyContent: "center",
        marginTop: horizontalScale(10)
    },
    loginButtontext:{
        color: colors.white,
        fontFamily: Fonts.robotoBold,
        fontSize: moderateScale(20),
    },
    signUpWithView:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent: 'center',
        marginVertical: horizontalScale(20),
        marginTop: horizontalScale(30)
    },
    lineImage:{
        width: horizontalScale(110),
        height: horizontalScale(5),
        resizeMode: "stretch"
    },
    signUpText:{
        color: colors.gray2,
        fontSize: moderateScale(13),
        paddingHorizontal: horizontalScale(10),
        fontFamily: Fonts.robotoMedium
    },
    bottomButton:{
        width:'60%',
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection: "row",
        alignSelf: "center"
    },
    googleView:{
        height: horizontalScale(52),
        width: horizontalScale(52),
        borderRadius: horizontalScale(100),
        borderWidth: 0.5,
        borderColor: colors.pink,
        backgroundColor: colors.gray3,
        alignItems: "center",
        justifyContent: "center"
    },
    loginButtonView:{
        height: horizontalScale(30),
        width: horizontalScale(30),
        resizeMode: "contain"
    }
})

export default styles