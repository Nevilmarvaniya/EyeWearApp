import { Dimensions, StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../utils/responsiveSize";
import colors from "../../utils/colors";
import { Fonts } from "../../assets/Fonts";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.white
    },
    productImage:{
        height:horizontalScale(300),
        width:  "100%",
    },
    headerView:{
        flexDirection: "row",
        alignItems:"center",
        paddingHorizontal: horizontalScale(15),
        justifyContent: "space-between",
        paddingVertical: horizontalScale(20)
    },
    headerBack:{
        height: horizontalScale(15),
        width: horizontalScale(15),
        resizeMode: "contain"
    },
    headerSubView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    shareIcon:{
        height: horizontalScale(20),
        width: horizontalScale(20),
        resizeMode: "contain"
    },
    blackHeart:{
        height: horizontalScale(20),
        width: horizontalScale(20),
        marginStart: horizontalScale(30)
    },
    detailsView: {
        backgroundColor: colors.white,
        borderTopLeftRadius: horizontalScale(25),
        borderTopRightRadius: horizontalScale(25),
        
        marginTop: "-5%",
        paddingTop: horizontalScale(5)
    },
    productView:{
        width:'100%',
        paddingTop: horizontalScale(8),
        paddingHorizontal: horizontalScale(15),
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    storeView:{
        width:'100%',
        paddingHorizontal: horizontalScale(15),
        paddingVertical: horizontalScale(15),
    },
    productName1: {
        color: colors.black21,
        fontSize: moderateScale(16),
        fontFamily: Fonts.robotoBold
    },
    addressName:{
        color: colors.black21,
        fontSize: moderateScale(17),
        fontFamily: Fonts.robotoBold
    },
    productName2:{
        color: colors.black2,
        fontSize: moderateScale(13),
        maxWidth: 200,
        marginTop: horizontalScale(3),
        fontFamily: Fonts.robotoRegular
    },
    productName3:{
        color: colors.blue,
        fontSize: moderateScale(16),
        fontFamily: Fonts.robotoBold,
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
    divider: {
        borderBottomWidth:1,
        borderBottomColor: "#999999",
        opacity: 0.3,
        marginTop: horizontalScale(25)
    },
    divider1: {
        borderBottomWidth:1,
        borderBottomColor: "#999999",
        opacity: 0.3,
    },
    frameDeatilsView:{
        paddingVertical: horizontalScale(30),
        width:"100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    detailsSubView:{
        width:'20%',
        alignItems: "center",
        justifyContent: "center",
    },
    detailWidthImage:{
        height: horizontalScale(25),
        width: horizontalScale(40),
        resizeMode: "contain"
    },
    detailText:{
        color: colors.black2,
        fontFamily: Fonts.robotoBold,
        fontSize: moderateScale(13),
        textAlign: "center",
        marginTop: horizontalScale(10)
    },
    detailText1:{
        color: colors.black2,
        fontSize: moderateScale(11),
        textAlign: "center",
        maxWidth: horizontalScale(50),
        marginTop: 5,
        fontFamily: Fonts.robotoRegular
    },
    addressView:{
        marginVertical: horizontalScale(15),
        width:"100%",
        borderWidth:1,
        borderColor: colors.gray3,
        paddingVertical: horizontalScale(10),
        paddingHorizontal: horizontalScale(10),
        borderRadius: horizontalScale(8),
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between"
    },
    addressView1:{
        marginVertical: horizontalScale(15),
        width:"100%",
        paddingVertical: horizontalScale(10),
        paddingHorizontal: horizontalScale(10),
        borderRadius: horizontalScale(8),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: colors.white,
        elevation: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    addressImage: {
        height: horizontalScale(100),
        width: horizontalScale(100)
    },
    address: {
        width: "60%",
    },
    addressText1:{
        color: colors.black2,
        fontSize: moderateScale(14),
        fontFamily: Fonts.robotoRegular
    },
    locationView:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    locationView1:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    locationImage:{
        height: horizontalScale(23),
        width: horizontalScale(23),
        resizeMode: "contain"
    },
    locationCity:{
        marginStart: horizontalScale(10),
        color: colors.black2,
        fontFamily: Fonts.robotoRegular
    },
    changeText: {
        color: colors.blue,
        fontSize: moderateScale(14),
        fontFamily: Fonts.robotoBold,
    },
    spectDetailImage: {
        height: horizontalScale(200),
        width: '100%',
        borderRadius: horizontalScale(8),
        marginTop: horizontalScale(10)
    },
    reviewView:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: horizontalScale(15)
    },
    writeReviewButton:{
        borderWidth:0.5,
        borderColor: colors.gray2,
        borderRadius: horizontalScale(8),
        paddingVertical: horizontalScale(5),
        paddingHorizontal: horizontalScale(15)
    },
    totalReviewView:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: horizontalScale(15)
    },
    blueBox:{
        backgroundColor: colors.blue,
        height: horizontalScale(100),
        width: horizontalScale(100),
        borderRadius: horizontalScale(10),
        alignItems: "center",
        justifyContent :"center"
    },
    reviewText1:{ 
        color: colors.white,
        fontSize: moderateScale(25),
        fontFamily: Fonts.robotoBold
    },
    reviewText2: {
        color: colors.white,
        fontSize: moderateScale(18),
        fontFamily: Fonts.robotoRegular
    },
    reviewText3:{ 
        color: colors.white,
        fontSize: moderateScale(18),
        fontFamily: Fonts.robotoBold
    },
    starRatingView: {
        marginBottom: horizontalScale(10),
        alignItems: "flex-start"
    },
    excellentText:{
        color: colors.black2, 
        fontSize: moderateScale(14),
        marginRight: horizontalScale(10),
        fontFamily: Fonts.robotoRegular
    },
    reviewView1:{
        width: horizontalScale(225)
    },
    allReviewButton: {
        borderTopWidth: 1,
        borderTopColor: colors.gray3,
        borderBottomColor: colors.gray3,
        borderBottomWidth:1,
        width:'100%',
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: horizontalScale(7),
        marginTop: horizontalScale(10)
    },
    readReviewButton:{
        textAlign: "center",
        color: colors.black2,
        fontFamily: Fonts.robotoBold
    },
    previewProfileImage: {
        height: horizontalScale(40),
        width: horizontalScale(40),
        borderRadius: horizontalScale(80)
    },
    reviewUserName:{
        color: colors.black2,
        fontFamily: Fonts.robotoBold,
        fontSize: moderateScale(15),
        marginStart: horizontalScale(10)
    },
    ratingReview:{
        borderWidth:1,
        borderColor: colors.gray3,
        borderRadius: horizontalScale(10),
        marginBottom: horizontalScale(15),
        padding: horizontalScale(10)
    },
    ratingReviewDetails:{
        color: colors.black2,
        fontFamily: Fonts.robotoRegular,
        fontSize: moderateScale(14)
    },
    cartButton: {
        width:'60%', 
        padding: horizontalScale(10),
        backgroundColor: colors.blue,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: horizontalScale(8)
    },
    addCartText:{
        color: colors.white,
        fontSize: moderateScale(15),
        textAlign: "center",
        fontFamily: Fonts.robotoBold
    }
})

export default styles