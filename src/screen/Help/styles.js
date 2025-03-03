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
    helpView : {
        marginVertical: horizontalScale(15)
    },
    headerText :{
        marginHorizontal: horizontalScale(15),
        fontFamily: Fonts.robotoMedium,
        fontSize: moderateScale(17)
    },
    inputView : {
        marginVertical: horizontalScale(15)
    },
    submitButton :{
        height: horizontalScale(50),
        width: "92%",
        alignSelf: "center",
        borderRadius: horizontalScale(10),
        backgroundColor: colors.blue,
        alignItems: "center",
        justifyContent : "center"
    },
    submitText : {
        color: colors.white,
        fontSize: moderateScale(17),
        fontFamily: Fonts.robotoBold,
        textAlign: "center"
    }
})

export default styles