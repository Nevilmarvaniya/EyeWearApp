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
        paddingHorizontal: horizontalScale(13),
        justifyContent: "center",
    },
    cartText: {
        color: colors.black2,
        fontSize: moderateScale(18),
        fontFamily: Fonts.robotoBold,
    },
    mainView:{
        paddingVertical: horizontalScale(10),
        paddingHorizontal: horizontalScale(15),
        flex:1
    },
    contentContainer:{
        flexGrow:1,
        paddingBottom: horizontalScale(50),
    },
    profileDetails:{
        borderWidth:1,
        borderRadius: horizontalScale(5),
        borderColor: colors.gray3,
        paddingHorizontal: horizontalScale(10),
        paddingVertical: horizontalScale(15),
        marginVertical: horizontalScale(10),
        flexDirection: "row",
        alignItems: "center"
    },
    profileImage:{
        height: horizontalScale(45),
        width: horizontalScale(45),
        borderRadius: horizontalScale(90)
    },
    profileDetailsView:{
        marginStart: horizontalScale(10)
    },
    profileName: {
        color: colors.black2,
        fontFamily: Fonts.robotoRegular,
        fontSize: moderateScale(15)
    },
    subMenuView:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: horizontalScale(13)
    },
    orderView:{
        height: horizontalScale(70),
        width: horizontalScale(100),
        borderWidth:1,
        borderRadius: horizontalScale(5),
        borderColor: colors.gray3,
        alignItems: "center",
        justifyContent: "center"
    },
    orderBox:{
        height: horizontalScale(20),
        width: horizontalScale(20),
        resizeMode: "contain"
    },
    orderText:{
        color: colors.black2,
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoBold,
        marginTop: horizontalScale(5)
    },
    myEyesView:{
        width: "100%",
        borderWidth:1,
        borderRadius: horizontalScale(5),
        borderColor: colors.gray3,
        marginTop: horizontalScale(25)
    },
    myEyesHeader:{
        height: horizontalScale(50),
        borderBottomWidth:1,
        borderBottomColor: colors.gray3,
        justifyContent: "center",
        paddingHorizontal: horizontalScale(10)
    },
    myEyesHeaderText:{
        color: colors.black2,
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoBold,
    },
    myEyesHeaderSubView:{
        height: horizontalScale(50),
        borderBottomWidth:1,
        borderBottomColor: colors.gray3,
        paddingHorizontal: horizontalScale(10),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    myEyesHeaderSubViewText:{
        color: colors.black2,
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoRegular,
    },
    settingTextView:{
        color: colors.black2,
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoRegular,
        marginStart: horizontalScale(10)
    },
    rightArrowIcon:{
        height: horizontalScale(15),
        width: horizontalScale(15),
        resizeMode: "contain"
    },
    settingMenuIcon:{
        height: horizontalScale(20),
        width: horizontalScale(20),
        resizeMode: "contain"
    },
    settingSubView:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default styles;