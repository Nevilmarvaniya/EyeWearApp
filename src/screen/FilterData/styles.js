import { Dimensions, StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../utils/responsiveSize";
import colors from "../../utils/colors";
import { Fonts } from "../../assets/Fonts";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white
    },
    headerView:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: horizontalScale(15),
        height: horizontalScale(55),
        backgroundColor: colors.lightBlue,
    },
    headerText:{
        color: colors.black2,
        fontSize: moderateScale(18),
        fontFamily: Fonts.robotoBold,
    },
    closeView:{
        height: horizontalScale(30),
        width: horizontalScale(30),
        alignItems: "center",
        justifyContent: "center"
    },
    headerClose:{
        height: horizontalScale(20),
        width: horizontalScale(20),
        resizeMode: "contain"
    }
})

export default styles;