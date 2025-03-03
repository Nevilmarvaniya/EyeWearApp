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
    bilText: {
        color: colors.black2,
        fontFamily: Fonts.robotoRegular,
        fontSize : moderateScale(14)
    },
    paymentView:{
        paddingVertical:  horizontalScale(15),
        paddingHorizontal: horizontalScale(20)
    },
    headerText:{
        color: colors.black2,
        fontSize: moderateScale(16),
        fontFamily: Fonts.robotoBold
    },
    googlePay:{
        width: "100%",
        borderWidth:1,
        borderColor: colors.gray3,
        borderRadius: horizontalScale(5),
        paddingVertical: horizontalScale(5),
        marginVertical: horizontalScale(10),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: horizontalScale(10),
        height: horizontalScale(50)
    },
    upiView:{
        width: "100%",
        borderWidth:1,
        borderColor: colors.gray3,
        borderRadius: horizontalScale(5),
        paddingVertical: horizontalScale(5),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: horizontalScale(10),
        height: horizontalScale(50)
    },
    googlePayIcon:{
        height: horizontalScale(35),
        width: horizontalScale(35),
        resizeMode: "contain"
    },
    upiIcon:{
        height: horizontalScale(45),
        width: horizontalScale(45),
        resizeMode: "contain"
    },
    bankicon:{
        height: horizontalScale(35),
        width: horizontalScale(35),
        resizeMode: "contain"
    },
    gpayText:{
        color: colors.black2,
        fontSize: moderateScale(14),
        fontFamily: Fonts.robotoRegular,
        marginStart: horizontalScale(20)
    },
    upiText:{
        color: colors.black2,
        fontSize: moderateScale(14),
        fontFamily: Fonts.robotoRegular,
        marginStart: horizontalScale(10)
    },
    selectedGpay:{
        borderRadius: horizontalScale(50),
        height: horizontalScale(25),
        width: horizontalScale(25),
        borderWidth:2,
        borderColor: colors.gray4,
        backgroundColor: colors.blue
    },
    buttonView:{
        height: horizontalScale(30),
        width: horizontalScale(25),
        alignItems: "center",
        justifyContent :"center"
    },
    downArrow:{
        height: horizontalScale(15),
        width: horizontalScale(15),
        resizeMode: "contain"
    },
    cardView:{
        marginTop: horizontalScale(25)
    },
    bankingView:{
        width: "100%",
        borderWidth:1,
        borderColor: colors.gray3,
        borderRadius: horizontalScale(5),
        marginTop: horizontalScale(10),
        paddingHorizontal: horizontalScale(10)
    },
    bankDetailsView:{
        flexDirection: "row",
        alignItems: "center",
        height: horizontalScale(50)
    },
    dottedImage:{
        height: horizontalScale(1),
        width: '100%'
    },
    otherBankView:{
        flexDirection: "row",
        alignItems: "center",
        height: horizontalScale(50),
        justifyContent: "center"
    },
    cartButton: {
        width:'60%', 
        padding: horizontalScale(10),
        backgroundColor: colors.blue,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: horizontalScale(8),
        marginTop: horizontalScale(35)
    },
    addCartText:{
        color: colors.white,
        fontSize: moderateScale(15),
        textAlign: "center",
        fontFamily: Fonts.robotoBold
    }
})

export default styles;