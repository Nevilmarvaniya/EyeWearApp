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
    homeCallIcon:{
        height: horizontalScale(23),
        width: horizontalScale(23),
        marginStart: horizontalScale(15)
    },
    selectHeaderView :{
        flexDirection : "row",
        alignSelf : "center",
        height: horizontalScale(55),
        marginHorizontal: horizontalScale(20)
    },
    selectedHeaderView :{
        width: "50%",
        height : "100%",
        alignItems : "center",
        justifyContent : "center",
        borderBottomWidth : 1,
    },
    selectedHeaderText :{
        color: colors.black2,
        fontSize: moderateScale(17),
        fontFamily: Fonts.robotoMedium
    },
    wishlistView : {
        marginHorizontal : horizontalScale(20),
        marginVertical:horizontalScale(10)
    },
    wishlistdataView:{
        borderRadius: horizontalScale(10),
        borderColor: colors.gray3,
        borderWidth:1,
        padding:10,
        flexDirection: "row",
        alignItems : "center",
        justifyContent : "space-between",
        marginBottom : horizontalScale(10)
    },
    wishlistImage : {
        height: horizontalScale(80),
        width: horizontalScale(80),
        borderRadius: horizontalScale(10)
    },
    wishlistDetailview: {
        width: horizontalScale(180),
        marginStart: horizontalScale(10)
    },
    wishlistText :{
        color: colors.black2,
        fontFamily: Fonts.robotoRegular,
        fontSize: moderateScale(15)
    },
    wishlistPrice:{
        fontFamily: Fonts.robotoMedium,
        color: colors.black2,
        fontSize: moderateScale(18)
    },
    deleteIcon :{
        height: horizontalScale(20),
        width: horizontalScale(20),
    },
    flatListStyle : {
        marginBottom: horizontalScale(140)
    },
    recentView :{
        width :"100%",
        borderWidth : 1,
        borderColor: colors.gray3,
        borderRadius: horizontalScale(10),
        overflow : "hidden",
        marginBottom: horizontalScale(10)
    },
    recentViewImage : {
        height : horizontalScale(150),
        width : "100%",
    },
    recentDetailsView : {
        paddingVertical: horizontalScale(10),
        paddingHorizontal : horizontalScale(10),
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between"
    },
    ratingView:{
        height: horizontalScale(25),
        width: horizontalScale(65),
        borderRadius: horizontalScale(25),
        backgroundColor: colors.blue,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    ratingText: {
        color: colors.white,
        fontSize: moderateScale(13),
        fontFamily: Fonts.robotoBold
    },
    whiteStar:{
        height: horizontalScale(13),
        width: horizontalScale(13),
        resizeMode: "contain",
        marginLeft: horizontalScale(5)
    },
    productName1: {
        color: colors.black21,
        fontSize: moderateScale(16),
        fontFamily: Fonts.robotoBold
    },
    productName2:{
        color: colors.black2,
        fontSize: moderateScale(13),
        maxWidth: 200,
        marginTop: horizontalScale(3),
        fontFamily: Fonts.robotoRegular
    },
})

export default styles;