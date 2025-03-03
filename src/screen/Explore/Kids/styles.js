import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../../utils/responsiveSize";
import colors from "../../../utils/colors";
import { Fonts } from "../../../assets/Fonts";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerScroll: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.gray4,
        padding: horizontalScale(8),
        marginHorizontal: horizontalScale(10),
        borderRadius: horizontalScale(25)
    },
    imageContainer: {
        height: horizontalScale(25), 
        width: horizontalScale(40), 
        borderRadius: horizontalScale(40),
        backgroundColor: colors.white, 
        borderWidth:1, 
        borderColor: colors.white, 
        alignItems: "center", 
        justifyContent: "center"
    },
    imageIcon: {
        height: horizontalScale(25),
        width: horizontalScale(25)
    },
    title : {
        marginStart: horizontalScale(10),
        color: colors.black2,
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoMedium
    },
    scrollView :{
        flex: 1,
        marginTop: horizontalScale(10)
    },
    contentContainerStyle : {
        flexGrow: 1
    },
    mainImage :{
        height: horizontalScale(250),
        width: '100%'
    },
    exploreDetails :{
        width: "100%",
        backgroundColor: colors.white,
        borderTopLeftRadius: horizontalScale(15),
        borderTopRightRadius: horizontalScale(15),
        height: "100%",
        marginTop: horizontalScale(-15),
        paddingHorizontal: horizontalScale(15),
        paddingVertical: horizontalScale(10)
    },
    headerView : {
        marginVertical: horizontalScale(5),
        paddingHorizontal: horizontalScale(10)
    },
    shopText :{
        color: colors.black2,
        fontSize: moderateScale(17),
        fontFamily: Fonts.robotoBold
    },
    shopText2 :{
        color: colors.black2,
        fontSize: moderateScale(17),
        fontFamily: Fonts.robotoBold,
        textAlign: "center"
    },
    headerView1 :{
        marginVertical: horizontalScale(10)
    },
    headerView2: {
        marginVertical: horizontalScale(15)
    },
    shopText1:{
        color: colors.gray2,
        fontFamily: Fonts.robotoRegular,
        fontSize: moderateScale(15),
        marginTop: moderateScale(5)
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    homeVisionView:{
        width:'50%',
        height: horizontalScale(200),
        alignItems:"center",
        justifyContent: "center",
        borderRadius: horizontalScale(8),
        overflow: "hidden"
    },
    homeVisionImage:{
        height:'95%',
        width:'95%',
        borderRadius: horizontalScale(8),
    },
    trendydataView: {
        width:'50%',
        height: horizontalScale(140),
        alignItems:"center",
        justifyContent: "center",
        overflow: "hidden",
        marginTop: horizontalScale(15),
    },
    image1 :{
        height:horizontalScale(110),
        width:'95%',
        borderRadius: horizontalScale(8),
        marginTop: horizontalScale(10)
    },
    titleView: {
        marginVertical: horizontalScale(10)
    },
    titleText :{
        color: colors.black2,
        fontSize: moderateScale(14),
        fontFamily: Fonts.robotoMedium
    },
    newDataView :{
        width: "100%",
        borderWidth:1,
        borderColor: colors.gray3,
        borderRadius: horizontalScale(10),
        overflow: "hidden",
        marginBottom: horizontalScale(30)
    },
    headerNewDataView :{
        height: horizontalScale(70),
        paddingHorizontal: horizontalScale(15),
        borderBottomWidth: 1,
        borderBottomColor: colors.gray3,
        alignItems: "center",
        justifyContent: "center"
    },
    headerScroll1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.gray4,
        height: horizontalScale(40),
        paddingHorizontal: horizontalScale(20),
        marginHorizontal: horizontalScale(5),
        borderRadius: horizontalScale(25),
        alignSelf: "center"
    },
    imageContainer1: {
        width: horizontalScale(320),
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        borderWidth:1,
        borderColor: "#fff",
        alignSelf: "center",
        marginVertical: horizontalScale(10),
        marginHorizontal: horizontalScale(10),
        borderRadius: horizontalScale(10)
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
        borderRadius: horizontalScale(10)
    },
    bottomView: {
        alignSelf: "center",
        marginBottom: horizontalScale(30)
    },
    blackDivider :{
        height: horizontalScale(10),
        backgroundColor: colors.black2,
        width: horizontalScale(102),
        marginTop: horizontalScale(5),
        alignSelf: "center"
    },
    zeroView :{
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    zeroOne :{
        letterSpacing: 1,
        color: colors.lightBlue,
        fontSize: moderateScale(130),
        fontFamily: Fonts.robotoBold,
        textAlign: "center",
    },
    bottomText : {
        color: colors.black2,
        fontSize: moderateScale(17),
        fontFamily: Fonts.robotoRegular,
        textAlign: "center"
    }
})

export default styles