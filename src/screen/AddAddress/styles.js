import { Dimensions, StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../utils/responsiveSize";
import colors from "../../utils/colors";
import { Fonts } from "../../assets/Fonts";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.white
    },
    headerView:{
        backgroundColor: colors.lightBlue,
        height: horizontalScale(55),
        flexDirection: "row",
        paddingHorizontal: horizontalScale(13),
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerbackView:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    cartText: {
        color: colors.black2,
        fontSize: moderateScale(18),
        fontFamily: Fonts.robotoBold,
    },
    backButtonView: {
        height: horizontalScale(30),
        width: horizontalScale(30),
        alignItems: "flex-start",
        justifyContent: "center"
    },
    headerBack:{
        height: horizontalScale(15),
        width: horizontalScale(15),
        resizeMode: "contain",
    },
    addAddress : {
        flex :1,
        marginHorizontal: horizontalScale(20),
        marginVertical: horizontalScale(20)
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 16,
        padding: 10,
        borderRadius: 12,
        borderWidth : 1,
        borderColor : colors.gray3,
        marginVertical : horizontalScale(10)
    },
    image: {
        width: horizontalScale(20),
        height: horizontalScale(20),
        marginRight: 10,
    },
    title: {
        fontSize: moderateScale(16),
        // color: "#333",
        color: colors.black2,
        fontFamily : Fonts.robotoRegular
    },
    inputView: {
        paddingVertical: horizontalScale(10)
    },
    titleText : {
        color: colors.black2,
        fontFamily: Fonts.robotoRegular,
        fontSize: moderateScale(15)
    },
    compulsoryStar:{
        color: colors.red
     },
     inputValueContainer:{
        height: horizontalScale(50),
        width: "100%",
        borderWidth:1,
        borderColor: colors.gray3,
        borderRadius: horizontalScale(5)
     },
     bottomButtonView : {
        height : horizontalScale(50),
        width : "95%",
        alignSelf : "center",
        borderRadius : horizontalScale(10),
        backgroundColor : colors.blue,
        alignItems : "center",
        justifyContent :  "center"
     },
     saveAddressText : {
        color: colors.white,
        fontFamily : Fonts.robotoBold,
        fontSize : moderateScale(17)
     }
})

export default styles