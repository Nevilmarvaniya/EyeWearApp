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
    notificationView :{
        borderRadius: horizontalScale(10),
        borderWidth: horizontalScale(1),
        borderColor: colors.gray3,
        marginHorizontal: horizontalScale(10),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
        height: horizontalScale(80),
        marginTop: horizontalScale(15)
    },
    colorView:{
        height: "100%",
        width: horizontalScale(10),
        backgroundColor: colors.yellow
    },
    newView:{
        right: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.red,
        padding: horizontalScale(5)
    },
    newText:{
        color: colors.white,
        fontSize: moderateScale(12),
        fontFamily: Fonts.robotoMedium
    },
    notificationDetails:{
        width: "81%",
        justifyContent : "center"
    },
    notificationTitle:{
        color: colors.black2,
        fontSize: moderateScale(14),
        fontFamily: Fonts.robotoBold
    },
    notificationDescription:{
        color: colors.gray,
        fontSize: moderateScale(13),
        fontFamily: Fonts.robotoRegular
    }
})

export default styles;