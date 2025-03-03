import { Dimensions, StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../utils/responsiveSize";
import colors from "../../utils/colors";
import { Fonts } from "../../assets/Fonts";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.modalBackground
    },
    modalView:{
        width: '100%',
        backgroundColor: colors.white,
        padding: horizontalScale(10),
        borderTopRightRadius: horizontalScale(15),
        borderTopLeftRadius: horizontalScale(15),
        bottom:0,
        position: "absolute"
    },
    headerView:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: horizontalScale(50),
        width: "100%"
    },
    bilTextHeader: {
        color: colors.black2,
        fontSize: moderateScale(17),
        fontFamily: Fonts.robotoBold
    },
    closeIcon:{
        height: horizontalScale(25),
        width: horizontalScale(25),
    },
    bilDetailsview:{
        marginVertical: horizontalScale(15),
        width: '100%',
        borderColor: colors.gray3,
        borderWidth:1,
        padding: horizontalScale(10),
        borderRadius: horizontalScale(10)
    },
    subDetailsView:{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: horizontalScale(5)
    },
    totalText: {
        color: colors.black2,
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoRegular
    },
    totalAmountText: {
        color: colors.black2,
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoBold
    },
    lineView:{
        marginVertical: horizontalScale(10)
    },
    dottedImage:{
        height: horizontalScale(1),
        width: '100%'
    },
})

export default styles;