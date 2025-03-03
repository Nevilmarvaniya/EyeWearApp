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
        width: horizontalScale(23)
    },
    productCartLengthData:{
        marginVertical: horizontalScale(20),
        color: colors.black2,
        marginHorizontal: horizontalScale(10),
        fontFamily: Fonts.robotoBold,
        fontSize: moderateScale(17)
    },
    cartItemView:{
        borderWidth:1,
        borderColor: colors.gray3,
        borderRadius: horizontalScale(8),
        marginHorizontal: horizontalScale(10),
        paddingVertical: horizontalScale(10),
        paddingHorizontal: horizontalScale(10),
        marginBottom: horizontalScale(10),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    productImage: {
        height: horizontalScale(80),
        width: horizontalScale(80),
    },
    productDetailsView: {
        marginStart: horizontalScale(10)
    },
    productName: {
        color: colors.black2,
        fontSize: moderateScale(14),
        fontFamily: Fonts.robotoRegular
    },
    productName1: {
        color: colors.black2,
        fontSize: moderateScale(14),
        fontFamily: Fonts.robotoBold
    },
    closeIcon:{
        height: horizontalScale(25),
        width: horizontalScale(25),
    },
    couponView:{
        borderWidth:1,
        borderColor: colors.gray3,
        borderRadius: horizontalScale(8),
        marginHorizontal: horizontalScale(10),
        paddingVertical: horizontalScale(10),
        paddingHorizontal: horizontalScale(10),
        marginBottom: horizontalScale(10),
    },
    couponSubView:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    couponSubView1:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginVertical: horizontalScale(8)
    },
    couponSubView2:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: horizontalScale(10)
    },
    couponApplyText:{
        color: colors.black2,
        fontSize: moderateScale(14),
        fontFamily: Fonts.robotoRegular
    },
    couponApplyText1:{
        color: colors.black2,
        fontSize: moderateScale(14),
        fontFamily: Fonts.robotoBold
    },
    rightView:{
        height: horizontalScale(30),
        width: horizontalScale(30),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.green,
        borderRadius: horizontalScale(60)
    },
    appliedView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: horizontalScale(10)
    },
    appliedCouponText: {
        marginStart: horizontalScale(5)
    },
    lineView:{
        marginVertical: horizontalScale(10)
    },
    dottedImage:{
        height: horizontalScale(1),
        width: '100%'
    },
    viewAllCouponText: {
        textAlign: "center",
        color: colors.black2,
        fontSize: moderateScale(14),
        fontFamily: Fonts.robotoMedium
    },
    divider: {
        backgroundColor: colors.gray3,
        height: horizontalScale(1),
        width: "100%",
        marginVertical: horizontalScale(15),
    },
    cartButton: {
        width:'60%', 
        padding: horizontalScale(10),
        backgroundColor: colors.blue,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: horizontalScale(8),
        marginTop: horizontalScale(10)
    },
    addCartText:{
        color: colors.white,
        fontSize: moderateScale(15),
        textAlign: "center",
        fontFamily: Fonts.robotoBold
    }
})

export default styles