import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../../utils/responsiveSize";
import colors from "../../utils/colors";
import { Fonts } from "../../assets/Fonts";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.white
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
        justifyContent: "center"
    },
    headerbackIcon:{
        height: horizontalScale(15),
        width: horizontalScale(15),
        resizeMode: "contain"
    },
    greeting: {
        fontSize: moderateScale(18),
        fontFamily: Fonts.robotoBold,
        color: colors.black2,
        paddingStart: horizontalScale(15)
    },
    headerIcons: {
        flexDirection: "row",
        gap: horizontalScale(16),
    },
    homeCallIcon:{
        height: horizontalScale(23),
        width: horizontalScale(23)
    },
    dropdownView: {
        marginVertical: horizontalScale(15),
    },
    columnWrapper: {
        justifyContent:"space-evenly",
    },
    homeVisionView:{
        width:'46%',
        height: horizontalScale(200),
        alignItems:"center",
        justifyContent: "center",
        borderRadius: horizontalScale(8),
        overflow: "hidden",
        marginBottom: horizontalScale(10)
    },
    homeVisionImage:{
        height:'100%',
        width:'100%',
        borderRadius: horizontalScale(8),
    },
    detailsView:{
        marginVertical: horizontalScale(4),
        height:"100%"
    },
    bestSellerView:{
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop: horizontalScale(5)
    },
    bestSellerIcon:{
        height: horizontalScale(20),
        width: horizontalScale(62),
        justifyContent: "center"
    },
    bestSellerText:{
        color: colors.white,
        fontSize: moderateScale(9),
        paddingStart: horizontalScale(4),
        fontFamily: Fonts.robotoMedium
    },
    ratingView:{
        flexDirection: "row",
        alignItems: "center",
        marginStart: horizontalScale(5),
    },
    ratingText:{
        color: colors.black2,
        fontSize:moderateScale(12),
        fontFamily: Fonts.robotoBold,
    },
    ratingStarView:{
        height: horizontalScale(12),
        width: horizontalScale(12),
        resizeMode: "contain",
        marginStart: horizontalScale(1)
    },
    heartView:{
        height: horizontalScale(25),
        width: horizontalScale(25),
        borderRadius: horizontalScale(50),
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
        marginRight: horizontalScale(5)
    },
    likeUnlike:{
        height: horizontalScale(15),
        width: horizontalScale(15),
        resizeMode: "contain"
    },
    bottomView:{
        bottom:0,
        position: "absolute",
        backgroundColor: colors.white1,
        padding: horizontalScale(5),
        marginBottom: horizontalScale(10),
        marginLeft: horizontalScale(5),
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titleText: {
        color: colors.black21,
        fontSize: moderateScale(12),
        textTransform: "uppercase",
        fontFamily: Fonts.robotoBold
    },
    titleText1:{
        color: colors.black21,
        fontSize: moderateScale(12),
        textTransform: "uppercase",
        fontFamily: Fonts.robotoBold,
        paddingStart: horizontalScale(5)
    },
    titleText2:{
        color: colors.black21,
        fontSize: moderateScale(12),
        textTransform: "uppercase",
        fontFamily: Fonts.robotoMedium,
        textDecorationLine: "line-through"
    },
    filterButtonView:{
        height:horizontalScale(50), 
        width:horizontalScale(50), 
        borderRadius:horizontalScale(100),
        bottom:horizontalScale(50),
        position: "absolute",
        backgroundColor: colors.red,
        right: horizontalScale(5)
    },
    filterImage: {
        height: '100%', 
        width:"100%", 
        borderRadius: 10
    },
    filterMenuView:{
        width: "100%",
        height: horizontalScale(55),
        borderBottomWidth:1,
        borderBottomColor: colors.gray3,
        alignItems: "center",
        justifyContent :"center",
    },
    filterMenuText:{
        color: colors.black2,
        fontSize: moderateScale(15)
    },
    filterDetailsView:{ 
        width: "100%", 
        paddingHorizontal: horizontalScale(20), 
        paddingVertical: horizontalScale(10)
    },
    headerText:{
        fontSize: moderateScale(17),
        color: colors.black2,
        fontFamily: Fonts.robotoBold,
        marginVertical: horizontalScale(5)
    },
    priceView:{
        flexDirection: "row",
        height: horizontalScale(40),
        width: "100%",
        alignItems :"center",
        justifyContent: "space-between"
    },
    priceText :{
        color: colors.black2,
        fontSize: moderateScale(15),
        fontFamily: Fonts.robotoRegular
    },
    radioButton: {
        height: horizontalScale(15),
        width: horizontalScale(15),
        borderRadius: horizontalScale(30),
        borderWidth: 1,
        borderColor: colors.gray2,
        alignItems: "center",
        justifyContent: "center",
    },
    shapeDataFlatList: {
        marginBottom : horizontalScale(170)
    },
    glassView: {
        height: horizontalScale(150),
        width : "100%",
        borderWidth: 1,
        borderColor: colors.gray3,
        marginTop :horizontalScale(15),
        borderRadius: horizontalScale(10),
        overflow : "hidden",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 1,
        backgroundColor : colors.white
    },
    shapStyleImageView: {
        height: horizontalScale(100),
        width: '100%',
        resizeMode : "cover",
    },
    glassName:{
        flexDirection : "row",
        width : "100%",
        alignItems: "center",
        height : horizontalScale(50),
        paddingHorizontal : horizontalScale(8),
        borderTopWidth : 1,
        borderTopColor : colors.gray3
    },
    glassNameText : {
        color: colors.black2,
        fontSize : moderateScale(15),
        marginStart: horizontalScale(10),
        fontFamily: Fonts.robotoRegular
    },
    colorView:{
        flexDirection :"row",
        alignItems : "center",
        justifyContent  :"center"
    }
})

export default styles