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
    addAddressView: {
        height: horizontalScale(50),
        width :"100%",
        alignItems : "center",
        justifyContent : "center",
        marginVertical : horizontalScale(10),
    },
    addAddressButton :{
        borderRadius: horizontalScale(10),
        backgroundColor : colors.blue,
        height : "90%",
        width : "90%",
        alignItems : "center",
        justifyContent : "center",
    },
    addAddressText :{
        color: colors.white,
        fontSize : moderateScale(17),
        fontFamily : Fonts.robotoBold
    },
    addressListView : {
        marginHorizontal : horizontalScale(20),
    },
    saveAddressText : {
        color: colors.black2,
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoMedium,
    },
    addressView : {
        marginVertical : horizontalScale(10),
        flex:1
    },
    saveAddressView : {
        width : "90%",
        borderRadius : horizontalScale(10),
        borderWidth : 1,
        borderColor: colors.gray3,
        alignSelf : "center",
        padding : horizontalScale(10),
        marginBottom : horizontalScale(10)
    },
    blockNumberText : {
        color: colors.black2,
        fontFamily : Fonts.robotoBold,
        fontSize : moderateScale(17)
    },
    addressOneText : {
        color : colors.black2,
        fontFamily : Fonts.robotoRegular,
        fontSize: moderateScale(15)
    },
    userDetails : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between", 
        marginTop : horizontalScale(5)
    },
    addressUserIcon : {
        height: horizontalScale(20),
        width : horizontalScale(20)
    },
    addressUserText : {
        color: colors.black2,
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoRegular,
        marginStart: horizontalScale(5)
    },
    divider : {
        height : horizontalScale(1),
        backgroundColor: colors.gray3,
        width : "100%",
        marginVertical: horizontalScale(10)
    },
    addressTypeView :{
        flexDirection : "row",
        alignItems : "center",
        justifyContent  : "center",
        padding: horizontalScale(5),
        backgroundColor : colors.gray3,
        borderRadius: horizontalScale(10)
    },
    addressTypeImage : {
        height: horizontalScale(15),
        width: horizontalScale(15),
    },
    addressTypeText :{
        color: colors.black2,
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoRegular,
        marginStart: horizontalScale(5)
    },
    deleteButtonView : {
        height: horizontalScale(30),
        width: horizontalScale(60),
        alignItems : "center",
        justifyContent : "center",
        backgroundColor: colors.red,
        borderRadius: horizontalScale(10),
        marginRight: horizontalScale(10)
    },
    deleteText : {
        color: colors.white,
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoMedium
    },
    editButtonView : {
        height: horizontalScale(30),
        width: horizontalScale(50),
        alignItems : "center",
        justifyContent : "center",
        backgroundColor: colors.green,
        borderRadius: horizontalScale(10),
    }
})

export default styles