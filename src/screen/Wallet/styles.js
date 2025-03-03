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
    walletView: {
        marginHorizontal: horizontalScale(15),
        marginVertical: horizontalScale(20)
    },
    headerText1:{
        color: colors.black2,
        fontSize: moderateScale(35),
        fontFamily: Fonts.robotoBold
    },
    headerText2:{
        color: colors.blue,
        fontFamily: Fonts.robotoRegular,
        fontSize: moderateScale(35)
    },
    balanceView: {
        alignItems: "center",
        justifyContent :  "center",
        marginVertical: horizontalScale(20)
    },
    totalText: {
        color: colors.gray2,
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoBold
    },
    balanceText :{
        marginTop: horizontalScale(10),
        fontFamily: Fonts.robotoBold,
        fontSize: moderateScale(25),
        letterSpacing: 1.5
    },
    howUseView :{
        alignItems: "center",
        justifyContent : "center",
        alignSelf : "center"
    },
    howUseQue :{
        textAlign: "center",
        color: colors.blue,
        fontFamily: Fonts.robotoBold,
        fontSize: moderateScale(17)
    },
    dottedBorder:{
        width: horizontalScale(215),
        borderStyle: 'dotted', 
        borderColor: colors.blue, 
        marginTop: horizontalScale(3),
        borderBottomWidth: 1,
    },
    bottomSheet: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        borderTopLeftRadius: horizontalScale(20),
        borderTopRightRadius: horizontalScale(20),
        alignItems: 'center',
        padding: horizontalScale(20),
        elevation: 10,
    },
    dragIndicator: {
        width: horizontalScale(50),
        height: horizontalScale(5),
        backgroundColor: '#ccc',
        borderRadius: horizontalScale(5),
        marginBottom: horizontalScale(10),
    },
    sheetText: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
})

export default styles;