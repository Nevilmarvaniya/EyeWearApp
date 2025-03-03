import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../utils/responsiveSize";
import colors from "../../utils/colors";
import { Fonts } from "../../assets/Fonts";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white
    },
    contentContainerStyle:{
        flexGrow:1,
        paddingBottom: horizontalScale(50)
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.lightBlue,
        padding: horizontalScale(16),
    },
    headerSubView:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth:1,
        borderColor: colors.white
    },
    greeting: {
        fontSize: moderateScale(18),
        fontFamily: Fonts.robotoBold,
        color: colors.black2
    },
    headerIcons: {
        flexDirection: "row",
        gap: horizontalScale(16),
    },
    homeCallIcon:{
        height: horizontalScale(23),
        width: horizontalScale(23)
    },
    searchContainer:{
        paddingHorizontal: horizontalScale(16)
    },
    title: {
        fontSize: moderateScale(20),
        fontFamily: Fonts.robotoMedium,
        marginVertical: horizontalScale(20),
        color: colors.black2
    },
    seeAllText:{
        color: colors.blue,
        fontSize: moderateScale(17),
        fontFamily: Fonts.robotoMedium
    },
    title1: {
        fontSize: moderateScale(20),
        fontFamily: Fonts.robotoBold,
        marginTop: horizontalScale(20),
        color: colors.black2
    },
    title2: {
        fontSize: moderateScale(20),
        fontFamily: Fonts.robotoMedium,
        marginTop: horizontalScale(10),
        color: colors.gray
    },
    searchSection: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.white,
        borderRadius: horizontalScale(8),
        paddingHorizontal: horizontalScale(8),
        marginBottom: horizontalScale(16),
        borderColor: colors.gray3,
        borderWidth:1,
        justifyContent:"center",
        height: horizontalScale(50)
    },
    searchInput: {
        height: '100%',
        fontSize: 14,
        color: colors.black2,
        width: horizontalScale(220),
    },
    scanView:{
        width: horizontalScale(38), 
        height:'100%',
        alignItems: "center", 
        justifyContent:"center",
    },
    buyView:{
        paddingHorizontal: horizontalScale(16),
        marginTop: horizontalScale(15),
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between"
    },
    subBuyView:{
        borderWidth: 1,
        borderColor: colors.gray3,
        borderRadius: horizontalScale(5),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    buyIcon:{
        height: horizontalScale(30),
        width: horizontalScale(30),
        resizeMode: "contain",
    },
    buyText:{
        color: colors.gray,
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoRegular
    },
    buyText1:{
        color:colors.black2,
        fontFamily: Fonts.robotoMedium,
        fontSize: moderateScale(15)
    },
    eyeGlassContainer:{
        marginTop: horizontalScale(10),
        marginHorizontal: horizontalScale(16)
    },
    eyeGlassView:{
        alignItems: "center",
        justifyContent: "center",
        marginRight:horizontalScale(15)
    },
    eyeGlassImage:{
        height:horizontalScale(100),
        width:horizontalScale(100),
        borderRadius:horizontalScale(5),
        overflow:"hidden",
        marginBottom: horizontalScale(10)
    },
    eyeGlassImage1:{
        height:horizontalScale(100),
        width:horizontalScale(100)
    },
    eyeGlassText:{
        color: colors.black2,
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoRegular
    },
    homeBannerView:{
        width:'100%',
        marginTop: horizontalScale(25)
    },
    homeBannerImage:{
        width:'100%',
        height: horizontalScale(250),
        resizeMode: "stretch"
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
    columnWrapper: {
        justifyContent: 'space-between',
    },
    celeView:{
        alignItems: "center",
        justifyContent: "center",
        marginRight:horizontalScale(15)
    },
    celeImage:{
        height:horizontalScale(150),
        width:horizontalScale(150),
        borderRadius:horizontalScale(5),
        overflow:"hidden",
        marginBottom: horizontalScale(10)
    },
    celeImage1:{
        height:horizontalScale(150),
        width:horizontalScale(150)
    },
    PremiumWearView:{
        borderRadius: horizontalScale(5),
        borderWidth: 0.8,
        borderColor: colors.gray3,
        paddingHorizontal: horizontalScale(8),
        paddingVertical: horizontalScale(8),
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: horizontalScale(10)
    },
    PremiumImage:{
        height: horizontalScale(100),
        width: horizontalScale(130),
        borderRadius: horizontalScale(5),
        resizeMode: "contain"
    },
    preTitle:{
        width: horizontalScale(160),
    },
    preTitle1:{
        color: colors.black2,
        fontSize: moderateScale(18),
        fontFamily: Fonts.robotoRegular
    },
    homeHolidayImage:{
        height: horizontalScale(300),
        width:"100%",
        borderRadius: horizontalScale(8)
    },
    visionImageView:{
        width:"100%",
        height: horizontalScale(180),
        borderRadius: horizontalScale(8),
        marginTop: horizontalScale(20),
        backgroundColor:colors.lightBlue,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center",
        overflow:"hidden"
    },
    homeBottomImage:{
        width:"50%",
        height: "100%",
    },
    eyeTextImage:{
        height:'100%',
        width:"100%"
    },
    homeView1:{
        height:'50%',
        width:"100%",
        alignItems: "center",
        justifyContent: "center"
    },
    homeView2:{
        height:'40%',
        width:"100%",
        alignItems: "center",
        justifyContent: "center"
    },
    homeBookNow:{
        backgroundColor: colors.blue,
        height: horizontalScale(35),
        width: horizontalScale(100),
        borderRadius: horizontalScale(20),
        alignItems:"center",
        justifyContent: "center"
    },
    bookNowText:{
        color: colors.white,
        fontSize: moderateScale(14),
        fontFamily: Fonts.robotoMedium
    },
    bringStore:{
        color: colors.black2,
        fontSize: moderateScale(17),
        fontFamily: Fonts.robotoRegular
    }
})

export default styles