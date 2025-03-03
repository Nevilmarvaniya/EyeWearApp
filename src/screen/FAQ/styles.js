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
    knowEyeWearView:{
        marginHorizontal: horizontalScale(15),
        marginVertical: horizontalScale(10)
    },
    headerTitle :{
        color: colors.black2,
        fontSize: moderateScale(17),
        fontFamily: Fonts.robotoBold
    },
    rightFrameButton:{
        width:"100%",
        flexDirection: "row",
        paddingHorizontal: horizontalScale(10),
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: horizontalScale(10),
        backgroundColor: colors.gray3,
        marginTop: horizontalScale(10)
    },
    iconView:{
        height: horizontalScale(15),
        width: horizontalScale(15),
        resizeMode: "contain"
    },
    innerContent: {
        padding: 15,
        position: "absolute",
        width: "100%",
    },
    detailsText:{
        width: "100%",
        textAlign: "justify",
        color: colors.black2
    },
    frameDetailsImage:{
        height: horizontalScale(180),
        width: horizontalScale(310),
        marginVertical: horizontalScale(10)
    },
    animationView:{
        overflow: "hidden",
        paddingHorizontal: 15,
        width: "100%",
        borderWidth: 1,
        borderColor: colors.gray3,
        borderBottomLeftRadius: horizontalScale(10),
        borderBottomRightRadius: horizontalScale(10)
    },
    titleText:{
        fontSize: moderateScale(15),
        color: colors.black2,
        fontFamily: Fonts.robotoBold,
        maxWidth: horizontalScale(300)
    },
    lenseDetails:{
        width:'100%',
        flexDirection: "row",
        justifyContent:"center"
    },
    typeView:{
        width:horizontalScale(140),
        alignItems: "center",
        textAlign: "center",
        paddingStart: horizontalScale(5)
    },
    featuresView:{
        width:'70%',
        alignItems: "center",
    },
    divider:{
        height:1,
        backgroundColor: colors.gray3,
        width: horizontalScale(310)
    }
})

export default styles;