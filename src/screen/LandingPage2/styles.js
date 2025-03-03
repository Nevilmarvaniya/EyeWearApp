import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../utils/responsiveSize";
import colors from "../../utils/colors";
import { Fonts } from "../../assets/Fonts";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white
    },
    frameView:{
        width:'100%',
        paddingVertical: horizontalScale(15),
        paddingHorizontal: horizontalScale(25),
    },
    headerTextView:{
        height: horizontalScale(50)
    },
    headerTextView1:{
        height: horizontalScale(27)
    },
    frameText:{
        fontSize: moderateScale(33),
        fontFamily: Fonts.robotoBold,
        color: colors.black2
    },
    frameText1:{
        color: colors.gray,
        fontSize: moderateScale(18),
        fontFamily: Fonts.robotoMedium
    },
    buttonView:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: horizontalScale(25),
        marginTop: horizontalScale(23)
    },
    letsGoButton:{
        backgroundColor: colors.blue,
        borderRadius: horizontalScale(20),
        height: horizontalScale(40),
        width: horizontalScale(100),
        alignItems:"center",
        justifyContent: "center"
    },
    letsGoText:{
        color: colors.white,
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoMedium
    },
    skipButton:{
        borderColor: colors.blue,
        borderRadius: horizontalScale(20),
        height: horizontalScale(40),
        width: horizontalScale(100),
        alignItems:"center",
        justifyContent: "center",
        borderWidth: 1
    },
    skipText:{
        color: colors.blue,
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoMedium
    },
    bottomImage:{
        bottom:0,
        position: "absolute",
        height: horizontalScale(360),
        width:'100%'
    },
    bottomImage1:{
        height:'100%',
        width:"100%",
        resizeMode: "contain"
    }
})

export default styles